import logo from "../../public/images/logo.png";
import styles from "../../styles/theme/main.module.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import { items } from "../../DummyData/NavbarItems";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import NavBar from "./NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const router = useRouter();
  const { t } = useTranslation("common");
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
        {items.map((item) => (
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
              <span style={{ display: "flex", marginLeft: ".4rem" }}>
                <TiArrowSortedDown />
              </span>
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
        ))}
      </ul>

      <ul className={`${styles["nav"]} ${styles["nav-right"]}`}>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="/login" className={styles["nav__link"]}>
            {t("login")}
          </a>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="/signup" className={`${styles["nav-1"]} ${styles["btn"]}`}>
            {t("common:signup")}
          </a>
        </li>

        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="#" className={styles["nav__link"]}>
            {t("common:download")}
          </a>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item--side"]}`}>
          {/* {router.locales.map((locale) => (
            <Link href={router.asPath} key={locale} locale={locale}>
              <a className={styles["nav__link"]}>
                {locale === "en"
                  ? "English"
                  : locale === "ar"
                  ? "العربية"
                  : "other"}
              </a>
            </Link>
          ))} */}

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
              <div className={styles["nav__link"]}>
                {router.locale === "en"
                  ? "English"
                  : router.locale === "ar"
                  ? "العربية"
                  : "other"}
              </div>
            </span>

            <div className={styles["sub--menu"]} id="lang-submenu">
              <div className={styles["sub--menu__container"]}>
                {router.locales.map((locale) => (
                  <Link href={router.asPath} key={locale} locale={locale}>
                    <a>
                      <span className={styles["sub--menu__container--item"]}>
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
          </div>

          <span>|</span>
          <a
            href="#"
            className={styles["nav__link"]}
            style={{ height: "1.7rem" }}
          >
            <BsMoonStarsFill />
          </a>
        </li>
      </ul>
      <ul className={`${styles["nav"]} ${styles["toggle-menu"]}`}>
        <li
          className={`${styles["nav__link"]} ${styles["icon"]}`}
          onClick={() => setShow(true)}
        >
          <AiOutlineMenu />
        </li>
        <NavBar state={show ? "open" : "close"} onClose={handleClose} />
      </ul>
    </div>
  );
};
export default Header;
