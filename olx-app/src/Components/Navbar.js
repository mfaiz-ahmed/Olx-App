import React, { useEffect, useState } from 'react'
import mainLogo from './Assets/main-logo.png'
import {Link} from 'react-router-dom'
import { auth , onAuthStateChanged } from '../Config/Firebase'
import { useDispatch, useSelector} from 'react-redux'
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
        const uid = user.uid;
      } else {
      }
    });
  } , [])

const dispatch = useDispatch()

const cart = useSelector(state =>state.cartStore.cart)



  return (
    <>
      <nav>
        <ul className='sideBar'>
          <li onClick={hideSideBar}><i className="fa-solid fa-x"></i></li>
          <li>{users?.email}</li>
          <li><Link to={'/HomePage'}>HOME</Link></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#sale">SALE</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><Link to={'/AddProductPage'}>POST</Link></li>
          <li onClick={()=>dispatch(setTheme('black'))}>DARK</li>
          <li onClick={()=>dispatch(setTheme('white'))}>LIGHT</li>
        </ul>
        <ul>
          <li><img src={mainLogo} alt="Logo" /></li>
          <li className='hideOnMobile'><Link to={'/HomePage'}>HOME</Link></li>
          <li className='hideOnMobile'><a href="#services">SERVICES</a></li>
          <li className='hideOnMobile'><a href="#products">PRODUCTS</a></li>
          <li className='hideOnMobile'><a href="#sale">SALE</a></li>
          <li className='hideOnMobile'><a href="#blog">BLOG</a></li>
          <li className='hideOnMobile'><Link to={'/AddProductPage'}>POST</Link></li>
          <li className='hideOnMobile dark' onClick={()=>dispatch(setTheme('black'))}>DARK</li>
          <li className='hideOnMobile' onClick={()=>dispatch(setTheme('white'))}>LIGHT</li>
          <li><i className="fa-solid fa-cart-shopping"></i> {cart.length}</li>         
          <li className='menuButton' onClick={showSideBar}><i className="fa-solid fa-bars"></i></li>
        </ul>
      </nav>
    </>
  )
}


