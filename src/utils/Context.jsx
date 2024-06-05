import React, { createContext, useState, useContext } from "react";

const CartTotalContext = createContext();

export const CartTotalProvider = ({ children }) => {
  const [total, setTotal] = useState([]);

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <CartTotalContext.Provider value={{ total, updateTotal }}>
      {children}
    </CartTotalContext.Provider>
  );
};

export const useTotal = () => {
  return useContext(CartTotalContext);
};
