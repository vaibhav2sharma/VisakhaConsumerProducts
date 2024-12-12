'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import CartComponent from '../components/CartComponent'
import Footer from '../components/Footer'
import { Provider } from 'react-redux'
import store from '../store/store'

const Cart = () => {
  return (
        <div className='font-[my-font]'>
       <Provider store={store}>
        <Navbar/>
        <CartComponent/>
        <Footer/>
        </Provider>

        </div>
  )
}

export default Cart
