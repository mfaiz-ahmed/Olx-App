import React, { useState } from 'react'
import { register } from '../Config/Firebase'
import exclamationMark from '../Components/Assets/Exclamation Mark.avif'
import tickMark from '../Components/Assets/Tick Mark.jpg'
import 'animate.css';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


export default function Register() {

    const [fullName , setFullName] = useState('')
    const [email , setEmail] = useState('')
    const [birthDate , setBirthDate] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    const registerFunction = ()=>{
      register(email , password)
      .then((userCredential) => {
        navigate('/')
        Swal.fire({
          imageUrl: tickMark,
          imageHeight: 200,
          imageAlt: "Tick Image",
          title: "Congratulations! You have successfully registered.",
          showClass: {
            popup: `
              animate__animated
              animate__bounceInDown
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__bounceOutDown
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
          imageHeight: 200,
          imageAlt: "Exclamation Image",
          title: errorMessage,
          showClass: {
            popup: `
              animate__animated
              animate__bounceInDown
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__bounceOutDown
              animate__faster
            `
          }
        });
      });
    }

  return (
    <div>
      <h1 className='heading'>REGISTER</h1>
      <div className='register-box'>
        <input onChange={e=> setFullName(e.target.value)} className='input' type="text" placeholder='Enter Full Name...' />
        <input onChange={e=> setEmail(e.target.value)} className='input' type="email" placeholder='Enter Email...' />
        <input onChange={e=> setBirthDate(e.target.value)} className='input' type="date" placeholder='Enter Birth Date...' />
        <input onChange={e=> setPhoneNumber(e.target.value)} className='input' type="number" placeholder='Enter Phone Number...' />
        <input onChange={e=> setPassword(e.target.value)} className='input' type="password" placeholder='Enter Password...' />
        <button onClick={registerFunction} className='button2'>REGISTER</button>
      </div>
    </div>
  )
}
