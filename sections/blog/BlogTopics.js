import styles from "../../styles/theme/main.module.scss";

const BlogTopics = ({ topics, locale }) => {
  return (
    <div className={styles["blog--topics--section"]}>
      {topics.map((item, index) => (
        <div key={index} className={styles["body-2--light"]}>
          {item.topic[locale]}
        </div>
      ))}
    </div>
  );
};
export default BlogTopics;
