import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup  from '../components/Authentication/Signup'
import Header from '../components/header/header'
import Home from '../components/user/home/home'
import AdminHome from '../components/admin/adminHome/adminHome'
import ProductDetails from '../components/user/item/item'
import Payment from '../components/user/payments'
import MYCart from '../components/user/my-cart'
import Signin from '../components/Authentication/Signin'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Signin/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='product' element={<ProductDetails/>}/>
        <Route path ='admin' element={<AdminHome/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path ='cart' element={<MYCart/>}/>
    

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router