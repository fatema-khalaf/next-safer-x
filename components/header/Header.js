import styles from "../../styles/theme/main.module.scss";
import { items } from "../../DummyData/NavbarItems";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import SideNavBar from "./SideNavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ThemeButtonIcon } from "../theme/ThemeSwitcher";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const router = useRouter();
  const { t } = useTranslation("common");

  const [menu, setMenu] = useState([]);
  const setValue = (val) => {
    setMenu(val);
  };
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("menu"))?.data);
  }, []);

  return (
    <div className={styles["header"]}>
      <h1> {props.locale}</h1>
      <Link href="/">
        <a>
          <div className={styles["logo"]}>
            <img
              src="/images/logo.png"
              className={styles["logo__img"]}
              loading="lazy"
            />
          </div>
        </a>
      </Link>
      <ul className={styles["nav"]}>
        {menu?.map((item) => (
          <li
            className={`${styles["nav-1"]} ${styles["nav__item"]} ${styles["nav__item--toggle"]}`}
            key={item.id}
            onMouseMove={() => {
              const sub = document.getElementById(item.id);
              if (
                sub &&
                window.innerWidth < sub.getBoundingClientRect().right
              ) {
                sub.style.right = "5rem";
              }
              if (sub && sub.getBoundingClientRect().left < 0) {
                sub.style.left = "5rem";
              }
            }}
          >
            <span className={styles["nav__item--container"]}>
              <Link href={item.url}>
                <a className={styles["nav__link"]}>
                  {item.title[`${router.locale}`]}
                </a>
              </Link>
              {item.subMenu.length !== 0 && (
                <span style={{ display: "flex", marginLeft: ".4rem" }}>
                  <TiArrowSortedDown />
                </span>
              )}
            </span>
            {item.subMenu.length !== 0 && (
              <div className={styles["sub--menu"]} id={item.id}>
                <div className={styles["sub--menu__container"]}>
                  {item.subMenu.map((subItem) => (
                    <Link href={subItem.url} key={subItem.id}>
                      <a>
                        <span className={styles["sub--menu__container--item"]}>
                          <div className={styles["nav-1"]}>
                            {subItem.title[`${router.locale}`]}
                          </div>
                          <span
                            className={`${styles["nav-1"]}`}
                            style={{ display: "none" }}
                          >
                            {router.locale === "ar" ? (
                              <FaArrowLeft />
                            ) : (
                              <FaArrowRight />
                            )}
                          </span>
                        </span>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
        {/* {items.map((item) => (
          <li
            className={`${styles["nav-1"]} ${styles["nav__item"]} ${styles["nav__item--toggle"]}`}
            key={item.id}
            onMouseMove={() => {
              const sub = document.getElementById(item.id);
              if (
                sub &&
                window.innerWidth < sub.getBoundingClientRect().right
              ) {
                sub.style.right = "5rem";
              }
              if (sub && sub.getBoundingClientRect().left < 0) {
                sub.style.left = "5rem";
              }
            }}
          >
            <span className={styles["nav__item--container"]}>
              <Link href={item.link}>
                <a className={styles["nav__link"]}>{item.title}</a>
              </Link>
              {item.subMenu && (
                <span style={{ display: "flex", marginLeft: ".4rem" }}>
                  <TiArrowSortedDown />
                </span>
              )}
            </span>
            {item.subMenu && (
              <div className={styles["sub--menu"]} id={item.id}>
                <div className={styles["sub--menu__container"]}>
                  {item.subMenu.map((subItem) => (
                    <Link href={subItem.link} key={subItem.id}>
                      <a>
                        <span className={styles["sub--menu__container--item"]}>
                          <div className={styles["nav-1"]}>{subItem.title}</div>
                          <span
                            className={`${styles["nav-1"]}`}
                            style={{ display: "none" }}
                          >
                            {router.locale === "ar" ? (
                              <FaArrowLeft />
                            ) : (
                              <FaArrowRight />
                            )}
                          </span>
                        </span>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))} */}
      </ul>

      <ul className={`${styles["nav"]} ${styles["nav-right"]}`}>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <Link href="/login" className={styles["nav__link"]}>
            {t("login")}
          </Link>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <Link href="/signup" className={`${styles["nav-1"]} ${styles["btn"]}`}>
            {t("common:signup")}
          </Link>
        </li>

        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="#" className={styles["nav__link"]}>
            {t("common:download")}
          </a>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item--side"]}`}>
          <div
            className={`${styles["nav-1"]} ${styles["nav__item"]} ${styles["nav__item--toggle"]}`}
            onMouseMove={(e) => {
              const sub = document.getElementById("lang-submenu");
              if (
                sub &&
                window.innerWidth < sub.getBoundingClientRect().right
              ) {
                sub.style.right = "5rem";
              }
              if (sub && sub.getBoundingClientRect().left < 0) {
                sub.style.left = "5rem";
              }
            }}
          >
            <span className={styles["nav__item--container"]}>
              <div className={styles["nav__link"]}>{t("language")}</div>
            </span>

            <div className={styles["sub--menu"]} id="lang-submenu">
              <div
                className={styles["sub--menu__container"]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                {router.locales.map((locale) => (
                  <Link href={router.asPath} key={locale} locale={locale}>
                    <a style={{ width: "100%" }}>
                      <span
                        className={styles["sub--menu__container--item"]}
                        style={{ justifyContent: "center" }}
                      >
                        <div className={styles["nav-1"]}>
                          {locale === "en"
                            ? "English"
                            : locale === "ar"
                            ? "العربية"
                            : "other"}
                        </div>
                        <span
                          className={`${styles["nav-1"]}`}
                          style={{ display: "none" }}
                        ></span>
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <span>|</span>
          <ThemeButtonIcon />
        </li>
      </ul>
      <ul className={`${styles["nav"]} ${styles["toggle-menu"]}`}>
        <li
          className={`${styles["nav__link"]} ${styles["icon"]}`}
          onClick={() => setShow(true)}
        >
          <AiOutlineMenu />
        </li>
        <SideNavBar state={show ? "open" : "close"} onClose={handleClose} />
      </ul>
    </div>
  );
};
export default Header;
