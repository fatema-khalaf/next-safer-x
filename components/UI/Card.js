import styles from "../../styles/theme/main.module.scss";
const Card = ({ title, description, image, index }) => {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card"]}>
        <div
          className={`${styles["card__side"]} ${styles["card__side--front"]}`}
        >
          <div className={`${styles["card__picture"]}`}>
            <img className={styles["card__picture--img"]} src={image}></img>
          </div>
          <h4 className={styles["h3"]} style={{ margin: "2rem" }}>
            <span className={`${styles["card__heading-span"]}`}>{title}</span>
          </h4>
        </div>
        <div
          className={`${styles["card__side"]} ${styles["card__side--back"]} ${
            styles[`card__side--back-${index}`]
          }`}
        >
          <div className={`${styles["back--content"]} ${styles["body-3"]}`}>
            <div className={styles["back--content__title"]}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
