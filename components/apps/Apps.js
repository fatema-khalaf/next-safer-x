import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";
import { ImAppleinc } from "react-icons/im";
import { FaGooglePlay } from "react-icons/fa";
const Apps = () => {
  return (
    <div className={styles["apps"]}>
      <div className={`${styles["h1--light"]} ${styles["apps--text"]}`}>
        <h4>
          <b>TRADE ANYWHERE</b>
        </h4>
        <h6>DOWNLOAD ECOTX APP ALL YOUR DEVICES</h6>
        <p className={styles["h2--light"]}>
          INSTANT ACCESS TO TRADING OF VARIOUS SCENARIOS, ANYTIME AND ANYWHERE
        </p>

        <div className={styles["apps--text__btn"]}>
          <Link href="#">
            <a
              className={`${styles["nav-1"]} ${styles["btn"]}`}
              style={{ margin: "1rem" }}
            >
              <ImAppleinc style={{ fontSize: "3rem" }} />
              <div
                className={`${styles["nav-1"]} ${styles["apps--text__btn--container"]}`}
              >
                <span class="sup-title">DOWNLOAD ON</span>
                <span class="title">Apple Store</span>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a
              className={`${styles["nav-1"]} ${styles["btn"]}`}
              style={{ margin: "1rem" }}
            >
              <FaGooglePlay style={{ fontSize: "3rem" }} />

              <div
                className={`${styles["nav-1"]} ${styles["apps--text__btn--container"]}`}
              >
                <span class="sup-title">DOWNLOAD ON</span>
                <span class="title">Google Play</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["apps--image"]}>
        <img src="images/phone.png" alt="phone" />
      </div>
    </div>
  );
};
export default Apps;
