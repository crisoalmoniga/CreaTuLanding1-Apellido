import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
}
