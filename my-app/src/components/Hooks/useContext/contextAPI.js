import React from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

export default themes;

export const NameContext = React.createContext();
export const SurnameContext = React.createContext();
export const ThemeContext = React.createContext(themes.light);

export const NameProvider = NameContext.Provider;
export const SurnameProvider = SurnameContext.Provider;
export const ThemeProvider = ThemeContext.Provider;
