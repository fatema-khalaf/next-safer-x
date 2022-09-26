import { useContext } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/theme/main.module.scss";

export const ThemeButtonIcon = () => {
  const ctx = useContext(ThemeContext);
  return (
    <a
      href="#"
      className={styles["nav__link"]}
      style={{ height: "1.7rem" }}
      onClick={ctx.changeTheme}
    >
      {ctx.isDrakTheme && <BsFillSunFill />}
      {!ctx.isDrakTheme && <BsMoonStarsFill />}
    </a>
  );
};

export const ThemeButton = ({ title }) => {
  const ctx = useContext(ThemeContext);
  return (
    <div className={styles["theme--switcher"]} onClick={ctx.changeTheme}>
      <a href="#" className={styles["nav__link"]} style={{ height: "1.7rem" }}>
        <div>{title}</div>
      </a>
      {ctx.isDrakTheme && <BsFillSunFill />}
      {!ctx.isDrakTheme && <BsMoonStarsFill />}
    </div>
  );
};

const ThemeSwitcher = ({ children }) => {
  const ctx = useContext(ThemeContext);
  return <div data-theme={ctx.isDrakTheme ? "dark" : ""}>{children}</div>;
};
export default ThemeSwitcher;
