// import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCq7obtbEllZmGW_8VE9f2sfwHCmtwZeQk",
//     authDomain: "dc-motor-1a512.firebaseapp.com",
//     projectId: "dc-motor-1a512",
//     storageBucket: "dc-motor-1a512.appspot.com",
//     messagingSenderId: "167571167210",
//     appId: "1:167571167210:web:69bd98b584b89f5dde8493",
//     measurementId: "G-XR38EEGB2M"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2KaB9lgEgZ4VMJGj8xE6idqeP-DL53YE",
  authDomain: "miracle-workers-7.firebaseapp.com",
  projectId: "miracle-workers-7",
  storageBucket: "miracle-workers-7.appspot.com",
  messagingSenderId: "96519939158",
  appId: "1:96519939158:web:7975e80c7b8774edfd07f7",
  measurementId: "G-FTJJEKTFSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
