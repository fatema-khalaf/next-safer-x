import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";
const MarketsTable = ({ items }) => {
  return (
    <table className={styles["popular__market--container"]} id="marketTable">
      <thead>
        <tr style={{ padding: "1.6rem" }}>
          <th className={styles["body-1"]}>PAIR</th>
          <th className={styles["body-1"]}>Price</th>
          <th className={styles["body-1"]}>Buy</th>
          <th className={styles["body-1"]}>Sell</th>
          <th className={styles["body-1"]}>24H VOL</th>
          <th className={styles["body-1"]}>24H TOTAL</th>
          <th className={styles["body-1"]}>24H CHANGE</th>
        </tr>
      </thead>

      <tbody id="price_today_ul">
        {items.map((item) => (
          <Link href={item.link}>
            <tr className={styles["table-row"]}>
              <td>
                <div
                  className={`${styles["body-2"]} ${styles["table-row__img"]}`}
                >
                  <img
                    src={item.image}
                    style={{ width: "3.2rem", marginRight: "1.6rem" }}
                  />
                  <div>
                    <span>{item.name}</span>
                    <span className={styles["caption"]}>
                      &nbsp;{item.caption}
                    </span>
                  </div>
                </div>
              </td>
              <td className={styles["body-1"]}>{item.price}</td>
              <td className={styles["body-1"]}>{item.buy}</td>
              <td className={styles["body-1"]}>{item.sell}</td>
              <td className={styles["body-1"]}>{item.vol}</td>
              <td className={styles["body-1"]}>{item.total}</td>
              <td className={styles["body-1"]}>{item.change}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
};
export default MarketsTable;
