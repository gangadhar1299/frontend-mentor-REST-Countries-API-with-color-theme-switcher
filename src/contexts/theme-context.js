import * as React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be inside ThemeProvider");

  return context;
}

function ThemeProvider({ children }) {
  const persistedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = React.useState(persistedTheme || "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, useTheme };
