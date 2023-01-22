/* eslint-disable jsx-a11y/accessible-emoji */
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import styles from "../../styles/theme/main.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  // const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  // const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  const router = useRouter();
  const { t } = useTranslation("common");

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
          {router.locale === "ar" ? (
            <HiChevronDoubleRight />
          ) : (
            <HiChevronDoubleLeft />
          )}
          {/* <HiChevronDoubleLeft /> */}
        </button>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === 1 && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          {router.locale === "ar" ? (
            <MdKeyboardArrowRight />
          ) : (
            <MdKeyboardArrowLeft />
          )}
        </button>
        <p className={styles["caption"]}>
          {t("page")} {activePage} {t("of")} {totalPages}
        </p>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === totalPages && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          {router.locale === "ar" ? (
            <MdKeyboardArrowLeft />
          ) : (
            <MdKeyboardArrowRight />
          )}
        </button>
        <button
          className={`${styles["pagination--btn"]} ${
            activePage === totalPages && styles["pagination--btn--disabled"]
          }`}
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          {router.locale === "ar" ? (
            <HiChevronDoubleLeft />
          ) : (
            <HiChevronDoubleRight />
          )}
        </button>
      </div>

      {/* <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p> */}
    </>
  );
};
