import React from 'react'
import Carousel1 from './Assets/Carousel-1.png'
import Carousel2 from './Assets/Carousel-2.png'
import Carousel3 from './Assets/Carousel-3.png'
import Carousel4 from './Assets/Carousel-4.png'
import Carousel5 from './Assets/Carousel-5.png'

export default function Carousel() {
  return (
    <div className='mt-5 pt-5'>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Carousel1} className="d-block w-100" alt="Carousel-1"/>
    </div>
    <div className="carousel-item">
      <img src={Carousel2} className="d-block w-100" alt="Carousel-2"/>
    </div>
    <div className="carousel-item">
      <img src={Carousel3} className="d-block w-100" alt="Carousel-3"/>
    </div>
    <div className="carousel-item">
      <img src={Carousel4} className="d-block w-100" alt="Carousel-4"/>
    </div>
    <div className="carousel-item">
      <img src={Carousel5} className="d-block w-100" alt="Carousel-5"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>
  )
}
