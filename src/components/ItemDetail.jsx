import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  const handleAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidad(es) de ${item.title}`);
  };

  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: '600px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.pictureUrl} className="img-fluid rounded-start" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text"><strong>${item.price}</strong></p>

            {/* Aquí va el contador */}
            <ItemCount initial={1} stock={10} onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}
