"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Provider } from 'react-redux'
import store from '../store/store'

const Contact = () => {
  return (
    <div className='font-[my-font]  '>
      <Provider store={store}>
      <Navbar/>
      <ContactForm/>
      <Footer/>
      </Provider>
    </div>
  )
}

export default Contact
