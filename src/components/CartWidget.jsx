import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // ✅ Usamos el contexto

export default function CartWidget() {
  const { totalItems } = useCart(); // ✅ Obtenemos la cantidad desde el contexto

  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={20} />
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}