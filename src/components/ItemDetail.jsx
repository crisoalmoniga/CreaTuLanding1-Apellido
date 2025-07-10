// src/components/ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  if (!item) return <p className="text-center mt-4">❌ Error: Producto no disponible.</p>;

  const imageUrl = item.pictureURL?.trim()
    ? item.pictureURL
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jXtK6Z2tLyqgyKkSWPRseJ0-eu_sf4Zyzg&s';

  return (
    <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <img
        src={imageUrl}
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
