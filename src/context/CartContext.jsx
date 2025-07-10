import { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el componente proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Funciones para manejar el carrito
  const addToCart = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
