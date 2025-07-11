import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDchUZsb4jTKKJwGdB8GDxQ4R9ld9323q4",
  authDomain: "react-entrega-final-918bb.firebaseapp.com",
  projectId: "react-entrega-final-918bb",
  storageBucket: "react-entrega-final-918bb.appspot.com",
  messagingSenderId: "172255162538",
  appId: "1:172255162538:web:19a149344d468f3e1660d3"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
