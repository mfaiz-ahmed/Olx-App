import { initializeApp } from "firebase/app";
import {getAuth ,  createUserWithEmailAndPassword ,  signInWithEmailAndPassword} from 'firebase/auth'
import Swal from 'sweetalert2'
import exclamationMark from '../Components/Assets/Exclamation Mark.avif'
import tickMark from '../Components/Assets/Tick Mark.jpg'
import 'animate.css';


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



const register = (email:any , password:any)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Swal.fire({
      imageUrl: tickMark,
      imageHeight: 200,
      imageAlt: "Tick Mark",
      title: "Successfully Registered!",
      showClass: {
        popup: `
          animate__animated
          animate__slideInLeft
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__slideOutRight
          animate__faster
        `
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      imageUrl: exclamationMark,
      imageHeight: 100,
      imageAlt: "Exclamation Mark",
      title: errorMessage,
      showClass: {
        popup: `
          animate__animated
          animate__slideInLeft
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__slideOutRight
          animate__faster
        `
      }
    });
  });  
}



const login = (email:any , password:any)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Swal.fire({
      imageUrl: tickMark,
      imageHeight: 200,
      imageAlt: "Tick Mark",
      title: "Successfully Logged In!",
      showClass: {
        popup: `
          animate__animated
          animate__slideInLeft
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__slideOutRight
          animate__faster
        `
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      imageUrl: exclamationMark,
      imageHeight: 100,
      imageAlt: "Exclamation Mark",
      title: errorMessage,
      showClass: {
        popup: `
          animate__animated
          animate__slideInLeft
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__slideOutRight
          animate__faster
        `
      }
    });
  });
  
}




export {login,register}