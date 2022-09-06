import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCH2OFoNsukGKfWS7QMD4zfLsDohLK0Mak",
  authDomain: "time-efe50.firebaseapp.com",
  databaseURL: "https://time-efe50-default-rtdb.firebaseio.com",
  projectId: "time-efe50",
  storageBucket: "time-efe50.appspot.com",
  messagingSenderId: "343691872905",
  appId: "1:343691872905:web:18f1f1ba769a29f88f1458"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();