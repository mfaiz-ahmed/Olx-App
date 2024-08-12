import React from 'react'
import AddProduct from '../Components/AddProduct'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';


export default function PostPage() {

  const color = useSelector((state) => state.themeStore.color);


  return (
    <div style={{
      backgroundColor: color,
    }}>
    <Navbar />
    <AddProduct />
    <Footer />
    </div>
  )
}
