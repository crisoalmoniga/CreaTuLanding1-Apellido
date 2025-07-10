// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';

export default function ItemList({ items }) {
  return (
    <ul className="row list-unstyled">
      {items.map((item) => (
        <li key={item.id} className="col-md-3 mb-3">
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}