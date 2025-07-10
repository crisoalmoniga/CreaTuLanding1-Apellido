// src/components/ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

export default function ItemDetail({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    const itemToAdd = {
      id: item.id,
      title: item.title,
      price: item.price,
      pictureURL: item.pictureURL,
      quantity,
    };

    addToCart(itemToAdd);
    console.log('Producto agregado:', itemToAdd);
  };

  return (
    <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <img
        src={item.pictureURL}
        className="card-img-top"
        alt={item.title}
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description}</p>
        <p className="card-text fw-bold">${item.price}</p>
        <p className="card-text">
          Stock disponible: <strong>{item.stock}</strong>
        </p>

        <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
}