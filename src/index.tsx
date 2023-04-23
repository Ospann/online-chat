import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import firebase from 'firebase/compat/app';
// import {initializeApp} from 'firebase/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDIX6Rdh6SzY2CJ_3TfpUVzr3KFI691MM",
  authDomain: "online-chat-d8f10.firebaseapp.com",
  projectId: "online-chat-d8f10",
  storageBucket: "online-chat-d8f10.appspot.com",
  messagingSenderId: "892061251444",
  appId: "1:892061251444:web:d91ec732d43e8ac9969e21",
  measurementId: "G-X9Z2950PG3"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

console.log(auth);
console.log(firestore)

export const Context = createContext<any>(null);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <Navbar />
    <App />
  </Context.Provider>
);