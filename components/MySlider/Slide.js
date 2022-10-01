import styles from "../../styles/theme/main.module.scss";
const Slide = ({ image, title, subTitle }) => {
  return (
    <div className={styles["slide--container"]}>
      <div
        className={styles["slide"]}
        // style={{ backgroundImage: `url("/images/slide1.jpg")` }}
      >
        <div className={styles["slide--text"]}>
          <div className={styles["slide--text--banner"]}>
            <div className={styles["slide--text--banner__title"]}>
              <h1 className={styles["h1"]} style={{ marginBottom: "3rem" }}>
                {title}
              </h1>
              <div className={styles["h2"]}>{subTitle}</div>
            </div>
          </div>
        </div>
        <div className={styles["slide--image"]}>
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};
export default Slide;
