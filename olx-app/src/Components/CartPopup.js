import React from 'react'
import { useSelector } from 'react-redux'

export default function CartPopup() {


    const cart = useSelector(state => state.cart)
    console.log('cart' , cart);
    
  return (
    <div>
      {cart.map(item =>{
        <p>{item.title}</p>
      })}
    </div>
  )
}
