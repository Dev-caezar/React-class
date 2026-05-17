import React, { createContext } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const name = "tunde";
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

export default AppProvider;
