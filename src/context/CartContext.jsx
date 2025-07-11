import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const CartContext = createContext();

// 2. Make a provider component
export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, title, price, quantity }

  // Add or update an item
  const addItem = (product, quantity) => {
    setItems(curr => {
      const idx = curr.findIndex(i => i.id === product.id);
      if (idx > -1) {
        // update existing
        const copy = [...curr];
        copy[idx].quantity += quantity;
        return copy;
      }
      return [...curr, { ...product, quantity }];
    });
  };

  const removeItem = id => {
    setItems(curr => curr.filter(i => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  // 3. Expose everything via context
  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearCart,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

// 4. Custom hook for convenience
export const useCart = () => useContext(CartContext);