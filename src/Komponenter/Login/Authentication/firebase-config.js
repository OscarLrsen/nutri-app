// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);