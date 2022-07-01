import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDml_knBsT_9_w2j_4pvPt9cf8rTb-9ynk",
  authDomain: "react-coderhouse-8a758.firebaseapp.com",
  projectId: "react-coderhouse-8a758",
  storageBucket: "react-coderhouse-8a758.appspot.com",
  messagingSenderId: "494072448266",
  appId: "1:494072448266:web:05e936a6921986e49d26f3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);