import React, { useState } from "react";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <GlobalContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
