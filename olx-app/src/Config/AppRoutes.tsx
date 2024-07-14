import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Components/Products'
import ForgotPassword from '../Components/ForgotPassword'


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<HomePage/>}/>
      <Route path='productsPage' element={<Products/>}/>
      <Route path='ForgotPasswordPage' element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}
