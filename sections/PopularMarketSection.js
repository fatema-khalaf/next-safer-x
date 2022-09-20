import Link from "next/link";
import styles from "../styles/theme/main.module.scss";
import MarketsTable from "../components/market/MarketsTable";
import { items } from "../DummyData/PopularMarketsData";

const PopularMarketSection = () => {
  return (
    <div className={styles["popular__market"]}>
      <div className={styles["popular__market--container"]}>
        <div className={styles["popular__market--container--title"]}>
          <div className={styles["h4"]}>Popular markets</div>
        </div>
        <MarketsTable items={items} />
        <div className={styles["popular__market--container--link"]}>
          <Link href="/markets">
            <a className={`${styles["btn--lg"]} ${styles["nav-1"]}`}>
              View more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopularMarketSection;
