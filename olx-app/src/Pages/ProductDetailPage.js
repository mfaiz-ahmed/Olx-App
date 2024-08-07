import React from 'react'
import Navbar from '../Components/Navbar'
import ProductDetail from '../Components/ProductDetail'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'


export default function ProductDetailPage() {

  
  const color = useSelector(state => state.color)


  return (
    <div style={{
      backgroundColor : color
    }}>
    <Navbar />
    <ProductDetail />
    <Footer />
    </div>
  )
}
