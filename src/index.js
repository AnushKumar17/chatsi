import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApijm9WyUZ1AHJ8fpH37a_G242MNfMZxw",
  authDomain: "chatsi-49fe9.firebaseapp.com",
  databaseURL: "https://chatsi-49fe9-default-rtdb.firebaseio.com",
  projectId: "chatsi-49fe9",
  storageBucket: "chatsi-49fe9.appspot.com",
  messagingSenderId: "94273278250",
  appId: "1:94273278250:web:a4ac797465a88a4d4f8e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

