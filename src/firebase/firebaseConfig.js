// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4aErQpEfFeIV6XfiGLcxPzYBVndV7O14",
  authDomain: "chatwall-28c12.firebaseapp.com",
  projectId: "chatwall-28c12",
  storageBucket: "chatwall-28c12.firebasestorage.app",
  messagingSenderId: "449444902598",
  appId: "1:449444902598:web:bc526eed49baeba8e089c7",
  measurementId: "G-XXJ89E8WEZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

const analytics = getAnalytics(app);
