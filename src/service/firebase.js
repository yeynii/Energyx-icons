import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF-AzUkEw4BSJuYDQTBM01DzYzB1EeNHc",
  authDomain: "energyx-icons.firebaseapp.com",
  databaseURL: "https://energyx-icons-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "energyx-icons",
  storageBucket: "energyx-icons.appspot.com",
  messagingSenderId: "71158113999",
  appId: "1:71158113999:web:187abe2fd12b2e2e67f9ba"
};

export const firebaseApp = initializeApp(firebaseConfig);