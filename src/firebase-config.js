// Everything related to the database // Connecting to the project itself 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "pugilist-express.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "pugilist-express.appspot.com",
  messagingSenderId: "168280891884",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-9CZ9LDNCZ5"
};


export const app = initializeApp(firebaseConfig); // Establish a connection to the database 
export const db = getFirestore(app)
export const auth = getAuth(app)
