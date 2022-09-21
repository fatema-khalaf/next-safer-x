import styles from "../../styles/theme/main.module.scss";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { items } from "../../DummyData/NavbarItems";
import { useEffect, useRef, createRef } from "react";
import Portal from "../../HOC/Portal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ModalOverlay = ({ state, onClose }) => {
  const showSub = (e) => {
    const subMenu = e.target.nextElementSibling;
    subMenu.style.display = subMenu.style.display === "none" ? "flex" : "none";
  };

  const router = useRouter();
  const { t } = useTranslation();
  console.log(state !== "open");
  return (
    <div
      style={{
        flexDirection: `${router.locale === "ar" && "row"}`,
      }}
      className={`${styles["side-menu-holder"]} ${
        styles[`side-menu-holder__${state}`]
      }`}
    >
      <div
        className={`${styles["side-menu-holder__content"]} ${
          styles[
            `side-menu-holder__content__${state}${
              router.locale === "ar" ? "--left" : ""
            }`
          ]
        }`}
      >
        <div
          className={`${styles["icon-warpper"]} ${styles["icon"]}`}
          onClick={onClose}
        >
          <IoCloseOutline />
        </div>
        <div className={styles["toggle-view-lg"]}>
          <ul>
            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <Link href="/login">
                <a className={styles["nav__link"]}> {t("common:login")}</a>
              </Link>
            </li>
            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <Link href="/signup">
                <a
                  className={styles["btn"]}
                  style={{ padding: "1.6rem 1.2rem", width: "100%" }}
                >
                  {t("common:signup")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["toggle-view-sm"]}>
          <ul>
            {items.map((item, index) =>
              item.subMenu ? (
                <>
                  <div
                    key={index}
                    className={`${styles["nav-2"]} ${styles["nav__item"]} ${styles["nav__link"]}`}
                    onClick={showSub}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`${styles["toggle-view-sm--sub"]} ${styles["nav-2"]}`}
                  >
                    {item.subMenu.map((subItem, index) => (
                      <Link href={subItem.link} key={index}>
                        <a
                          className={styles["nav__link"]}
                          style={{ padding: " 1.5rem" }}
                        >
                          {subItem.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <li
                  key={index}
                  className={`${styles["nav-2"]} ${styles["nav__item"]}`}
                >
                  <a href={item.link} className={styles["nav__link"]}>
                    {item.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className={styles["toggle-view-lg"]}>
          <ul>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              <a href="#" className={styles["nav__link"]}>
                {t("common:download")}
              </a>
            </li>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              {router.locales.map((locale) => (
                <Link href={router.asPath} key={locale} locale={locale}>
                  <a className={styles["nav__link"]}>
                    {locale === "en"
                      ? "English"
                      : locale === "ar"
                      ? "العربية"
                      : "other"}
                  </a>
                </Link>
              ))}
            </li>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              <a
                href="#"
                className={styles["nav__link"]}
                style={{ height: "1.7rem" }}
              >
                Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["side-menu-holder__left"]} onClick={onClose}></div>
    </div>
  );
};

const NavBar = ({ state, onClose }) => {
  return (
    <Portal>
      <ModalOverlay state={state} onClose={onClose} />
    </Portal>
  );
};
export default NavBar;
