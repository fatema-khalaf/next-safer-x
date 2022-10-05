import { useTranslation } from "next-i18next";
import styles from "../../styles/theme/main.module.scss";

export function filterArticles(rows, filter) {
  if (filter === null) {
    return rows;
  }
  let articles = rows.filter((item) => item.topic["id"] === filter);
  return articles;
}

const BlogTopics = ({ topics, locale, setFilters }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["blog--topics--section"]}>
      <div className={styles["body-2--light"]} onClick={() => setFilters(null)}>
        {t("all")}
      </div>
      {topics.map((item, index) => (
        <div
          key={index}
          className={styles["body-2--light"]}
          onClick={() => setFilters(item.id)}
        >
          {item.topic[locale]}
        </div>
      ))}
    </div>
  );
};
export default BlogTopics;
