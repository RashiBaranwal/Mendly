import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginproj-71942.firebaseapp.com",
  projectId: "loginproj-71942",
  storageBucket: "loginproj-71942.firebasestorage.app",
  messagingSenderId: "660482677729",
  appId: "1:660482677729:web:b7ef9d966d16d9e5fd50a0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

