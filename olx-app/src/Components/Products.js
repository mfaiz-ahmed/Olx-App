import React, { useEffect, useState } from 'react'
import { db , getDocs , collection } from '../Config/Firebase'
import { doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'



export default function Products() {

    const navigate = useNavigate()
    const [products , setProducts] = useState([])


    useEffect(()=>{
        const getData = async ()=>{
            const getProducts = await getDocs(collection(db , 'products'))
            const productsData = []
            getProducts.forEach((doc)=>{
                console.log('Data aagaya' , doc.data());
                productsData.push({id: doc.id , ...doc.data()})
            })
            setProducts(productsData)
        }
        getData()
        
    } , [])

  return (
    <div id='products'>
    <h1 id='products' className='heading'>PRODUCTS</h1>
     <div className='mt-5 pt-5 container d-flex flex-wrap justify-content-center gap-5'>
        {products.map((item , id)=>{
            return (
                <div key={id    } className='border shadow box'>
                    <img width={'100%'} src={item.image} alt="Product Image" />
                <p><span className="fw-bolder">Brand:</span> {item.brand}</p>
                      <p><span className="fw-bolder">Model:</span> {item.model}</p>
                      <p><span className="fw-bolder">Price:</span> Rs. {item.price} </p>
            </div>
            )
        })}
        
        </div> 
        </div>

  )
}
