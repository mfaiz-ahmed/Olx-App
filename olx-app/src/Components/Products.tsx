import React from 'react'




export default function Products() {
    const products = [
        {
            id:1,
            image: './ProductImages/Product-1.webp',
            brand: 'Apple',
            model: 'Iphone 15 Pro Max',
            price: 525000
        },
        {
            id:2,
            image: './ProductImages/Product-2.webp',
            brand: 'Sony',
            model: 'Playstation 4 Slim',
            price: 61500
        },
        {
            id:3,
            image: './ProductImages/Product-3.webp',
            brand: 'Samsung',
            model: '43 inch LED Smart TV',
            price: 136900
        },
        {
            id:4,
            image: './ProductImages/Product-4.png',
            brand: 'Zero Lifestyle',
            model: 'Ignite Smart Watch',
            price: 7000
        },
        {
            id:5,
            image: './ProductImages/Product-5.webp',
            brand: 'Lenovo',
            model: 'Livepods XT88',
            price: 3000
        },
        {
            id:6,
            image: './ProductImages/Product-6.webp',
            brand: 'Samsung Galaxy',
            model: 'A15',
            price: 49500
        },
        {
            id:7,
            image: './ProductImages/Product-7.webp',
            brand: 'Sony',
            model: 'PS4 Controller',
            price: 3700
        },
        {
            id:8,
            image: './ProductImages/Product-8.webp',
            brand: 'HP',
            model: 'Chromebook G8',
            price: 10700
        },
        {
            id:9,
            image: './ProductImages/Product-9.webp',
            brand: 'Asus',
            model: '24" LED Monitor',
            price: 17000
        },
        {
            id:10,
            image: './ProductImages/Product-10.webp',
            brand: 'Lenovo',
            model: 'Wireless Headphone',
            price: 4400
        },
        {
            id:11,
            image: './ProductImages/Product-11.webp',
            brand: 'HP',
            model: 'RGB Keyboard',
            price: 4300
        },
        {
            id:12,
            image: './ProductImages/Product-12.webp',
            brand: 'Samsung',
            model: 'Galaxy Buds 2',
            price: 2900 
        },
    ]


  return (
    <>
         <h1 className='heading'>PRODUCTS</h1>
     <div id='products' className='mt-5 pt-5 container d-flex flex-wrap justify-content-center gap-5'>
        {products.map((x:any , i:number)=>{
            return <>
            <div key={i} className='border shadow box'>
                    <img width={'100%'} src={x.image} alt="Product Image" />
                <p><span className="fw-bolder">Brand:</span> {x.brand}</p>
                      <p><span className="fw-bolder">Model:</span> {x.model}</p>
                      <p><span className="fw-bolder">Price:</span> Rs. {x.price} </p>
            </div>
            </>
        })}
        </div> 
    </>
  )
}
