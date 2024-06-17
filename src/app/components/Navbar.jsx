"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

          
        </div>

        {/* Cart icon */}
        <div className="hidden md:flex items-center">
          <Link href="/cart">
            <div className="flex items-center gap-1 hover:text-gray-900 hover:underline duration-500">
              <CiShoppingCart className="text-2xl" />
              <span className="text-lg">Cart</span>
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

