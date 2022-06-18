// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtN1Dzp4nvIlpWc_KdfP2Z2zyBJhBuq0",
  authDomain: "guia-do-demetria.firebaseapp.com",
  projectId: "guia-do-demetria",
  storageBucket: "guia-do-demetria.appspot.com",
  messagingSenderId: "388221330023",
  appId: "1:388221330023:web:d41d9f2b3684fb85cbeac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();
export { database };