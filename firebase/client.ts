// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcVx6BbcsOd1v8EYzn5hJNdHpiGQcjfzo",
  authDomain: "preplab-e9783.firebaseapp.com",
  projectId: "preplab-e9783",
  storageBucket: "preplab-e9783.firebasestorage.app",
  messagingSenderId: "75385005434",
  appId: "1:75385005434:web:f57bbe8a91b9d2bb2f22c3",
  measurementId: "G-EX1HZSXYM3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);