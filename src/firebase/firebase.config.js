// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-gN7IRWls6Z77n1AnyuKCwZLiXEFZqNM",
  authDomain: "toy-cars-marketplace-client.firebaseapp.com",
  projectId: "toy-cars-marketplace-client",
  storageBucket: "toy-cars-marketplace-client.appspot.com",
  messagingSenderId: "764303439466",
  appId: "1:764303439466:web:8f3318f82de5d1366c7c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;