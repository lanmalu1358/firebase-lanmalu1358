import { initializeApp,getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = getApps
if (!getApps.length) {
initializeApp(firebaseConfig)
}

export const createUser = (email,password) => {
  try {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((useCredential) => {
    const user =useCredential.user;
    console.log(user)
    console.log("create user success!!")
    return "success"
  })
  } 
  catch (error) {
    console.log(error.message)
    return "failed"
  }
}

export const login = (email,password) => {
  try {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    console.log("login success!!")
    return "success"
  })
  } 
  catch (error) {
    console.log(error.message)
    return "failed"
  }
}