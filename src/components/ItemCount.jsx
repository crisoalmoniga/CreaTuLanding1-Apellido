// src/components/ItemCount.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ItemCount({ stock, initial = 1, item }) {
  const [quantity, setQuantity] = useState(initial);
  const { addItem } = useCart();

  const handleIncrement = () => quantity < stock && setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: item.id,
      title: item.title,
      price: item.price,
      pictureURL: item.pictureURL,
      quantity,
    };

    addItem(itemToAdd);
    console.log('Producto agregado:', itemToAdd);
  };

  return (
    <div className="d-flex flex-column align-items-start gap-2 mt-3">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
      </div>
      <button className="btn btn-success" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
