import React from 'react';

export default function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {/* Aquí irá tu catálogo de productos */}
    </div>
  );
}
