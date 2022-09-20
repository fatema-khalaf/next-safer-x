import styles from "../../styles/theme/main.module.scss";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineInsertInvitation } from "react-icons/md";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className={styles["login--page"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__container--image"]}>
          <img src="/images/logo.png" />
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h6 className={styles["h3"]} style={{ margin: "2rem" }}>
            Sign Up
          </h6>
          <h6 className={styles["caption"]} style={{ letterSpacing: "3px" }}>
            Create new account!
          </h6>
          <div className={styles["fields"]}>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <TiUserOutline />
              </div>
              <input
                type="text"
                class={styles["fields__input"]}
                placeholder="Username"
                id=""
                spellcheck="false"
              />
            </div>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <HiOutlineMail />
              </div>
              <input
                type="text"
                class={styles["fields__input"]}
                placeholder="Email"
                id=""
                spellcheck="false"
              />
            </div>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <MdOutlinePhoneIphone />
              </div>
              <input
                type="text"
                class={styles["fields__input"]}
                placeholder="Phone"
                id=""
                spellcheck="false"
              />
            </div>
            <div className={styles["fields--password"]}>
              <div className={`${styles["fields--icon"]}`}>
                <HiOutlineKey />
              </div>
              <input
                type="password"
                class={styles["fields__input"]}
                id=""
                placeholder="Enter password"
                autocomplete="off"
              />
            </div>
            <div className={styles["fields--username"]}>
              <div className={`${styles["fields--icon"]}`}>
                <MdOutlineInsertInvitation />
              </div>
              <input
                type="text"
                class={styles["fields__input"]}
                placeholder="Invite code"
                id=""
                spellcheck="false"
              />
            </div>
          </div>
          <div>
            <button className={`${styles["btn--login"]} ${styles["h3"]}`}>
              Create account
            </button>
          </div>
        </div>
        <div className={styles["login__container--caption"]}>
          <span className={styles["caption"]}>
            <strong>&nbsp;Already have an account?&nbsp;</strong>
          </span>
          <Link href="/login">
            <a className={styles["caption"]}>Login In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
