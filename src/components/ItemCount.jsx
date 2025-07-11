import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ItemCount({ stock, initial = 1, item }) {
  const [quantity, setQuantity] = useState(initial);
  const { addItem } = useCart();

  const increment = () => {
    if (quantity < stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAdd = () => {
    addItem(item, quantity);
    console.log('🛒 Producto agregado:', item.title, 'Cantidad:', quantity);
  };

  return (
    <div className="mt-3">
      <div className="btn-group mb-2" role="group">
        <button onClick={decrement} className="btn btn-outline-secondary">-</button>
        <span className="btn btn-light">{quantity}</span>
        <button onClick={increment} className="btn btn-outline-secondary">+</button>
      </div>
      <br />
      <button onClick={handleAdd} className="btn btn-success">
        Agregar al carrito
      </button>
    </div>
  );
}
