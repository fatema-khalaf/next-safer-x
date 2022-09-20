/* eslint-disable jsx-a11y/accessible-emoji */
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import styles from "../../styles/theme/main.module.scss";
export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div className={styles["pagination"]}>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === 1 && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === 1}
          onClick={() => setActivePage(1)}
        >
          <HiChevronDoubleLeft />
        </button>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === 1 && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          <MdKeyboardArrowLeft />
        </button>
        <p className={styles["caption"]}>
          Page {activePage} of {totalPages}
        </p>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === totalPages && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === totalPages && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          <HiChevronDoubleRight />
        </button>
      </div>

      {/* <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p> */}
    </>
  );
};
