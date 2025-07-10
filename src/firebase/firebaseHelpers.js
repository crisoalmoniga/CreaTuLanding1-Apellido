// src/firebase/firebaseHelpers.js
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import db from "./db";

// Traer todos los productos
export const fetchProducts = async () => {
  const productosRef = collection(db, "products");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Traer productos por categoría
export const fetchProductsByCategory = async (categoryId) => {
  const productosRef = collection(db, "products");
  const q = query(productosRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Traer producto por ID
export const fetchProductById = async (itemId) => {
  const productoRef = doc(db, "products", itemId);
  const snapshot = await getDoc(productoRef);
  return { id: snapshot.id, ...snapshot.data() };
};
