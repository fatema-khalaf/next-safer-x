import BlogCard from "./BlogCard";
import styles from "../../styles/theme/main.module.scss";

const BlogArticlesCards = ({ articles, locale }) => {
  return (
    <div className={styles["blog--cards--section"]}>
      {articles.map((item, index) => (
        <BlogCard
          key={index}
          link={{
            pathname: "/blog",
            query: {
              id: item.id,
            },
          }}
          title={item.title[locale]}
          content={item.content[locale]}
          image={item.image}
          date={item.created_at}
        />
      ))}
    </div>
  );
};
export default BlogArticlesCards;
