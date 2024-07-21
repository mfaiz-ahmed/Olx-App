import React, { useState } from 'react'
import {addProduct } from '../Config/Firebase'
import exclamationMark from '../Components/Assets/Exclamation Mark.avif'
import tickMark from '../Components/Assets/Tick Mark.jpg'
import 'animate.css';
import Swal from 'sweetalert2'


export default function AddProduct() {

    const [title , setTitle] = useState()
    const [brand , setBrand] = useState()
    const [category , setCategory] = useState()
    const [details , setDetails] = useState()
    const [image , setImage] = useState()
    const [price , setPrice] = useState()

    const postProduct = async ()=>{
      try{
        await addProduct({title , brand , category , details , image , price})
        Swal.fire({
          imageUrl: tickMark,
          imageHeight: 200,
          imageAlt: "Tick Image",
          title: "Product Posted Successfully!",
          showClass: {
            popup: `
              animate__animated
              animate__bounceInDown
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__bounceOutDown
              animate__faster
            `
          }
        });
      }
      catch(e){
        Swal.fire({
          imageUrl: exclamationMark,
          imageHeight: 200,
          imageAlt: "Exclamation Image",
          title: e.message,
          showClass: {
            popup: `
              animate__animated
              animate__bounceInDown
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__bounceOutDown
              animate__faster
            `
          }
        });
      };
    }

  return (
    <>
    <div>
    <h1 className='heading'>POST</h1>
    <div className='addproduct-box'>
        <input onChange={e=> setTitle(e.target.value)} className='input' type="text" placeholder='Enter Product Title...' />
        <input onChange={e=> setBrand(e.target.value)} className='input' type="text" placeholder='Enter Product Brand...' />
        <input onChange={e=> setCategory(e.target.value)} className='input' type="text" placeholder='Enter Product Category...' />
        <textarea onChange={e=> setDetails(e.target.value)} className='input' placeholder='Enter Product Details'></textarea>
        <span className='input'>Enter Product Image...<input onChange={e=> setImage(e.target.files[0])} type="file" /></span>
        <input onChange={e=> setPrice(e.target.value)} className='input' type="number" placeholder='Enter Product Price...' />
        <button onClick={postProduct} className='button2'>POST PRODUCT</button>
      </div>
    </div> 
    </>
  )
}
