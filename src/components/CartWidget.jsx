import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartWidget() {
  const cantidad = 3;
  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={24} />
      {cantidad > 0 && (
        <span style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '1rem',
          height: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem'
        }}>
          {cantidad}
        </span>
      )}
    </div>
  );
}
