import React from 'react'
import Register from '../Components/Register'
import { useSelector } from 'react-redux';

export default function RegisterPage() {

  const color = useSelector((state) => state.themeStore.color);


  return (
    <div style={{
      backgroundColor: color,
    }}>
    <Register />
    </div>

  )
}
