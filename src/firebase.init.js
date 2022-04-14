// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdAfra9WVh0xubLPj-y5w4dYP6za7hvz8",
    authDomain: "ema-jonh-shopping.firebaseapp.com",
    projectId: "ema-jonh-shopping",
    storageBucket: "ema-jonh-shopping.appspot.com",
    messagingSenderId: "423101113530",
    appId: "1:423101113530:web:99065612826d2578d00e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;