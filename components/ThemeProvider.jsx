"use client";

import {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import {
  createContext,
  useContext,
  useState,
} from "react";

import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext();

export function useAppTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}