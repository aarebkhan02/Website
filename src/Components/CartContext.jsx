// src/Components/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.product_id === item.product_id &&
          i.selectedSize === item.selectedSize &&
          i.variation_name === item.variation_name
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

 const updateQuantity = (index, delta) => {
  setCartItems((prev) => {
    const updated = [...prev];
    const currentQty = updated[index]?.quantity || 1;
    updated[index] = {
      ...updated[index],
      quantity: Math.max(1, currentQty + delta),
    };
    return updated;
  });
};


  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);