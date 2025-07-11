// src/components/ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  if (!item || typeof item !== 'object') {
    return <p>Producto no válido.</p>;
  }

  const imageURL = item.pictureURL && typeof item.pictureURL === 'string' && item.pictureURL.trim()
    ? item.pictureURL
    : 'https://via.placeholder.com/600x400?text=Sin+imagen';

  return (
    <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <img
        src={imageURL}
        className="card-img-top"
        alt={item.title || 'Producto'}
        style={{ objectFit: 'cover', height: '400px' }}
      />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description}</p>
        <p className="card-text fw-bold">${item.price}</p>
        <p className="card-text">
          Stock disponible: <strong>{item.stock}</strong>
        </p>
        <ItemCount item={item} />
      </div>
    </div>
  );
}
