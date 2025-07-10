// // src/components/CheckoutForm.jsx
// import React, { useState } from 'react';

// export default function CheckoutForm({ onConfirm }) {
//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onConfirm(form);
//   };

//   return (
//     <form className="container my-4" onSubmit={handleSubmit}>
//       <h3>Finalizar compra</h3>
//       <div className="mb-3">
//         <label>Nombre</label>
//         <input type="text" name="name" className="form-control" required onChange={handleChange} value={form.name} />
//       </div>
//       <div className="mb-3">
//         <label>Teléfono</label>
//         <input type="text" name="phone" className="form-control" required onChange={handleChange} value={form.phone} />
//       </div>
//       <div className="mb-3">
//         <label>Email</label>
//         <input type="email" name="email" className="form-control" required onChange={handleChange} value={form.email} />
//       </div>
//       <button type="submit" className="btn btn-primary">Confirmar orden</button>
//     </form>
//   );
// }

import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useCart } from '../context/CartContext';

export default function CheckoutForm() {
  const { cart, totalItems, clearCart } = useCart();

  const handleCheckout = async () => {
    const order = {
      cliente: "Cristian",
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      fecha: new Date().toISOString()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Orden generada con éxito. ID: ${docRef.id}`);
      clearCart();
    } catch (error) {
      alert("Error al generar la orden.");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Finalizar compra</h2>
      <button className="btn btn-success" onClick={handleCheckout}>
        Generar orden
      </button>
    </div>
  );
}
