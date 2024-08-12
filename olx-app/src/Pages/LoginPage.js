import React from 'react'
import Login from '../Components/Login'
import { useSelector } from 'react-redux';


export default function LoginPage() {

  const color = useSelector((state) => state.themeStore.color);


  return (
    <div style={{
      backgroundColor: color,
    }}>
    <Login />
    </div>
  )
}
