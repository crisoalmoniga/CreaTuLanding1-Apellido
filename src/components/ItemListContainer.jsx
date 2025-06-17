import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/products';
import ItemList from './ItemList';

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
}