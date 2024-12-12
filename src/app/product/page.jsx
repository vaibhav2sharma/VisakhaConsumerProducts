
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Productcard from '../components/Productcard'
import ProductComponentShow from '../components/productcomponentshow'
import ProductComponentShowAgro from '../components/productcomponentshowagro'
import { Provider } from 'react-redux'
import store from '../store/store'


const Products = () => {
  return (
    <div className='font-[my-font]'>
      <Provider store={store}>
      <Navbar/>
    
      <ProductComponentShow/>
      <ProductComponentShowAgro />
      
      <Footer/>
      </Provider>
     
    </div>
  )
}

export default Products
