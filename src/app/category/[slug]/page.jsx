'use client'
import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../../../utils/api'
import Productcard from '@/app/components/Productcard'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { Provider } from 'react-redux'
import store from '@/app/store/store'


const categories = ({params}) => {
  const slug = params.slug
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        // Fetch category data
        const categoryResponse = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`);
        setCategory(categoryResponse.data);

        // Fetch products data for the category
        const productsResponse = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCategoryAndProducts();
  }, [slug]);
  return (
   
    <div>
      <Provider store={store}>
      <Navbar/>
      <div className="w-full md:py-20 relative">
            {console.log(category)}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.[0]?.name}
                    </div>
                </div>

                {/* products grid start */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">

                {/* {products.map((prod)=>{
                  <Productcard key={prod?.id} data ={prod}/>

                })} */}
                {products?.map((product) => (
            
            <Productcard
              key={product?.id} // Ensure each Productcard has a unique key
              image={product?.image[0].url}
              name={product?.name}
              p={product?.subtitle}
              price={product?.original_price}
              discountedprice={product?.price}
              slug={product.slug}
              
            />
          ))}
                  
                  
                
            </div>

                
               
        </div>






    <Footer/>
    </Provider>
    </div>
  )
}

export default categories



