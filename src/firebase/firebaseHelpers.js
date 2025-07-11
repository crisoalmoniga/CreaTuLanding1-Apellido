// src/firebase/firebaseHelpers.js
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

// Ya deben existir estas funciones:
export const fetchProducts = async () => {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchProductsByCategory = async (categoryId) => {
  const q = query(collection(db, 'products'), where('category', '==', categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 🆕 Agregá esta función:
export const fetchProductById = async (id) => {
  if (!id || typeof id !== 'string') {
    throw new Error('ID inválido');
  }

  const ref = doc(db, 'products', id.trim());
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error('Producto no encontrado');
  }

  return { id: snapshot.id, ...snapshot.data() };
};
