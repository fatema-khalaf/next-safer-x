import styles from "../../styles/theme/main.module.scss";
const Slide = ({ image, title, subTitle, current, index }) => {
  return (
    <div
      className={styles["slide--container"]}
      // style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles["slide"]}>
        <div
          className={`${styles["slide--text"]} ${
            current === index && styles["animate--slide__text"]
          }`}
        >
          <div className={styles["slide--text--banner"]}>
            <div className={styles["slide--text--banner__title"]}>
              <h1
                className={styles["h1"]}
                style={{
                  marginBottom: "3rem",
                }}
              >
                {title}
              </h1>
              <div className={styles["h2"]}>{subTitle}</div>
            </div>
          </div>
        </div>
        <div
          className={`${styles["slide--image"]} ${
            current === index && styles["animate--slide__image"]
          }`}
        >
          <img src={image} loading="lazy"></img>
        </div>
      </div>
    </div>
  );
};
export default Slide;
