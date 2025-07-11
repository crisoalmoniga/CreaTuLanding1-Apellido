// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  const imageURL = item.pictureURL?.trim()
    ? item.pictureURL
    : 'https://via.placeholder.com/600x400?text=Sin+imagen';

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={imageURL} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
