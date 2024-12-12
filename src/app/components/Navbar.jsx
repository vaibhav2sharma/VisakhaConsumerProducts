"use client"


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';
import { fetchDataFromApi } from '../../../utils/api';
import { useSelector } from 'react-redux';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

// 
 const {cartItems} = useSelector((state)=>state.cart)   
  // Fetch categories from backend
  useEffect(() => {
  

    fetchCategories();
  }, []);


  

  const fetchCategories = async()=>{

    const {data} = await fetchDataFromApi('/api/categories?populate=*')
    setCategories(data)
  }
  console.log(categories)



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  return (
    <div className="bg-[#F1F1F1] border-b-2 border-gray-100 text-lg md:text-black sticky top-0 z-20 transition-transform duration-300">
      <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <img src="/visakhalogo2.png" alt="Logo" className="w-8 h-12 md:w-10 md:h-16" />
          </div>
        </Link>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/product">Products</NavLink>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowCategoriesDropdown(true)}
              onMouseLeave={() => setShowCategoriesDropdown(false)}
              className="text-lg hover:underline transition-all duration-1000"
            >
              Categories
            </button>
            {showCategoriesDropdown && (
              <div className="absolute z-10 bg-white shadow-lg mt-2 py-2 rounded-lg">
                {categories.map(category => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{category.name}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cart icon */}
        <div className="hidden md:flex items-center">
          <Link href="/cart">
            <div className="flex items-center gap-1 hover:text-gray-900 hover:underline duration-500">
              <CiShoppingCart className="text-2xl " />
              <span className=' bg-red-600 px-2 rounded-[50%]'>{cartItems.length}</span>
              {/* <span className="text-lg"></span> */}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 bg-gray-100">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
          <MobileNavLink href="/product">Products</MobileNavLink>

          {/* Mobile Categories Dropdown */}
          <div className="mt-2">
            <button onClick={toggleCategoriesDropdown} className="w-full py-2 text-left hover:bg-gray-200 rounded">
              Categories
            </button>
            {showCategoriesDropdown && (
              <div className="ml-4">
                {categories.map(category => (
                  <Link key={category.id} href={`/category/${category.slug}`}>
                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{category.name}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <MobileNavLink href="/cart">Cart</MobileNavLink>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <div className="text-lg hover:underline transition-all duration-1000">{children}</div>
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link href={href}>
    <div className="block py-2 text-lg hover:bg-gray-200 rounded">{children}</div>
  </Link>
);

export default Navbar;

