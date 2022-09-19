import styles from "../../styles/theme/main.module.scss";
import { items } from "../../DummyData/Footer";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
const Footer = () => {
  return (
    <div className={styles["footer--section"]}>
      <div className={styles["footer"]}>
        <div className={styles["footer__logo"]}>
          <img src="/images/logo.png" />
          <div className={styles["social--links"]}>
            <a>
              <BsFacebook />
            </a>
            <a>
              <GrTwitter />
            </a>
            <a>
              <SiYoutube />
            </a>
            <a>
              <FaTelegramPlane />
            </a>
            <a>
              <ImLinkedin2 />
            </a>
          </div>
        </div>
        <div className={styles["footer__nav"]}>
          {items.map((item, index) => (
            <div className={styles["footer__nav--list"]} key={index}>
              <h6 className={styles["body-2"]} style={{ paddingLeft: "0rem" }}>
                {item.title}
              </h6>
              {item.subMenu.map((subItem, index) => (
                <Link href={subItem.link} key={index}>
                  <a className={styles["nav--footer"]}>{subItem.title}</a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles["copy--right"]}>
        <div className={styles["caption"]}>
          © ALL RIGHT RESERVED 2022. Safe r-X - CRYPTOCURRENCY EXCHANGE
          PLATFORM.
        </div>
      </div>
    </div>
  );
};
export default Footer;
