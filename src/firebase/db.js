// src/firebase/db.js
import { getFirestore } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);
export default db;
