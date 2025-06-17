import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenidos a Mi Tienda!" />}
        />

        {/* Rutas dinámicas */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="¡Bienvenidos a Mi Tienda!" />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={<h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;