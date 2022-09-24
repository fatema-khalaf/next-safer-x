import styles from "../../styles/theme/main.module.scss";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Login = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["login--page"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__container--image"]}>
          <img src="/images/logo.png" loading="lazy" />
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h6 className={styles["h3"]} style={{ margin: "2rem" }}>
            {t("login")}
          </h6>
          <h6 className={styles["caption"]} style={{ letterSpacing: "3px" }}>
            {t("wellcome_back")}
          </h6>
          <div className={styles["fields"]}>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <TiUserOutline />
              </div>
              <input
                type="text"
                className={styles["fields__input"]}
                placeholder={t("email")}
                id=""
                spellCheck="false"
              />
            </div>
            <div className={styles["fields--password"]}>
              <div className={`${styles["fields--icon"]}`}>
                <HiOutlineKey />
              </div>
              <input
                type="password"
                className={styles["fields__input"]}
                id=""
                placeholder={t("password")}
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <button className={`${styles["btn--login"]} ${styles["h3"]}`}>
              {t("login")}
            </button>
          </div>
        </div>
        <div className={styles["login__container--caption"]}>
          <Link href="/signup">
            <a className={styles["caption"]}>{t("forgot_password")}</a>
          </Link>
          <span className={styles["caption"]}>
            <strong>&nbsp;&nbsp;{t("or")}&nbsp;&nbsp;</strong>
          </span>
          <Link href="/signup">
            <a className={styles["caption"]}>{t("signup")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
