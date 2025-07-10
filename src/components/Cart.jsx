import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className="m-4">🛒 El carrito está vacío.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{item.title}</h5>
              <p className="mb-1">Cantidad: {item.quantity}</p>
              <p className="mb-1">Precio unitario: ${item.price}</p>
              <p className="mb-1"><strong>Subtotal: ${item.price * item.quantity}</strong></p>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${total}</h4>
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}