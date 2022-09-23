import CountdownTimer from "../components/counter/CountdownTimer";
import styles from "../styles/theme/main.module.scss";

const launchpadSection = ({ countdown }) => {
  // Timer
  const NOW_IN_MS = new Date().getTime(); // Now time in ms
  const dateTimeAfterThreeDays = NOW_IN_MS + countdown; // Date after countdown time in ms
  return (
    <div className={styles.launchpadSection}>
      <div className={styles.launchpadSection__container}>
        <div>
          <img
            src="/images/cur_logo.png"
            alt="currency logo"
            className={styles.launchpadSection__container__img}
            loading="lazy"
          />
        </div>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </div>
  );
};
export default launchpadSection;
