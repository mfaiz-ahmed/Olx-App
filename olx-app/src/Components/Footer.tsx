import React from 'react'
import MainLogo from './Assets/main-logo.png'

export default function Footer() {
  return (
    <>
    <div className='container mb-5 pb-5'>
    <div className='mt-5 pt-5 ms-5 d-flex'>
      <div className='basis'>
        <img src={MainLogo} alt="Logo" />
        <h3 className='mt-5'>© 2024 MiniStore. Your destination for unique, quality finds.</h3>
<div className='d-flex mt-4'>
    <p><i className="fa-brands fa-facebook-f logos"></i></p>
    <p><i className="fa-brands fa-instagram logos"></i></p>
    <p><i className="fa-brands fa-twitter logos"></i></p>
    <p><i className="fa-brands fa-linkedin logos"></i></p>
    <p><i className="fa-brands fa-youtube logos"></i></p>
</div>
      </div>
      <div className='basis'>
        <h3 className='ms-4'>QUICK LINKS </h3>
        <ul className='mt-5'>
                <li className='fs-4'><a className='nav-links' href="#">HOME</a></li>
                <li className='mt-4 fs-4'><a className='nav-links' href="#services">SERVICES</a></li>
                <li className='mt-4 fs-4'><a className='nav-links' href="#products">PRODUCTS</a></li>
                <li className='mt-4 fs-4'><a className='nav-links' href="#sale">SALE</a></li>
                <li className='mt-4 fs-4'><a className='nav-links' href="#blog">BLOG</a></li>
            </ul>
      </div>
      <div className='basis'>
        <h3 className='ms-4'>HELP & INFO HELP</h3>
        <ul className='mt-5'>
            <li className='fs-4 hover'>TRACK YOUR ORDER</li>
            <li className='mt-4 fs-4 hover'>RETURN POLICY</li>
            <li className='mt-4 fs-4 hover'>SHIPPING + DELIVERY</li>
            <li className='mt-4 fs-4 hover'>CONTACT US</li>
            <li className='mt-4 fs-4 hover'>FAQS</li>
            </ul>
      </div>
    <div>
      <h3>CONTACT US</h3>
      <h3 className='mt-5 color'>Do you have any queries or suggestions?</h3>
      <h2 className='mt-3 hover'><i className="fa-solid fa-envelope"></i> yourinfo@gmail.com</h2>
      <h3 className='mt-5 color'>If you need support? Just give us a call.</h3>
      <h2 className='mt-3 hover'><i className="fa-solid fa-phone"></i> +92 123 456 7890</h2>
    </div>
    </div>
    </div>
    <hr />
    <div className='container d-flex justify-content-between mb-5 align-items-center'>
      <div>
        <h2>We ship with: <i className="fa-brands fa-dhl logos-2"></i> <i className="fa-brands fa-fedex logos-2"></i> <i className="fa-brands fa-ups logos-2"></i></h2>
      </div>
      <div>
        <h2>Payment Methods: <i className="fa-brands fa-cc-visa logos-2"></i> <i className="fa-brands fa-cc-paypal logos-2"></i> <i className="fa-brands fa-cc-mastercard logos-2"></i></h2>
      </div>
    </div>
    </>
  )
}
