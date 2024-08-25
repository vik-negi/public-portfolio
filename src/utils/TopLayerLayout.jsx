import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
// import useStore from "../../store";
import create, { themes } from "../utils/Theme";
import Navbar from "../componenets/Navbar";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.25s, color 0.25s;
  },
  p, h1{
    color : ${({ theme }) => theme.text};

  },
 
  a {
    color: ${({ theme }) => theme.text};
  }
`;

const LayoutComponent = ({ children, notShowNavbar }) => {
  const theme = create((s) => s.theme);
  const setTheme = create((s) => s.setTheme);

  useEffect(() => {
    const rememberedTheme = localStorage.getItem("theme");
    if (rememberedTheme && themes[rememberedTheme]) {
      setTheme(rememberedTheme);
    } else {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDarkMode) setTheme("dark");
    }
  }, [setTheme]);

  return (
    <div>
      <GlobalStyle theme={themes[theme]} />
      <div>
        {!notShowNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};
export default LayoutComponent;
