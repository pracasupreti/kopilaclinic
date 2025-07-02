"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const NAV_PAGES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faqs" },  
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-green-50 shadow-md border-b border-gray-300 px-4 lg:px-12 py-8 top-0 z-50"> {/* sticky */}
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        {/* Logo */} {/* Logo */}
        <Link href="/" className="flex shrink-0">
          <Image
            src="/logo.svg"
            alt="Kopila clinic logo"
            width={310}
            height={90}
            className="h-16 lg:h-20 w-auto"
            priority
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="bg-primary text-white p-2 rounded-lg focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:static top-0 left-0 h-full w-4/5 lg:w-auto lg:h-auto lg:translate-x-0 transform transition-transform duration-300 ease-in-out bg-white md:bg-transparent z-40 flex flex-col md:flex-row md:items-center md:space-x-10 px-6 pt-24 pb-6 md:p-0 shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-10 text-sm lg:text-base font-semibold text-primary">
            {NAV_PAGES.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.path}
                  onClick={closeMenu}
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Appointment Button */}
          <div className="mt-6 lg:mt-0 lg:ml-6">
            <Link href="/appointment" onClick={closeMenu}>
              <button className="bg-secondary text-white font-semibold px-4 py-3 rounded-full shadow-md hover:scale-105 hover:bg-primary active:scale-95 transition-all text-sm lg:text-sm flex items-center group">
                Book An Appointment
                <ArrowRight className="ml-2 h-6 w-6 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-0" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
