import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // Inicialize o estado com um array vazio

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const contextValues = {
    cartItems,
    addToCart,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
