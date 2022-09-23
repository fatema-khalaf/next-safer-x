import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import styles from "../../styles/theme/main.module.scss";

// const ExpiredNotice = () => {
//   return (
//     <div className="expired-notice">
//       <span>Expired!!!</span>
//       <p>Please select a future date and time.</p>
//     </div>
//   );
// };

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.counter__section}>
      <div className={styles.counter__section__item}>
        <p
          className={`${styles["counter__section__item--num"]} ${styles["h3"]}`}
        >
          {days}
        </p>
        <span className={styles.caption}>Days</span>
      </div>
      <div className={styles.counter__section__item}>
        <p
          className={`${styles["counter__section__item--num"]} ${styles["h3"]}`}
        >
          {hours}
        </p>
        <span className={styles.caption}>Hours</span>
      </div>
      <div className={styles.counter__section__item}>
        <p
          className={`${styles["counter__section__item--num"]} ${styles["h3"]}`}
        >
          {minutes}
        </p>
        <span className={styles.caption}>Mins</span>
      </div>
      <div className={styles.counter__section__item}>
        <p
          className={`${styles["counter__section__item--num"]} ${styles["h3"]}`}
        >
          {seconds}
        </p>
        <span className={styles.caption}>Seconds</span>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ShowCounter days="0" hours="0" minutes="0" seconds="0" />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
