import { useState, useMemo, useRef, useLayoutEffect } from "react";
import { sortRows, filterRows, paginateRows } from "./helpers";
import { Pagination } from "./Pagination";
import styles from "../../styles/theme/main.module.scss";

import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import Link from "next/link";

export const DataTable = ({ columns, rows, withFilters, rowsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: "asc", orderBy: "id" });
  // const [rowsPerPage, setRowsPerPage] = useState(3); // TODO: make this dynamic

  // const rowsPerPage = 3;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = (value, accessor) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor,
    }));
  };

  const clearAll = () => {
    setSort({ order: "asc", orderBy: "id" });
    setActivePage(1);
    setFilters({});
  };

  return (
    <>
      <div className={styles["dataTable__container"]}>
        <table className={styles["popular__market--container"]}>
          <thead>
            <tr style={{ padding: "1.6rem" }}>
              {columns.map((column) => {
                const sortIcon = () => {
                  if (column.accessor === sort.orderBy) {
                    if (sort.order === "desc") {
                      return <BiDownArrowAlt />;
                    }
                    return <BiUpArrowAlt />;
                  } else {
                    return <BiUpArrowAlt />;
                  }
                };

                return (
                  <th key={column.accessor} className={styles["body-1"]}>
                    <span>{column.label}</span>
                    {withFilters && (
                      <button
                        onClick={() => handleSort(column.accessor)}
                        className={styles["btn--sort"]}
                        style={{ transform: "translateY(3px)" }}
                      >
                        {sortIcon()}
                      </button>
                    )}
                  </th>
                );
              })}
            </tr>
            {withFilters && (
              <tr style={{ padding: "1.6rem" }}>
                {columns.map((column) => {
                  return (
                    <th className={styles["body-1"]}>
                      <input
                        className={styles["table--search"]}
                        key={`${column.accessor}-search`}
                        type="search"
                        placeholder={`Search ${column.label}`}
                        value={filters[column.accessor]}
                        // style={{ maxWidth: `${width}` }}
                        onChange={(event) =>
                          handleSearch(event.target.value, column.accessor)
                        }
                      />
                    </th>
                  );
                })}
              </tr>
            )}
          </thead>
          <tbody>
            {calculatedRows.map((row) => {
              return (
                <Link
                  href={{
                    pathname: "/exchange",
                    query: {
                      id: row.id,
                    },
                  }}
                >
                  <tr key={row.id} className={styles["table-row"]}>
                    {columns.map((column) => {
                      return column.accessor === "pair" ? (
                        <td>
                          <div
                            className={`${styles["body-2"]} ${styles["table-row__img"]}`}
                          >
                            <img
                              src={row[column.accessor]?.image}
                              style={{
                                width: "3.2rem",
                                marginInlineEnd: "1.6rem",
                              }}
                              loading="lazy"
                            />
                            <div>
                              <span>{row[column.accessor]?.name}</span>
                              <span className={styles["caption"]}>
                                &nbsp;{row[column.accessor]?.caption}
                              </span>
                            </div>
                          </div>
                        </td>
                      ) : (
                        <td key={column.accessor} className={styles["body-1"]}>
                          {row[column.accessor]}
                        </td>
                      );
                    })}
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
      {withFilters &&
        (count > 0 ? (
          <Pagination
            activePage={activePage}
            count={count}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
            setActivePage={setActivePage}
          />
        ) : (
          <div className={styles["table--notFound"]}>
            <img
              alt="empty content"
              src="/images/no_data.svg"
              style={{ maxWidth: "20rem" }}
              loading="lazy"
            />
            <p className={styles["caption"]}>No results</p>
          </div>
        ))}

      {/* <div>
        <p>
          <button onClick={clearAll}>Clear all</button>
        </p>
      </div> */}
    </>
  );
};
