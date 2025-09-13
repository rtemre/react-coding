import { useState } from "react";
import { ThemeContext } from "./theme-context";
import "./style.css";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <div
        className={`theme ${theme === "light" ? "light-theme" : "dark-theme"}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
