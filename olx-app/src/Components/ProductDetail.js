import React, { useEffect, useState } from 'react'
import { getDoc , doc , db } from '../Config/Firebase'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/CartSlice'

export default function ProductDetail() {
  
  const params = useParams()
  const [product , setProduct] = useState({})



  useEffect(()=>{
    const getProductData = async ()=>{
      const singleProduct = doc(db , 'products' , params.id)
      const result = await getDoc(singleProduct)
      if(result){
        setProduct(result.data())
      }
      else{
        console.log('No Data Found');
      }
    }
    getProductData()
  } , [params.id])
  

const dispatch = useDispatch()





  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
    <div key={params.id} className="container d-flex mt-5 p-5 border shadow">
      <div>
        <img className="border shadow p-4" width={500} src={product.image} alt="Product Image" />
      </div>
      <div className="ms-5">
        <h1><span className='fw-bolder'>Brand:</span> {product.brand}</h1>
        <h1 className='mt-5'><span className='fw-bolder'>Title:</span> {product.title}</h1>
        <h1 className="mt-5"><span className='fw-bolder'>Category:</span> {product.category}</h1>
        <h2 className="my-5 me-5"><span className='fw-bolder'>Details:</span> {product.details}</h2>
        <h2 className="fw-bolder">Price: Rs. {product.price}</h2>
        <button onClick={()=>dispatch(addToCart(product(params.id)))} className='button3'>ADD TO CART</button>
        <div className="text-center">
        </div> 
        </div>
    </div>
    
    </div>
  )
}
