import React, { useEffect, useState } from 'react'
import mainLogo from './Assets/main-logo.png'
import {Link} from 'react-router-dom'
import { auth , onAuthStateChanged } from '../Config/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../Store/ThemeSlice'


export default function Navbar() {
  
  const showSideBar = ()=>{
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
  }

  const hideSideBar = ()=>{
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'
  }

  const [users , setUsers] = useState()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUsers(user)
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  } , [])

const dispatch = useDispatch()
const cart = useSelector(state =>state.cart)

  return (
    <>
      <nav>
        <ul className='sideBar'>
          <li onClick={hideSideBar}><a href="#"><i className="fa-solid fa-x"></i></a></li>
          <li><a href="#blog">{users?.email}</a></li>
          <li><Link to={'/HomePage'}>HOME</Link></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#sale">SALE</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><Link to={'/AddProductPage'}>POST</Link></li>
        </ul>
        <ul>
          <li><img src={mainLogo} alt="Logo" /></li>
          <li className='hideOnMobile'><Link to={'/HomePage'}>HOME</Link></li>
          <li className='hideOnMobile'><a href="#services">SERVICES</a></li>
          <li className='hideOnMobile'><a href="#products">PRODUCTS</a></li>
          <li className='hideOnMobile'><a href="#sale">SALE</a></li>
          <li className='hideOnMobile'><a href="#blog">BLOG</a></li>
          <li className='hideOnMobile'><Link to={'/AddProductPage'}>POST</Link></li>
          <li onClick={()=>dispatch(setTheme('black'))}><a href='#'>DARK</a></li>
          <li onClick={()=>dispatch(setTheme('white'))}><a href='#'>LIGHT</a></li>
          <li><a href='#'><i class="fa-solid fa-cart-shopping"></i> <span className='itemsNumber'>{cart.length}</span></a></li>
          <li className='hideOnMobile'><a href="#">{users?.email}</a></li>
          <li className='menuButton' onClick={showSideBar}><a href="#"><i className="fa-solid fa-bars"></i></a></li>
        </ul>
      </nav>
    </>
  )
}

