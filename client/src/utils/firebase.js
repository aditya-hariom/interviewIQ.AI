
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-b9520.firebaseapp.com",
  projectId: "interviewiq-b9520",
  storageBucket: "interviewiq-b9520.firebasestorage.app",
  messagingSenderId: "920424210740",
  appId: "1:920424210740:web:a153ea847ca2d3d4ce0561"
};

const app = initializeApp(firebaseConfig);

// auth ko enable kar rhe hai yaaha pe

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}