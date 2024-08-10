import React from 'react'
import { useSelector } from 'react-redux'

export default function CartPopup() {

    const cart = useSelector(state =>state.cart)
  return (
    <div>
      {cart.map(item =>{
        <div>
        <img src={item.image} alt="" />
        <p>{item.price}</p>
        </div>
      })}
    </div>
  )
}
