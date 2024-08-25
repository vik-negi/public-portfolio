// Context.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    sideBarOpen: true,
  });

  const updateSideBarOpen = (newData) => {
    setState((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateSideBarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
