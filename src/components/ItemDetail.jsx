import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

export default function ItemDetail({ item }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (count) => {
    addToCart({ ...item, quantity: count });
    setAdded(true);
  };

  return (
    <div className="card text-center m-5" style={{ maxWidth: '600px', margin: 'auto' }}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">
          <strong>${item.price}</strong>
        </p>

        {/* Contador y botón de agregar */}
        {!added ? (
          <ItemCount initial={1} stock={10} onAdd={handleAdd} />
        ) : (
          <p className="text-success">Producto agregado al carrito ✅</p>
        )}
      </div>
    </div>
  );
}