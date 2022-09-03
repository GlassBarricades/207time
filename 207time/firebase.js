import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjU-szp3PJj7xHo_c50kK3n6X4NBjwP44",
  authDomain: "klen-824fd.firebaseapp.com",
  projectId: "klen-824fd",
  storageBucket: "klen-824fd.appspot.com",
  messagingSenderId: "1095330280823",
  appId: "1:1095330280823:web:8ac4d7140f651c14221d72",
  measurementId: "G-122QT2SBY3"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();