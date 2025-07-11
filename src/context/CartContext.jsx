import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    setCart(curr => {
      const idx = curr.findIndex(i => i.id === product.id);
      if (idx > -1) {
        const copy = [...curr];
        copy[idx].quantity += quantity;
        return copy;
      }
      return [...curr, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart(curr => curr.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);