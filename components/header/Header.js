import logo from "../../public/images/logo.png";
import styles from "../../styles/theme/main.module.scss";
import { BsMoonStarsFill } from "react-icons/bs";
import { items } from "../../DummyData/NavbarItems";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = ({}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className={styles["header"]}>
      <Link href="/">
        <a>
          <div className={styles["logo"]}>
            <img src="/images/logo.png" className={styles["logo__img"]} />
          </div>
        </a>
      </Link>
      <ul className={styles["nav"]}>
        {items.map((item) => (
          <li
            className={`${styles["nav-1"]} ${styles["nav__item"]} ${styles["nav__item--toggle"]}`}
            key={item.id}
          >
            <span className={styles["nav__item--container"]}>
              <Link href={item.link}>
                <a className={styles["nav__link"]}>{item.title}</a>
              </Link>
              <span style={{ display: "flex", marginLeft: ".4rem" }}>
                <TiArrowSortedDown />
              </span>
            </span>
            {item.subMenu && (
              <div className={styles["sub--menu"]}>
                <div className={styles["sub--menu__container"]}>
                  {item.subMenu.map((subItem) => (
                    <Link href={subItem.link} key={subItem.id}>
                      <a>
                        <span className={styles["sub--menu__container--item"]}>
                          <div className={styles["nav-1"]}>{subItem.title}</div>
                          <span
                            className={`${styles["nav-1"]}`}
                            style={{ display: "none" }}
                          >
                            <FaArrowRight />
                          </span>
                        </span>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <ul className={`${styles["nav"]} ${styles["nav-right"]}`}>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="/login" className={styles["nav__link"]}>
            Login
          </a>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="#" className={`${styles["nav-1"]} ${styles["btn"]}`}>
            sign up
          </a>
        </li>

        <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
          <a href="#" className={styles["nav__link"]}>
            Download
          </a>
        </li>
        <li className={`${styles["nav-1"]} ${styles["nav__item--side"]}`}>
          <a href="#" className={styles["nav__link"]}>
            English
          </a>
          <span>|</span>
          <a
            href="#"
            className={styles["nav__link"]}
            style={{ height: "1.7rem" }}
          >
            <BsMoonStarsFill />
          </a>
        </li>
      </ul>
      <ul className={`${styles["nav"]} ${styles["toggle-menu"]}`}>
        <li
          className={`${styles["nav__link"]} ${styles["icon"]}`}
          onClick={() => setShow(true)}
        >
          <HiOutlineMenuAlt3 />
        </li>
        <NavBar state={show ? "open" : "close"} onClose={handleClose} />
      </ul>
    </div>
  );
};
export default Header;
