import { initializeApp,getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { collection, addDoc, getFirestore, query, getDocs, getDoc, updateDoc, doc, deleteDoc, setDoc } from "firebase/firestore";


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

const provider = new GoogleAuthProvider();
provider.addScope('https://mail.google.com/');

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

export const firebaseLogin = () => {
  const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(token);
        console.log(user);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
    });
}

export const db =getFirestore();

export const createDataInFirebase =async () => {
  let returnObj = ""
  console.log('firebase start')

    try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "AdaAda",
      last: "Lovelace",
      born: 1815
    });
      returnObj = "test1"
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      returnObj ="test2"
    console.error("Eroor adding document: ", e);
    }
  return returnObj
}

export const readData = async () => {
  console.log('readData')
  const q =query(collection(db,"users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id," => ",doc.data());
  });
};

export const updateData = async () => {
  try{
    console.log("update start")
    const washingtonRef = doc(db, "users", "ByPtoIrajShBxIsgpsn1");
  await updateDoc(washingtonRef, {
    capital: true
  });
  }catch(err){
    console.log(err)
  };
  //await deleteDoc(doc(db, "cities", "DC"));  
};


export const deleteData = async () => {
  const docRef = doc(db, "users", "ByPtoIrajShBxIsgpsn1")

  await deleteDoc(docRef)
};


export const addData = async (first,last,born) => {
const docRef = await addDoc(collection(db, "users"), {
  first,
  last,
  born
});
console.log("Document written with ID: ", docRef.id);

}; 