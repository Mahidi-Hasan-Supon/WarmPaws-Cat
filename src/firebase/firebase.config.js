// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYZRXbTjaIwlR-PWIdbaNCt47488h_7D0",
  authDomain: "fir-auth-project-d12a0.firebaseapp.com",
  projectId: "fir-auth-project-d12a0",
  storageBucket: "fir-auth-project-d12a0.firebasestorage.app",
  messagingSenderId: "89024533443",
  appId: "1:89024533443:web:f0c8337311f56f2d8d2376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);