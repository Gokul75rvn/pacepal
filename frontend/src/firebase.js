import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZUR93cO0IVArOAnf7qcPF3UhITcTvtUY",
  authDomain: "zintick-950ec.firebaseapp.com",
  projectId: "zintick-950ec",
  storageBucket: "zintick-950ec.firebasestorage.app",
  messagingSenderId: "739715949391",
  appId: "1:739715949391:web:65cc76495dd9509cbc1b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };