import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Link from 'next/link';
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '../../../utils/api';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const CartComponent = () => {
  const [loading,setLoading] = useState(false)
  const { cartItems } = useSelector((state) => state.cart);
  console.log('Cart Items:', cartItems); // Log cartItems to debug

  const subTotal = useMemo(()=>{
    return cartItems.reduce((total, val) => total + val.price,0)
  },[cartItems])
  
  const handlePayment= async()=>{
try {
  setLoading(true)
  const stripe = await stripePromise
  const res = await makePaymentRequest('/api/orders',{
    products:cartItems,
  })
  console.log('API Payload:', { products: cartItems });
  await stripe.redirectToCheckout({
    sessionId: res.stripeSession.id
  }) 
} catch (err) {
  setLoading(false)
  console.log(err)
  
}

  }
  
  
  const shipping = 70
  const total = subTotal+shipping;
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="h-[100%] xl:h-[100%] bg-gray-100 pt-20 font-[my-font]">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₹{subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">₹{shipping}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">₹{total}</p>
                  
                  <p className="text-sm text-gray-700"><div className="text-sm md:text-md py-5 border-t mt-5">
                                        The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                                    </div></p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={handlePayment}>
                Check out
               
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-[2] flex flex-col items-center pb-[10px] md:-mt-14 h-[100%] xl:h-[100%] bg-gray-100 pt-20 font-[my-font]">
          <img
            src="/emptycart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
            alt="Empty Cart"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default CartComponent;
