// import React, { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeModeProvider = ({ children }) => {
//   const [lightMode, setLightMode] = useState();

//   const [isSideBarOpen, setIsSideBarOpen] = useState(true);

//   const toggleTheme = () => {
//     setLightMode((prevMode) => !prevMode);
//   };

//   const toggleSideBar = () => {
//     setIsSideBarOpen((prevMode) => !prevMode);
//   };

//   return (
//     <ThemeContext.Provider
//       value={{ lightMode, toggleTheme, isSideBarOpen, toggleSideBar }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeMode = () => useContext(ThemeContext);
