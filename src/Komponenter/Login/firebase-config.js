// src/Komponenter/Login/Authentication/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgRIon0CeRODxoOtg4rVCfECYEgf6fKBs",
  authDomain: "nutri-d7e86.firebaseapp.com",
  projectId: "nutri-d7e86",
  storageBucket: "nutri-d7e86.firebasestorage.app",
  messagingSenderId: "98714370805",
  appId: "1:98714370805:web:2955c03961b68155e8bbbc",
  measurementId: "G-GQMSSKCL25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Export the auth object for use in other components
export { auth };
