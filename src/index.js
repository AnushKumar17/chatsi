import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRQTa834BuhMXmwbi_p_zdsnhH9d0ahYA",
  authDomain: "chatsi1.firebaseapp.com",
  projectId: "chatsi1",
  storageBucket: "chatsi1.appspot.com",
  messagingSenderId: "358246472562",
  appId: "1:358246472562:web:b01b06b677afa2e1695beb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

