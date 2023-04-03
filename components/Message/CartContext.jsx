import React, { useState, createContext } from "react";
export const CartContext = createContext("Unknown");
export const CartProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  return (
    <CartContext.Provider value={{ messages, setMessages }}>
      {children}
    </CartContext.Provider>
  );
};

export const useProviderValue = (initialState) => {
  const [messages = initialState, setMessages] = useState();
  return {
    messages,
    setMessages,
  };
};
