import React, { useState } from 'react'

export default function ForgotPassword() {


    const [newPassword , setNewPassword] = useState('')

    const newPasswordFunction = (e:any)=>{
        e.preventDefault();
        console.log(newPassword);
        
    }

  return (
    <>
     <h1 className='heading'>FORGOT PASSWORD</h1> 
     <form onSubmit={newPasswordFunction} className='container signup-box' >
        <input onChange={(e)=>{
            setNewPassword(e.target.value)
        }} className='input' value={newPassword} type="password" placeholder='Create a New Password' />
        
        <br />
        <button type='submit' className='button2'>CHANGE PASSWORD</button>
     </form>
    </>
  )
}
