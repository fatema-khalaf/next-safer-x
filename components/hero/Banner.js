import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles["banner"]}>
      <div className={styles["banner__title"]}>
        <h1 className={styles["h1"]}>{t("common:title")}</h1>
        <div className={styles["h2"]}>{t("common:sub_title")}</div>
        <Link href="/">
          <a className={`${styles["btn--lg"]} ${styles["nav-1"]}`}>
            Get Started
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
