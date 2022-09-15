import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";

const PopularMarket = ({}) => {
  return (
    <div className={styles["popular__market"]}>
      <div className={styles["popular__market--container"]}>
        {/* <div class="css-1leavdy">
          <div class="css-lzsise">
            <div data-bn-type="text" class="css-1bprpss">
              Popular cryptocurrencies
            </div>
          </div>
        </div> */}
        <table
          className={styles["popular__market--container"]}
          id="marketTable"
        >
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
            <Link href="/trade/index/market/btc_usdt/">
              <tr className={styles["table-row"]}>
                <td>
                  <div className={styles["body-2"]}>
                    <span class="pr10">
                      <img src="/Upload/coin/BTC.png" width="20px" />
                    </span>
                    <span>BTC</span>
                    <span className={styles["caption"]}> Bitcoin</span>
                  </div>
                </td>
                <td className={styles["body-1"]}>18734.0900</td>
                <td className={styles["body-1"]}>18733.8800</td>
                <td className={styles["body-1"]}>18733.2400</td>
                <td className={styles["body-1"]}>323641.0300</td>
                <td className={styles["body-1"]}>6.063 bl</td>
                <td className={styles["body-1"]}>-5.87%</td>
              </tr>
            </Link>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PopularMarket;
