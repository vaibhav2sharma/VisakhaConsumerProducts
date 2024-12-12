import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart, updateCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = ({data}) => {
  console.log(data)
    const p = data;
const dispatch = useDispatch()
  const updateCartItem =(e,key)=>{

    let payload ={
        key,
        val: key ==="quantity" ? parseInt(e.target.value):"",
        id:data.id
    }
    dispatch(updateCart(payload))

  }
  
  console.log(p)
    return (
    // <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    //       <img src={p?.image?.data[0]?.attributes.url} alt="product-image" class="w-full rounded-lg sm:w-40" />
    //       <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
    //         <div class="mt-5 sm:mt-0">
    //           <h2 class="text-lg font-bold text-gray-900">{p.name}</h2>
    //           <p class="mt-1 text-xs text-gray-700">{}</p>
    //         </div>
    //         <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
    //           <div class="flex items-center border-gray-100">
    //             <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
    //             <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
    //             <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
    //           </div>
    //           <div class="flex items-center space-x-4">
    //             <p class="text-sm">MRP: ₹{p.price}</p>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
    //               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

<div className="flex py-5 gap-3 md:gap-5 border-b justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img
                    src={p?.image[0]?.url}
                    alt={p.name}
                    width={120}
                    height={120}
                />
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p.name}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#8377;{p.price}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {p.subtitle}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                               onChange={(e)=>updateCartItem(e,"quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() =>
                            dispatch(removeFromCart({ id: data.id }))
                        }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>




  )
}

export default CartItem
