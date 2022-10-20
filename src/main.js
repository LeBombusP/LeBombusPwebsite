import './app.css'
import App from './App.svelte'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as dotenv from 'dotenv'

const app = new App({
  target: document.getElementById('app')
  
})

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebaseAPIkey,
  authDomain: "lebombuspcom.firebaseapp.com",
  projectId: "lebombuspcom",
  storageBucket: "lebombuspcom.appspot.com",
  messagingSenderId: process.env.firebasemessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebasemeasurementId
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

export default app
