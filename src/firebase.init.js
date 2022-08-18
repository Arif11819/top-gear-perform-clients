import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDct4IaxNQBA9M1I2wAN6CHpubEZih4UWY",
  authDomain: "top-gear-perform.firebaseapp.com",
  projectId: "top-gear-perform",
  storageBucket: "top-gear-perform.appspot.com",
  messagingSenderId: "988683612252",
  appId: "1:988683612252:web:84a01bcfa4aa4fd967f699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
