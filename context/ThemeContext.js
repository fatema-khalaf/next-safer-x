import { createContext, useEffect, useState } from "react";
import { setDefaults } from "react-i18next";

export const ThemeContext = createContext({
  isDrakTheme: false,
  changeTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [isDrakTheme, setIsDarktheme] = useState(false);
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarktheme(true);
    }
  }, []);

  const changeThemeHandler = () => {
    if (isDrakTheme) {
      localStorage.setItem("theme", "light");
      setIsDarktheme(false);
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarktheme(true);
    }
  };
  return (
    <ThemeContext.Provider
      value={{ isDrakTheme: isDrakTheme, changeTheme: changeThemeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
