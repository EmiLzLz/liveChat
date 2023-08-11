import React, { createContext, useState } from "react";

const ThemeContext = createContext();

/**
 * The `ThemeProvider` component is a wrapper that provides a `darkMode` state and a `toggleDarkMode`
 * function to its children through the `ThemeContext`.
 */
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const data = { darkMode, toggleDarkMode };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
