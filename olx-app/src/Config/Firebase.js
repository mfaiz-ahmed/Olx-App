import { initializeApp } from "firebase/app";
import {getAuth ,  createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from 'firebase/auth'
import { getFirestore , collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCg8i_dYRXGWRLeQpLybRNrwmlJMGD4Qek",
  authDomain: "olx-app-f047e.firebaseapp.com",
  projectId: "olx-app-f047e",
  storageBucket: "olx-app-f047e.appspot.com",
  messagingSenderId: "947431335831",
  appId: "1:947431335831:web:c06c9131c6638f304d46d2",
  measurementId: "G-MZ524HB27Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const db = getFirestore(app);



const register = async (userInfo)=>{
  const {email , password , fullName , birthDate , phoneNumber} = userInfo
  await createUserWithEmailAndPassword(auth, email, password)
  const users = {fullName , birthDate , phoneNumber , email}
  return addDoc(collection(db, "users"), users);
  
}



const login = (email , password)=>{
 return signInWithEmailAndPassword(auth, email, password)
  
}




export {login,register}