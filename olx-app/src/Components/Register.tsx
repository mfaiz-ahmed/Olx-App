import React from 'react'

export default function Register() {
  return (
    <div>
      <h1 className='heading'>REGISTER</h1>
      <div className='register-box'>
        <input className='input' type="text" placeholder='Enter Full Name...' />
        <input className='input' type="email" placeholder='Enter Email...' />
        <input className='input' type="date" placeholder='Enter Birth Date...' />
        <input className='input' type="number" placeholder='Enter Phone Number...' />
        <input className='input' type="password" placeholder='Enter Password...' />
        <button className='button2'>REGISTER</button>
      </div>
    </div>
  )
}
