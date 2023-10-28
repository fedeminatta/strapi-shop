// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDNUgpJnJoTN6cuBJ5Fs4gaozyuxIG4QyE',
    authDomain: 'tienda-prueba-86d85.firebaseapp.com',
    projectId: 'tienda-prueba-86d85',
    storageBucket: 'tienda-prueba-86d85.appspot.com',
    messagingSenderId: '522061733352',
    appId: '1:522061733352:web:02e930556f1d3d4dfc185d',
    measurementId: 'G-LXV4V4F2Q7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
