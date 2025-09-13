import React from "react";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "./theme-context";

function ToggleTheme() {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <div>
      <button type="button" onClick={handleToggleTheme}>
        Toggle Mode <span>{theme === "light" ? "🌞" : "🌙"}</span>
      </button>
    </div>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  );
}

export default Theme;
