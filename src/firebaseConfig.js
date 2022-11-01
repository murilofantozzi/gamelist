import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5NpgVg3hMaLfDTrJNzP64ZG-7mjV62nE",
    authDomain: "projeto-teste-861f7.firebaseapp.com",
    databaseURL: "https://projeto-teste-861f7-default-rtdb.firebaseio.com",
    projectId: "projeto-teste-861f7",
    storageBucket: "projeto-teste-861f7.appspot.com",
    messagingSenderId: "264766824377",
    appId: "1:264766824377:web:412497ffae8b8565cb6068",
    measurementId: "G-CXVH8D8NS4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

if(!firebase.apps.length){
    //Abre conexão 
    firebase.initializeApp(firebaseConfig);
}

export default firebase;