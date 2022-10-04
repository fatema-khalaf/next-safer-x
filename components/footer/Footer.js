import styles from "../../styles/theme/main.module.scss";
import { items } from "../../DummyData/Footer";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const Footer = () => {
  // language
  const router = useRouter();
  const { t } = useTranslation();
  // Menu
  const [menu, setMenu] = useState([]);
  const setValue = (val) => {
    setMenu(val);
  };
  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem("menu"))?.data);
  }, []);
  return (
    <div className={styles["footer--section"]}>
      <div className={styles["footer"]}>
        <div className={styles["footer__logo"]}>
          <img src="/images/logo.png" loading="lazy" />
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
          {menu?.map((item, index) => (
            <div className={styles["footer__nav--list"]} key={index}>
              <h6
                className={styles["body-2"]}
                style={{ paddingInlineStart: "0rem" }}
              >
                {item.title[`${router.locale}`]}
              </h6>
              {item.subMenu.length !== 0 &&
                item.subMenu.map((subItem, index) => (
                  <Link href={subItem.url} key={index}>
                    <a className={styles["nav--footer"]}>
                      {subItem.title[`${router.locale}`]}
                    </a>
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
