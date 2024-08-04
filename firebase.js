import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWdC3s9gr03mSdzmbMBndiuieHV0uNDeo",
  authDomain: "inventory-management-e9a1e.firebaseapp.com",
  projectId: "inventory-management-e9a1e",
  storageBucket: "inventory-management-e9a1e.appspot.com",
  messagingSenderId: "647986285740",
  appId: "1:647986285740:web:f6e84257dc1e83dd02e309",
  measurementId: "G-JYEDKMP28T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if window is defined to avoid SSR issues
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const firestore = getFirestore(app);

export { firestore };
