import React from 'react'
import Post1 from './Assets/post-item1.jpg'
import Post2 from './Assets/post-item2.jpg'
import Post3 from './Assets/post-item3.jpg'
import Insta1 from './Assets/insta-item1.jpg'
import Insta2 from './Assets/insta-item2.jpg'
import Insta3 from './Assets/insta-item3.jpg'
import Insta4 from './Assets/insta-item4.jpg'
import Insta5 from './Assets/insta-item5.jpg'



export default function Blog() {
  return (
    <>
    <div>
     <h1 id='blog' className='heading'>LATEST POSTS</h1> 
    <div className='d-flex justify-content-center'>
    <div>
        <img className='post-img' src={Post1} alt="post 1" />
        <div className='caption-box'>
        <h4 className='post-date'>FEB 22, 2023 - GADGETS</h4>
        <h3>GET SOME COOL GADGETS IN 2023</h3>
        </div>
    </div>
    <div>
        <img className='post-img' src={Post2} alt="post 1" />
        <div className='caption-box'>
        <h4 className='post-date'>FEB 25, 2023 - TECHNOLOGY</h4>
        <h3>TECHNOLOGY HACK YOU WON'T GET</h3>
        </div>
    </div>
    <div>
        <img className='post-img' src={Post3} alt="post 1" />
        <div className='caption-box'>
        <h4 className='post-date'>FEB 22, 2023 - CAMERA</h4>
        <h3>TOP 10 SMALL CAMERA IN THE WORLD</h3>
        </div>
    </div>
    </div>
    <div className='container'>
      <h1 className='heading'>SHOP OUR INSTA</h1>
      <div className='text-center'>
        <img className='insta-img m-3' src={Insta1} alt="Insta pics" />
        <img className='insta-img m-3' src={Insta2} alt="Insta pics" />
        <img className='insta-img m-3' src={Insta3} alt="Insta pics" />
        <img className='insta-img m-3' src={Insta4} alt="Insta pics" />
        <img className='insta-img m-3' src={Insta5} alt="Insta pics" />
      </div>
    </div>
</div>
  </>
  )
}
