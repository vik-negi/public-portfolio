import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
// import useStore from "../../store";
import create, { themes } from "../utils/Theme";
import Navbar from "../componenets/Navbar";
import { isAutheticated } from "../pages/admin/utils/auth";
import Brightness from "../assets/svg/brightness.svg";

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
  const { token } = isAutheticated();

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
  const switchTheme = (themeName) => {
    console.log(themeName);
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <div>
      <GlobalStyle theme={themes[theme]} />
      <div>
        {!notShowNavbar && token && <Navbar />}
        {!token && (
          <div
            onClick={(e) => {
              console.log("clicked ", themes[theme]);
              switchTheme(
                themes[theme]?.background == "#FFFFFF" ? "dark" : "light"
              );
            }}
            className={`${
              themes[theme]?.background == "#FFFFFF" && "fas fa-moon"
            } text-[25px] cursor-pointer text-black absolute top-[18px] right-5 z-50
           
                `}
          >
            {themes[theme]?.background != "#FFFFFF" && (
              <img src={Brightness} color="white" alt="" />
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
export default LayoutComponent;
