import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    setItems(curr => {
      const idx = curr.findIndex(i => i.id === product.id);
      if (idx > -1) {
        
        const updated = [...curr];
        updated[idx].quantity += quantity;
        return updated;
      }
      return [...curr, { ...product, quantity }];
    });
  };

  const removeItem = id =>
    setItems(curr => curr.filter(i => i.id !== id));

  const clearCart = () => setItems([]);

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
}