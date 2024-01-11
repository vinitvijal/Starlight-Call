import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHM3qvQGYdYKrARfqisEbO-8rg4IoP814",
  authDomain: "starlight-cbfa8.firebaseapp.com",
  projectId: "starlight-cbfa8",
  storageBucket: "starlight-cbfa8.appspot.com",
  messagingSenderId: "682729407582",
  appId: "1:682729407582:web:e9e8ee62ab6ffc898d20cf",
  measurementId: "G-2DSW03L947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;