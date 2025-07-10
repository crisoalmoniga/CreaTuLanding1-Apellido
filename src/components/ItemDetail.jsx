import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({ item }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = qty => {
    addItem(item, qty);
    setAdded(true);
  };

  return (
    <div className="card …">
      {/* … */}
      {!added ? (
        <ItemCount initial={1} stock={10} onAdd={handleAdd} />
      ) : (
        <button
          className="btn btn-primary mt-3"
          onClick={() => window.location.href = '/cart'}
        >
          Ver carrito
        </button>
      )}
    </div>
  );
}
