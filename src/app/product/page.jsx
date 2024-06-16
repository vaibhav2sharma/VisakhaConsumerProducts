
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Productcard from '../components/Productcard'
import ProductComponentShow from '../components/productcomponentshow'
import ProductComponentShowAgro from '../components/productcomponentshowagro'


const Products = () => {
  return (
    <div className='font-[my-font]'>
      <Navbar/>
      <ProductComponentShow/>
      <ProductComponentShowAgro />
      
      <Footer/>
    </div>
  )
}

export default Products
