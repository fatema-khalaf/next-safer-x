import styles from "../../styles/theme/main.module.scss";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineInsertInvitation } from "react-icons/md";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const SignUp = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["login--page"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__container--image"]}>
          <img src="/images/logo.png" loading="lazy" />
        </div>
        <form style={{ textAlign: "center", width: "100%" }}>
          <h6 className={styles["h3"]} style={{ margin: "2rem" }}>
            {t("signup")}
          </h6>
          <h6 className={styles["caption"]} style={{ letterSpacing: "3px" }}>
            {t("create_new_account")}
          </h6>
          <div className={styles["fields"]}>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <TiUserOutline />
              </div>
              <input
                type="text"
                className={styles["fields__input"]}
                placeholder={t("username")}
                id=""
                spellCheck="false"
              />
            </div>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <HiOutlineMail />
              </div>
              <input
                type="text"
                className={styles["fields__input"]}
                placeholder={t("email")}
                id=""
                spellCheck="false"
              />
            </div>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <MdOutlinePhoneIphone />
              </div>
              <input
                type="text"
                className={styles["fields__input"]}
                placeholder={t("phone")}
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
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <MdOutlineInsertInvitation />
              </div>
              <input
                type="text"
                className={styles["fields__input"]}
                placeholder={t("invite_code")}
                id=""
                spellCheck="false"
              />
            </div>
          </div>
          <div>
            <button className={`${styles["btn--login"]} ${styles["h3"]}`}>
              {t("create_account")}
            </button>
          </div>
        </form>
        <div className={styles["login__container--caption"]}>
          <span className={styles["caption"]}>
            <strong>&nbsp;{t("already_have_account")}&nbsp;</strong>
          </span>
          <Link href="/login">
            <a className={styles["caption"]}>{t("login")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
