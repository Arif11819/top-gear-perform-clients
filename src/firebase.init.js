import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCn0kvEQkngEGSP5ifoWgw6I5naWNMCJxc",
  authDomain: "topgear-perform.firebaseapp.com",
  projectId: "topgear-perform",
  storageBucket: "topgear-perform.appspot.com",
  messagingSenderId: "14434189879",
  appId: "1:14434189879:web:e040af7ae120d3bee835b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;