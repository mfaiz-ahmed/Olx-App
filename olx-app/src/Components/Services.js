import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default function Services() {
  return (
    <div id='services' className='container'>
        <div>
        <h3><i className="fa-solid fa-cart-shopping icons me-3"></i>  FREE DELIVERY</h3>
        <p className='service-text'>Enjoy free delivery on every order, no minimum required!</p>
        </div>
        <div>
        <h3><i className="fa-solid fa-medal icons me-3"></i> QUALITY GUARANTEE</h3>
        <p className='service-text'>Experience the finest with our 100% Quality Guarantee on every purchase!</p>
        </div>
        <div>
        <h3><i className="fa-solid fa-tag icons me-3"></i> DAILY OFFERS</h3>
        <p className='service-text'>Don't miss out—grab amazing daily offers, updated every day!</p>
        </div>
        <div>
        <h3><i className="fa-solid fa-shield-halved icons me-3"></i> 100% SECURE PAYMENT</h3>
        <p className='service-text'>Shop with confidence: 100% secure payments guaranteed!</p>
        </div>
    </div>
  )
}
