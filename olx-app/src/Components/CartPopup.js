import React from "react";
import { useSelector } from "react-redux";

export default function CartPopup() {
  const cart = useSelector((state) => state.cartStore.cart );
  console.log("cart", cart);


  const hideCart = () =>{
    const cart = document.querySelector('.cartPopup')
    cart.style.display = 'none'
  }
  

  return (
    <>
    {cart.length > 0 ? (
      <div className="cartPopup">
        <h1 className="cross" onClick={hideCart}><i className="fa-solid fa-x"></i></h1>
      {cart.map(item => {
        return <div key={item.i}>
          <img className="border p-2 m-3 d-inline" width={120} src={item.image} alt="" />
          <div className="cartText">
          <p className="fs-3"><span className="fw-bold">Title: </span> {item.title}</p>
          <p className="fs-3"><span className="fw-bold">Brand: </span> {item.brand}</p>
          <p className="fs-3"> <span className="fw-bold">Price: </span> {item.price}</p>  
          </div>
          </div>
      })}
    </div>
    ): (

      <h1>NO PRODUCTS</h1>
    )}
    
    </>
  );
}
