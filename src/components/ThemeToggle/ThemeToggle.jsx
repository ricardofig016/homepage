import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";
import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={styles.div} onClick={toggleTheme}>
      <InnerMoon duration={750} toggled={theme === "light"} />
    </div>
  );
}

export default ThemeToggle;
