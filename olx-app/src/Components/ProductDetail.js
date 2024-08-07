import React, { useEffect, useState } from 'react'
import { getDoc , doc , db } from '../Config/Firebase'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Store/CartSlice'

export default function ProductDetail() {
  
  const params = useParams()
  const [model , setModel] = useState({})


  useEffect(()=>{
    const getProductData = async ()=>{
      const singleProduct = doc(db , 'products' , params.id)
      const result = await getDoc(singleProduct)
      if(result){
        setModel(result.data())
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
    <div className="container d-flex mt-5 p-5 border shadow">
      <div>
        <img className="border shadow p-4" width={500} src={model.image} alt="Product Image" />
      </div>
      <div className="ms-5">
        <h1><span className='fw-bolder'>Brand:</span> {model.brand}</h1>
        <h1 className='mt-5'><span className='fw-bolder'>Title:</span> {model.title}</h1>
        <h1 className="mt-5"><span className='fw-bolder'>Category:</span> {model.category}</h1>
        <h2 className="my-5"><span className='fw-bolder'>Details:</span> {model.details}</h2>
        <h2 className="fw-bolder">Price: Rs. {model.price}</h2>
        <button onClick={()=>dispatch(addToCart(model))} className='button3'>ADD TO CART</button>
        <div className="text-center">
        </div>
        </div>
    </div>
    
    </div>
  )
}
