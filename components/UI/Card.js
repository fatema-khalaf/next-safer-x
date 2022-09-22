import styles from "../../styles/theme/main.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../public/images/logo.png";

const Card = ({ title, description, image, index }) => {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card"]}>
        <div
          className={`${styles["card__side"]} ${styles["card__side--front"]}`}
        >
          <div className={`${styles["card__picture"]}`}>
            {/* TODO: remove lazy load imag package or use it in all pages */}
            <img
              className={styles["card__picture--img"]}
              src={image}
              loading="lazy"
            ></img>
            {/* <LazyLoadImage
              src={image}
              className={styles["card__picture--img"]}
              PlaceholderSrc="/images/logo.png"
              effect="blur"
            /> */}
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
