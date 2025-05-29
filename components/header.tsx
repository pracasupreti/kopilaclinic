"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes,FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-green-50  p-6 font-sans text-lg font-medium border-b-2 border-pink-500 shadow-md">
      <nav className="mt-2">
        <ul className="flex space-x-4 list-none gap-2 items-center justify-between">
            <Link href="/">
              <img src="logo.svg" alt="Kopila clinic logo" width={310} height={90} className="h-20 w-auto" />
            </Link>
          <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pink-600 ">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`md:flex md:space-x-6 items-center ${isMenuOpen ? "fixed top-32 left-0 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 z-40" : "hidden"} md:static md:bg-transparent md:shadow-none md:p-0 md:flex-row md:space-y-0`}> 
          <div className="flex space-x-4 list-none gap-4 items-center justify-between flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 list-none gap-4 items-center justify-between">
          <li><Link href="/" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about_Us" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>About Us</Link></li>
          <li><Link href="/services" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/faqs" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>FAQs</Link></li>
          <li><Link href="/blog" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/contact" className="text-pink-500 hover:text-green-400 cursor-pointer font-bold" onClick={closeMenu}>Contact Us</Link></li>
          </div>
          <li>
          <button className="flex items-center space-x-6 bg-green-600 relative overflow-hidden text-white px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
         <Link href="/appointment" className="relative z-10 font-bold mr-12" onClick={closeMenu}>Book An Appointment</Link>
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-pink-600 rounded-full p-2 mr-4 transition-transform duration-300 ease-in-out hover:translate-x-2 hover:scale-110 hover:bg-green-500">
              <FaArrowRight size={20} />
            </span>
         </button>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
