import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { fetchProducts, fetchProductsByCategory } from '../firebase/firebaseHelpers';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = categoryId
          ? await fetchProductsByCategory(categoryId)
          : await fetchProducts();
        console.log("📦 Productos recibidos:", data);
        setProducts(data);
      } catch (error) {
        console.error("❌ Error cargando productos:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        <ItemList items={products} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
}