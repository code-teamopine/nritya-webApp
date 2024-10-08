 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: "nritya-7e526.firebaseapp.com",
  projectId: "nritya-7e526",
  storageBucket: "nritya-7e526.appspot.com",
  messagingSenderId: "847422777654",
  appId: "1:847422777654:web:7d51e9533167704bafab97",
  measurementId: "G-YSM4JX078D"
};
const gMapApiKey ={
  key: process.env.REACT_APP_GMAP_API_KEY
};

//console.log(process.env.REACT_APP_GMAP_API_KEY,"yo")
//nitialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// References
const auth = getAuth(app)
// Get a reference to the Firestore databas e
const db = getFirestore(app);
const storage = getStorage(app)

export {auth,provider,db,storage,gMapApiKey};