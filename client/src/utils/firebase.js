import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDqRBDcVYY8WeRNcPROJopZk2jLeRdkaFE",
  authDomain: "examnotes2-dce55.firebaseapp.com",
  projectId: "examnotes2-dce55",
  storageBucket: "examnotes2-dce55.firebasestorage.app",
  messagingSenderId: "996433767561",
  appId: "1:996433767561:web:5bfebc42cfad1a2f9aea58"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}
