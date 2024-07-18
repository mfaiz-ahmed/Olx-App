import React, { useState } from 'react'
import { register } from '../Config/Firebase'

export default function Register() {

    const [fullName , setFullName] = useState('')
    const [email , setEmail] = useState('')
    const [birthDate , setBirthDate] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [password , setPassword] = useState('')

  return (
    <div>
      <h1 className='heading'>REGISTER</h1>
      <div className='register-box'>
        <input onChange={e=> setFullName(e.target.value)} className='input' type="text" placeholder='Enter Full Name...' />
        <input onChange={e=> setEmail(e.target.value)} className='input' type="email" placeholder='Enter Email...' />
        <input onChange={e=> setBirthDate(e.target.value)} className='input' type="date" placeholder='Enter Birth Date...' />
        <input onChange={e=> setPhoneNumber(e.target.value)} className='input' type="number" placeholder='Enter Phone Number...' />
        <input onChange={e=> setPassword(e.target.value)} className='input' type="password" placeholder='Enter Password...' />
        <button onClick={()=> register(email , password)} className='button2'>REGISTER</button>
      </div>
    </div>
  )
}
