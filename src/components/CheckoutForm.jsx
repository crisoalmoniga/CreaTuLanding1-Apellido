import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext';

export default function CheckoutForm() {
  const { cart, totalQuantity, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const order = {
      buyer: formData,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden:', error);
    } finally {
      setSending(false);
    }
  };

  if (orderId) {
    return (
      <div className="alert alert-success mt-4">
        🎉 ¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <h4>Finalizar compra</h4>
      <div className="mb-3">
        <label>Nombre</label>
        <input type="text" name="name" className="form-control" required onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" name="email" className="form-control" required onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Teléfono</label>
        <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? 'Enviando orden...' : 'Confirmar compra'}
      </button>
    </form>
  );
}