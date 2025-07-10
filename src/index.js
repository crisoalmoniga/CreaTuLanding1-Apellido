import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'; // ✅ Importación correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>     {/* ✅ Envolvé la App con el provider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);