import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
// import useStore from "../../store";
import create, { themes } from "../utils/Theme";
import Navbar from "../componenets/Navbar";
import { isAutheticated } from "../pages/admin/utils/auth";
import Brightness from "../assets/svg/brightness.svg";
import DarkMode from "../assets/svg/dark-mode.svg";
import { Link, useParams } from "react-router-dom";

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

  var { username } = useParams();

  return (
    <div>
      <GlobalStyle theme={themes[theme]} />
      <div>
        {!notShowNavbar && token && <Navbar />}
        {!token && username != null && (
          <div className="flex justify-end items-center p-4">
            <Link
              to="/admin/login"
              title=""
              className={`flex mr-10 items-center p-[4px]  font-medium ${
                themes[theme].background == "#FFFFFF"
                  ? "text-black"
                  : "text-white"
              } transition-all duration-200 rounded-xl hover:bg-gray-50 hover:text-gray-800 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-xl`}
            >
              User Login
            </Link>
            <div
              onClick={(e) => {
                console.log("clicked ", themes[theme]);
                switchTheme(
                  themes[theme]?.background == "#FFFFFF" ? "dark" : "light"
                );
              }}
              className={` text-[10px] cursor-pointer text-black absolute top-[13px] right-4 z-50
           
                `}
            >
              {themes[theme]?.background != "#FFFFFF" ? (
                <img src={Brightness} color="white" alt="" width={"20px"} />
              ) : (
                <img src={DarkMode} color="black" alt="" width={"20px"} />
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
export default LayoutComponent;
