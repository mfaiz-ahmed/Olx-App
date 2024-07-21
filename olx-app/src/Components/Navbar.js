import React from 'react'
import mainLogo from './Assets/main-logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  
  const showSideBar = ()=>{
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
  }

  const hideSideBar = ()=>{
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
  }

  return (
    <>
      <nav>
        <ul className='sideBar'>
          <li onClick={hideSideBar}><a href="#"><i className="fa-solid fa-x"></i></a></li>
          <li><Link to={'/'}>HOME</Link></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">SALE</a></li>
          <li><a href="#">BLOG</a></li>
          <li><Link to={'/LoginPage'}>LOGIN</Link></li>
        </ul>
        <ul>
          <li><img src={mainLogo} alt="Logo" /></li>
          <li className='hideOnMobile'><Link to={'/'}>HOME</Link></li>
          <li className='hideOnMobile'><a href="#">SERVICES</a></li>
          <li className='hideOnMobile'><a href="#">PRODUCTS</a></li>
          <li className='hideOnMobile'><a href="#">SALE</a></li>
          <li className='hideOnMobile'><a href="#">BLOG</a></li>
          <li className='hideOnMobile'><Link to={'/LoginPage'}>LOGIN</Link></li>
          <li className='hideOnMobile'><Link to={'/AddProductPage'}>POST</Link></li>
          <li className='menuButton' onClick={showSideBar}><a href="#"><i className="fa-solid fa-bars"></i></a></li>
        </ul>
      </nav>
    </>
  )
}

