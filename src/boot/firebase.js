import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPokqCzM5fRzdZo9KwI6QI1Q1wdPlxIKQ',
  authDomain: 'webfinal-8235e.firebaseapp.com',
  projectId: 'webfinal-8235e',
  storageBucket: 'webfinal-8235e.appspot.com',
  messagingSenderId: '94874814360',
  appId: '1:94874814360:web:86a7f001387676886a8ded',
  measurementId: 'G-FQKNDE5K83',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
