// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYgWGTTwfbQVBHnpDEAjSG4NMsQC9H30Y",
  authDomain: "surfingaway-537b5.firebaseapp.com",
  projectId: "surfingaway-537b5",
  storageBucket: "surfingaway-537b5.appspot.com",
  messagingSenderId: "110621195814",
  appId: "1:110621195814:web:91d4a8a0421cb0519670e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
