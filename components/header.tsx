"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

// List of navigation pages
const NAV_PAGES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about_Us" },
  { name: "Services", path: "/Services" },
  { name: "FAQs", path: "/faqs" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-green-50 shadow-md border-b border-gray-300 px-4 md:px-12 py-7  top-0 z-50"> {/* sticky */}
      <nav className="flex items-center justify-between">
        {/* Logo */}
       <Link href="/" className="flex shrink-0">
              <Image src="logo.svg" alt="Kopila clinic logo" width={310} height={90} className="h-20 w-auto" />
            </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-pink-600 focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:space-x-8 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-40 shadow-md md:shadow-none p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-sm md:text-base font-semibold text-primary">
            {NAV_PAGES.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.path}
                  onClick={closeMenu}
                  className="hover:text-green-500 transition-colors duration-200"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Appointment Button */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <Link href="/appointment" onClick={closeMenu}>
              <button className="bg-secondary text-white font-semibold px-4 py-3 rounded-full shadow-md hover:scale-105 hover:bg-primary active:scale-95 transition-all text-sm md:text-sm flex items-center group">
                Book An Appointment
                <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}


