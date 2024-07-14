import React from 'react'

export default function Login() {
  return (
    <div className='text-center'>
    <h1 className='heading'>LOGIN</h1>
    <div className='login-box'>
        <input className='input' type="text" placeholder='Enter Full Name...' />
        <input className='input' type="email" placeholder='Enter Email...' />
        <input className='input' type="password" placeholder='Enter Password...' />
        <button className='button2'>LOGIN</button>
    </div>
    </div>
  )
}
