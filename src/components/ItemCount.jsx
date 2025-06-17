import React, { useState } from 'react';

export default function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="d-flex flex-column align-items-start gap-2 mt-3">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
        <span>{count}</span>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>
      <button className="btn btn-success" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
}
