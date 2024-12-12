'use client'
import Eyes from '@/app/components/Eyes'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Productdesc from '@/app/components/Productdesc';
import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../../../utils/api';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/app/store/store';




const Products = ({params}) => {
  const slug = params.slug
  console.log(slug)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        

        // Fetch products data for the category
        const productsResponse = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$eq]=${slug}`);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [slug]);
  
  return (
    <div className=' w-full bg-[#E8E8E8] font-[my-font] '>
      <Provider store={store}>
      <Navbar className='font-[my-font]'/>

      <div className='  md:px-[40px] md:py-[50px] md:rounded-[40px] '>
      <Productdesc slug ={slug} data={products} />
      </div>


      <Footer/>
      </Provider>
       
    </div>
  )
}

export default Products
