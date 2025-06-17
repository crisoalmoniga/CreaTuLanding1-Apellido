import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  return (
    <div className="container mt-4">
      {product ? (
        <ItemDetail item={product} />
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}
