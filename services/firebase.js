import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCcRsPL11esfg0Y2swNUfjR6ps7iGjRs40',
  authDomain: 'agenda-flaviane.firebaseapp.com',
  projectId: 'agenda-flaviane',
  storageBucket: 'agenda-flaviane.firebasestorage.app',
  messagingSenderId: '147397504962',
  appId: '1:147397504962:web:7a0cc64b19df59984fb05b',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;