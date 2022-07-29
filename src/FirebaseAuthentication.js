import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAB0XtiI-s4YlelUUxhwtxxFRSgEhHq0Qw",
  authDomain: "piccolocuistotv3.firebaseapp.com",
  projectId: "piccolocuistotv3",
  storageBucket: "piccolocuistotv3.appspot.com",
  messagingSenderId: "946987973295",
  appId: "1:946987973295:web:833f80f3d2025bf59e325a"
});

export const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);