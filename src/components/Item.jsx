import React from 'react';

export default function Item({ item }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
        <button className="btn btn-primary">Ver detalle</button>
      </div>
    </div>
  );
}
