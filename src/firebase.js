
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpZTlNDy3VArtIAbcU1f3sm-u1dUSiEU",
  authDomain: "cookination-813a3.firebaseapp.com",
  projectId: "cookination-813a3",
  storageBucket: "cookination-813a3.appspot.com",
  messagingSenderId: "659046652781",
  appId: "1:659046652781:web:fa21781af7dbc79c799864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }