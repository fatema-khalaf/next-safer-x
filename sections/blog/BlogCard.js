import Link from "next/link";
import styles from "../../styles/theme/main.module.scss";
import parse from "html-react-parser";

const BlogCard = ({ link, title, content, date, image }) => {
  return (
    <Link href={link}>
      <div className={styles["blog--card"]}>
        <div className={styles["blog--card--image"]}>
          <img src={image} alt="blog"></img>
        </div>
        <h2 className={styles["h2"]}>{title}</h2>
        <div className={styles["caption"]}>
          {content?.length > 200
            ? parse(content?.substring(0, 200))
            : content && parse(content)}
          ...
        </div>
        <h2 className={styles["caption"]}>{date}</h2>
      </div>
    </Link>
  );
};
export default BlogCard;
