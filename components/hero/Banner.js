import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";

const Banner = ({}) => {
  return (
    <div className={styles["banner"]}>
      <div className={styles["banner__title"]}>
        <h1 className={styles["h1"]}>
          TRADE WITH <span>Safer-X</span>
        </h1>
        <div className={styles["h2"]}>BUY AND SELL CRYPTOCURRENCY</div>
        <Link href="/">
          <a className={`${styles["btn--lg"]} ${styles["nav-1"]}`}>
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
