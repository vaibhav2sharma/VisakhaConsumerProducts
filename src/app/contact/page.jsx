"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='font-[my-font]  '>
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
