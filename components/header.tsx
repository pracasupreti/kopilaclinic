"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes,FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-green-50  p-2 font-sans text-lg font-medium border-b-1 border-gray-500 shadow-md px-12">
      <nav className="mt-2">
        <ul className="flex list-none items-center gap-16 sm:gap-4">
            <Link href="/">
              <img src="logo.svg" alt="Kopila clinic logo" width={310} height={90} className="h-20 w-auto" />
            </Link>
          <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-pink-600 ">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`md:flex md:space-x-6 items-center ${isMenuOpen ? "fixed top-32 left-0 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 z-40" : "hidden"} md:static md:bg-transparent md:shadow-none md:p-0 md:flex-row md:space-y-0`}> 
          <div className="flex text-sm space-x-8 list-none gap-10 items-center justify-between flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 list-none gap-4 items-center justify-between">
          <li><Link href="/" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about_Us" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>About Us</Link></li>
          <li><Link href="/Services" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/faqs" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>FAQs</Link></li>
          <li><Link href="/blog" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/contact" className="text-primary hover:text-green-400 cursor-pointer font-semibold" onClick={closeMenu}>Contact Us</Link></li>
         </div>
         <div className='space-x-8  justify-between gap-16'>
           <li>
           <Link href="/appointment">
              <div className="group mt-8 ml-4">
              <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
               Book An Appointment
              <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
              </button>
              </div>
              </Link>
          </li>
          </div>
          </div>
        </ul>               
      </nav>
    </header>
  );
}