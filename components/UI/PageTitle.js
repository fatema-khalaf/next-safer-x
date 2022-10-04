import styles from "../../styles/theme/main.module.scss";
const PageTitleBanner = ({ title, subTitle }) => {
  return (
    <div className={styles["title--banner"]}>
      <h2 className={styles["h4"]}>{title}</h2>
      <p className={styles["caption"]}>{subTitle}</p>
    </div>
  );
};
export default PageTitleBanner;
