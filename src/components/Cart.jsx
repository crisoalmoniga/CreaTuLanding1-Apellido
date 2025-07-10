import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { items, removeItem, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', email: '' });
  const [order, setOrder] = useState(null);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = e => {
    e.preventDefault();
    // rudimentary validation
    if (!form.name || !form.email) return alert('Completa todos los campos');
    // “place order”
    setOrder({ id: Date.now(), ...form, items, total });
    clearCart();
  };

  if (order) {
    return (
      <div className="container mt-4">
        <h2>¡Orden confirmada!</h2>
        <p>Tu número de orden es <strong>{order.id}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Tu carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {items.map(i => (
              <li key={i.id} className="list-group-item d-flex justify-content-between">
                {i.title} x {i.quantity}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeItem(i.id)}
                >×</button>
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total}</strong></p>
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>
            Vaciar carrito
          </button>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label>Nombre</label>
              <input
                className="form-control"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
            <button type="submit" className="btn btn-success">Confirmar compra</button>
          </form>
        </>
      )}
    </div>
  );
}
