import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function getProducts(categoryId) {
  const productosRef = collection(db, "products");

  const snapshot = await getDocs(productosRef);
  const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (categoryId) {
    return productos.filter(prod => prod.category === categoryId);
  }

  return productos;
}