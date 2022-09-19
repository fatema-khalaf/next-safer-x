import styles from "../../styles/theme/main.module.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const LogoHeader = ({}) => {
  return (
    <div className={styles["header--light"]}>
      <Link href="/">
        <a>
          <div className={styles["logo"]}>
            <img src="/images/logo.png" className={styles["logo__img"]} />
          </div>
        </a>
      </Link>

      <ul className={`${styles["nav"]} ${styles["nav-right"]}`}>
        <li className={`${styles["nav-1"]} ${styles["nav__item--side"]}`}>
          <a href="#" className={styles["nav__link"]}>
            English
          </a>
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
