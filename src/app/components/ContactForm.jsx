"use client";
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';





const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdoqkwjq");
    if (state.succeeded) {
        return (
            <div class="w-full md:w-1/3 mx-auto">
  <div class="flex p-5 rounded-lg shadow bg-white">
	<div>
	  <svg class="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
	</div>
	<div class="ml-3">
	  <h2 class="font-semibold text-gray-800">Message Sent.</h2>
	  <p class="mt-2 text-sm text-gray-600 leading-relaxed">💌 Thank you for buzzing with the Fashion Hive! 🌟 We've received your response, and our hive is abuzz with excitement to connect with you. Please anticipate a message from one of our dedicated team members soon, who will reach out to you via email. Your fashion journey with us is about to take flight, and we can't wait to assist you in any way we can. Stay tuned for a personalized touch that reflects our commitment to exceptional service. We appreciate your patience and look forward to styling your experience with the Fashion Hive. 🛍️📧 #FashionHive #StayStylish #PersonalizedService</p>
            
      <Link href="/" className=" inline-flex mt-10">
                                        
                                        <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">Continue Shopping..</span>
                                        <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
                                            <svg className="h-3 w-3" aria-hidden="true" focusable="false" data-icon="chevron-right" role="img"  viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" /></svg>
                                        </span>
                                  
    </Link>
    
    </div>
    
  </div>
</div>
        );
    }
  
  
    return (
        <form onSubmit={handleSubmit}>
            <div class="flex justify-center items-center w-screen  bg-white sm:w-[200px]h-[300px]">
	
	<div class="container mx-auto my-4 px-4 lg:px-20">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div class="flex">
				<h1 class="font-bold uppercase text-5xl">Send us a <br /> message</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" 
            id='firstname'
            name='firstname'
            
            />

                <ValidationError 
                        prefix="Firstname" 
                        field="firstname"
                        errors={state.errors}
                    />
				
                
                
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" 
            id='lastname'
            name='lastname'
            
            />

                    <ValidationError 
                        prefix="Lastname" 
                        field="lastname"
                        errors={state.errors}
                    />



				
                
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
             placeholder="Email"
             id="email"
             type="email" 
             name="email" 
            
            />

                <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />



				
                
            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" 
            id="number"
            
            name="number"
            
            />

                    <ValidationError 
                        prefix="Number" 
                        field="number"
                        errors={state.errors}
                    />




        </div>
				<div class="my-4">
					<textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                     id="message"
                     name="message"
                    
                    ></textarea>

                    <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />



				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                      type="submit" disabled={state.submitting}>
            Send Message
          </button>
				</div>
			</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
				<div class="flex flex-col text-white">
					<h1 class="font-bold uppercase text-4xl my-4">Founder's Message</h1>
					<p class="text-gray-400">
          Dear Valued Customers,

I am delighted to extend a warm welcome to you on behalf of Visakha Consumer Products. As the founder, it brings me great joy to share the journey of our brand with you. At Visakha, our vision has always been to redefine the way we approach home hygiene, and this passion has been the driving force behind our commitment to excellence.

In founding Visakha Consumer Products, my goal was simple yet profound – to provide households with reliable, effective, and innovative disinfectant solutions. Our primary focus on machine liquids and detergents is a testament to our dedication to offering products that not only meet but exceed your expectations. Cleanliness is not just a choice; it's a way of life, and we believe in making that choice accessible to every home.

Our collection is a carefully curated array of products designed to cater to the diverse cleaning needs of your home. Whether it's the powerful efficacy of our machine liquids or the refreshing touch of our detergents, each item in our range is a result of extensive research, testing, and a genuine desire to enhance the well-being of your family.

Quality and assurance are non-negotiable principles at Visakha. We understand the trust you place in our brand, and we take this responsibility seriously. Rigorous quality control measures ensure that every product bearing the Visakha name is a symbol of reliability and efficacy.

Our commitment extends beyond the products themselves. We are committed to your satisfaction, transparency in our processes, and continuous improvement. Visakha Consumer Products is not just a brand; it's a promise to be your partner in creating a healthier and happier home.

Thank you for choosing Visakha Consumer Products. I look forward to serving you and being a part of your journey towards a cleaner and safer living space.
<br />
Warm regards,
<br />


Visakha Consumer Products
					</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl"></h2>
              <p class="text-gray-400"></p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-gray-400">Tel:9136531879</p>
              
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            
            <a href="/" target="_blank" rel="noreferrer" class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1">
              
              <FaInstagram size={20} />
            </a>
            <a href={`https://wa.me/9136531879/`} target="_blank" rel="noreferrer" class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1">
              
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
    
</div>
</form>
        
        
       
  )
}

export default ContactForm
