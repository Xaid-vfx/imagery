// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9GHlIo1iVFKmgTJUKmdBuXaj8p6MqHQI",
  authDomain: "snapshoot-65ff1.firebaseapp.com",
  projectId: "snapshoot-65ff1",
  storageBucket: "snapshoot-65ff1.appspot.com",
  messagingSenderId: "621712692307",
  appId: "1:621712692307:web:745c62013884721081e2a6",
  measurementId: "G-L33NEYQEC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)