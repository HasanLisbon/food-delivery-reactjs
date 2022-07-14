import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1Yqdku4AmUBaZC2EYJ7H2u31MO36TDH4",
  authDomain: "restaurant-app-8eda9.firebaseapp.com",
  databaseURL: "https://restaurant-app-8eda9-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-8eda9",
  storageBucket: "restaurant-app-8eda9.appspot.com",
  messagingSenderId: "910270141579",
  appId: "1:910270141579:web:858c6aadc0f8df9edc308e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
