import React, { useState } from 'react'
import {login } from '../Config/Firebase'
import { Link } from 'react-router-dom'

export default function Login() {

  const [fullName , setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  return (
    <div className='text-center'>
    <h1 className='heading'>LOGIN</h1>
    <div className='login-box'>
        <input onChange={e=> setFullName(e.target.value)} className='input' type="text" placeholder='Enter Full Name...' />
        <input onChange={e=> setEmail(e.target.value)} className='input' type="email" placeholder='Enter Email...' />
        <input onChange={e=> setPassword(e.target.value)} className='input' type="password" placeholder='Enter Password...' />
        <button onClick={()=> login(email , password)} className='button2'>LOGIN</button>
        <h3 className='mt-3'>Don't have an account? <Link className='text-decoration-none' to="/RegisterPage">Register</Link> </h3>
    </div>
    </div>
  )
}
