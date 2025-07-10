// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { fetchProductById } from '../firebase/firebaseHelpers';

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchProductById(itemId);
        setProduct(data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemId]);

  console.log("Detalle recibido:", product);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Cargando producto...</p>
      ) : product && product.pictureUrl ? (
        <ItemDetail item={product} />
      ) : (
        <p>Producto no encontrado o incompleto.</p>
      )}
    </div>
  );
}
