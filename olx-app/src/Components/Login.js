import React, { useState } from 'react'
import {login } from '../Config/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import exclamationMark from '../Components/Assets/Exclamation Mark.avif'
import tickMark from '../Components/Assets/Tick Mark.jpg'
import 'animate.css';
import Swal from 'sweetalert2'


export default function Login() {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()


  const loginFunction = async ()=>{
    try{
      await login(email , password)
      navigate('/')
      Swal.fire({
        imageUrl: tickMark,
        imageHeight: 200,
        imageAlt: "Tick Image",
        title: "Login successful. Welcome aboard",
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
    } catch(e){
      Swal.fire({
        imageUrl: exclamationMark,
        imageHeight: 200,
        imageAlt: "Exclamation Image",
        title: e.message,
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
    };
    }

  return (
    <div>
    <h1 className='heading'>LOGIN</h1>
    <div className='login-box'>
        <input onChange={e=> setEmail(e.target.value)} className='input' type="email" placeholder='Enter Email...' />
        <input onChange={e=> setPassword(e.target.value)} className='input' type="password" placeholder='Enter Password...' />
        <button onClick={loginFunction} className='button2'>LOGIN</button>
        <h3 className='mt-3'>Don't have an account? <Link className='text-decoration-none' to="/RegisterPage">Register</Link> </h3>
    </div>
    </div>
  )
}
