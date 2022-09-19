import styles from "../../styles/theme/main.module.scss";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import Link from "next/link";
const Login = () => {
  return (
    <div className={styles["login--page"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__container--image"]}>
          <img src="/images/logo.png" />
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h6 className={styles["h3"]} style={{ margin: "2rem" }}>
            LogIn
          </h6>
          <h6 className={styles["caption"]} style={{ letterSpacing: "3px" }}>
            Wellcome back!
          </h6>
          <div className={styles["fields"]}>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <TiUserOutline />
              </div>
              <input
                type="text"
                class={styles["fields__input"]}
                placeholder="Username/Email"
                value=""
                id="username"
                spellcheck="false"
                // data-ms-editor="true"
              />
            </div>
            <div className={styles["fields--password"]}>
              <div className={`${styles["fields--icon"]}`}>
                <HiOutlineKey />
              </div>
              <input
                type="password"
                class={styles["fields__input"]}
                id="login_password"
                placeholder="Enter password"
                autocomplete="off"
              />
            </div>
          </div>

          <div>
            <button className={`${styles["btn--login"]} ${styles["h3"]}`}>
              Sign In
            </button>
          </div>
        </div>
        <div className={styles["login__container--caption"]}>
          <Link href="/">
            <a className={styles["caption"]}>Forgot password?</a>
          </Link>
          <span className={styles["caption"]}>
            <strong>&nbsp;Or&nbsp;</strong>
          </span>
          <Link href="/">
            <a className={styles["caption"]}>Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
