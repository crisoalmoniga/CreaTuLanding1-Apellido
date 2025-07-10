import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      {item.pictureURL && (
        <img
          src={item.pictureURL}
          className="card-img-top"
          alt={item.title}
        />
      )}
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