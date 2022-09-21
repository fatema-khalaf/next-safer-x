import styles from "../../styles/theme/main.module.scss";
const PageTitleBanner = ({ title }) => {
  return (
    <div className={styles["title--banner"]}>
      <h2 className={styles["h4"]}>{title}</h2>
    </div>
  );
};
export default PageTitleBanner;
