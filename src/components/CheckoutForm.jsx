import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    if (!name || !phone || !email || !confirmEmail) {
      alert('Por favor, completá todos los campos.');
      return;
    }

    if (email !== confirmEmail) {
      alert('Los correos no coinciden.');
      return;
    }

    const order = {
      buyer: {
        name,
        phone,
        email
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      clearCart();
      alert(`Compra realizada con éxito. ID de orden: ${docRef.id}`);
      navigate('/');
    } catch (error) {
      console.error('Error al guardar la orden:', error);
      alert('Ocurrió un error al procesar la compra. Intentá nuevamente.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Confirmar correo"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
}