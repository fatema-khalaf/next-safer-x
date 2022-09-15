import styles from "../../styles/theme/main.module.scss";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { items } from "../../DummyData/NavbarItems";
import { useEffect } from "react";
import Portal from "../../HOC/Portal";

const ModalOverlay = ({ state, onClose }) => {
  return (
    <div
      className={`${styles["side-menu-holder"]} ${
        styles[`side-menu-holder__${state}`]
      }`}
    >
      <div
        class={`${styles["side-menu-holder__content"]} ${
          styles[`side-menu-holder__content__${state}`]
        }`}
      >
        <div
          className={`${styles["icon-warpper"]} ${styles["icon"]}`}
          onClick={onClose}
        >
          <IoCloseOutline />
        </div>
        <div className={styles["toggle-view-lg"]}>
          <ul>
            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <a href="#" className={styles["nav__link"]}>
                Login
              </a>
            </li>
            <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
              <a
                href="#"
                className={styles["btn"]}
                style={{ padding: "1.6rem 1.2rem", width: "100%" }}
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["toggle-view-sm"]}>
          <ul>
            {items.map((item) => (
              <li className={`${styles["nav-2"]} ${styles["nav__item"]}`}>
                <a href={item.link} className={styles["nav__link"]}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["toggle-view-lg"]}>
          <ul>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              <a href="#" className={styles["nav__link"]}>
                Download
              </a>
            </li>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              <a href="#" className={styles["nav__link"]}>
                English
              </a>
            </li>
            <li className={`${styles["nav-1"]} ${styles["nav__item"]}`}>
              <a
                href="#"
                className={styles["nav__link"]}
                style={{ height: "1.7rem" }}
              >
                Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class={styles["side-menu-holder__left"]} onClick={onClose}></div>
    </div>
  );
};

const NavBar = ({ state, onClose }) => {
  return (
    <Portal>
      <ModalOverlay state={state} onClose={onClose} />
    </Portal>
  );
};
export default NavBar;
