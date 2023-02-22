import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmyCbHQ5Y7dHfMv9X2XN2mMZ79FQHPCFU",
  authDomain: "fir-auth-9da1f.firebaseapp.com",
  projectId: "fir-auth-9da1f",
  storageBucket: "fir-auth-9da1f.appspot.com",
  messagingSenderId: "608018596600",
  appId: "1:608018596600:web:1260ba410260bc8479f10d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };