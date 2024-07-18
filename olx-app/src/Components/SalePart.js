import React from 'react'
import SalePic from './Assets/Sale-pic.jpg'

export default function SalePart() {
  return (
    <div id='sale' className='d-flex align-items-center justify-content-around mt-5 pt-5'>
    <div className='sale-box'>
      <h1 className='sale-text'>10% OFF</h1>
      <h1 className='sale-text'>NEW YEAR SALE</h1>
      <button className='button'>SHOP NOW</button>
    </div>      
      <img width={'50%'} src={SalePic} alt="Image" />
    </div>
  )
}
