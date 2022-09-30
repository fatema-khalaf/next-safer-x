import styles from "../../styles/theme/main.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Portal from "../../HOC/Portal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { TiArrowSortedDown } from "react-icons/ti";
import { ThemeButton } from "../theme/ThemeSwitcher";

const SideNavBarContent = ({ state, onClose }) => {
  // show sub menu of each menu item
  const showSub = (e) => {
    const subMenu = e.target.nextElementSibling;
    e.target.classList.toggle(styles["active-menu-item"]);
    subMenu.classList.toggle(`${styles["view__sub"]}`);
    // subMenu.style.display = subMenu.style.display === "none" ? "flex" : "none";
  };

  // language
  const router = useRouter();
  const { t } = useTranslation();

  // Menu
  const [menu, setMenu] = useState([]);
  const setVale = (val) => {
    setMenu(val);
  };
  useEffect(() => {
    setVale(JSON.parse(localStorage.getItem("menu"))?.data);
  }, []);

  return (
    <div
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
                <a
                  className={styles["nav__link"]}
                  style={{ textAlign: "center" }}
                >
                  {t("common:login")}
                </a>
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
            {menu?.map((item, index) =>
              item.subMenu.length !== 0 ? (
                <div key={index}>
                  <div
                    key={index}
                    className={`${styles["nav-2"]} ${styles["nav__item"]} ${styles["nav__link"]} ${styles["side-menu-holder--item"]}`}
                    onClick={showSub}
                  >
                    {item.title[`${router.locale}`]}
                    {item.subMenu && (
                      <span style={{ display: "flex", marginLeft: ".4rem" }}>
                        <TiArrowSortedDown />
                      </span>
                    )}
                  </div>
                  <div
                    className={`${styles["toggle-view-sm--sub"]} ${styles["nav-2"]}`}
                  >
                    {item.subMenu.map((subItem, index) => (
                      <Link href={subItem.url} key={index}>
                        <a
                          className={styles["nav__link"]}
                          style={{ padding: " 1.5rem" }}
                        >
                          {subItem.title[`${router.locale}`]}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <li
                  key={index}
                  className={`${styles["nav-2"]} ${styles["nav__item"]}`}
                >
                  <a href={item.url} className={styles["nav__link"]}>
                    {item.title[`${router.locale}`]}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div className={styles["toggle-view-lg"]}>
          <ul>
            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <a href="#" className={styles["nav__link"]}>
                {t("common:download")}
              </a>
            </li>

            <div
              className={`${styles["nav-2"]} ${styles["nav__item"]} ${styles["nav__link"]} ${styles["side-menu-holder--item"]}`}
              onClick={(e) => {
                e.target.classList.toggle(styles["active-menu-item"]);
                const sub = document.getElementById("nbchflang");
                if (sub) {
                  sub.classList.toggle(`${styles["view__sub"]}`);
                }
              }}
            >
              {t("language")}

              <span style={{ display: "flex", marginLeft: ".4rem" }}>
                <TiArrowSortedDown />
              </span>
            </div>
            <div
              id="nbchflang"
              className={`${styles["toggle-view-sm--sub"]} ${styles["nav-2"]}`}
            >
              {router.locales.map((locale, index) => (
                <Link href={router.asPath} locale={locale} key={index}>
                  <a
                    className={styles["nav__link"]}
                    style={{ padding: " 1.5rem" }}
                  >
                    {locale === "en"
                      ? "English"
                      : locale === "ar"
                      ? "العربية"
                      : "other"}
                  </a>
                </Link>
              ))}
            </div>

            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <ThemeButton title={t("theme")} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["side-menu-holder__left"]} onClick={onClose}></div>
    </div>
  );
};

const SideNavBar = ({ state, onClose }) => {
  return (
    <Portal>
      <SideNavBarContent state={state} onClose={onClose} />
    </Portal>
  );
};
export default SideNavBar;
