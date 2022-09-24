import styles from "../../styles/theme/main.module.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const LogoHeader = ({}) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={styles["header--light"]}>
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

      <ul className={`${styles["nav"]} ${styles["nav-right"]}`}>
        <li className={`${styles["nav-1"]} ${styles["nav__item--side"]}`}>
          <div
            className={`${styles["nav-1"]} ${styles["nav__item"]} ${styles["nav__item--toggle"]}`}
            onMouseMove={() => {
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
          <a
            href="#"
            className={styles["nav__link"]}
            style={{ height: "1.7rem" }}
          >
            <BsMoonStarsFill />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default LogoHeader;
