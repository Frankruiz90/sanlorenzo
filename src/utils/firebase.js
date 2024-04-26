// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { Database } from "firebase/database";
import { getStorage,ref, uploadBytes,getDownloadURL, deleteObject  } from "firebase/storage";
import { getFirestore, doc, getDoc, getDocs, collection,setDoc, deleteDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnOHEhMHEYurRgATEu3u2DEat4rQYhbUQ",
  authDomain: "san-lorenzo-4032e.firebaseapp.com",
  projectId: "san-lorenzo-4032e",
  storageBucket: "san-lorenzo-4032e.appspot.com",
  messagingSenderId: "137487020292",
  appId: "1:137487020292:web:b1c58a8b640f5d34a7e051"
};

// Initialize Firebase
const refFire = ref;
const uploadbytes = uploadBytes;
const app = initializeApp(firebaseConfig);
const db = Database;
const linksRef = db;
const firebaseApp = getApp();
const auth = getAuth();
const getMyStorage = getStorage(firebaseApp,"gs://san-lorenzo-4032e.appspot.com");
const myStorage = getStorage(app);
const getUrl = getDownloadURL;
const dbFire = getFirestore(app);
const docFire = doc;
const getDocFire = getDoc;
const getDocsFire = getDocs;
const collectionFire = collection;
const setDocFire = setDoc;
const deletedFire = deleteDoc;
const deletedStorage = deleteObject;

export {
    app,
    linksRef,
    auth,
    // inicio,
    getMyStorage,
    myStorage,
    refFire,
    uploadbytes,
    getUrl,
    dbFire,
    docFire,
    getDocFire,  
    getDocsFire,
    collectionFire,
    setDocFire,
    deletedFire,
    deletedStorage

}