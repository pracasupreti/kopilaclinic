import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 font-sans text-lg font-medium">
      <nav className="mt-2">
        <ul className="flex space-x-4 list-none gap-2 items-center justify-between">
          <li>
            <Link href="/">
              <img src="logo.svg" alt="Kopila clinic logo" width={308} height={80} className="h-16 w-auto" />
            </Link>
          </li>
          <li><Link href="/" className="text-pink-500 hover:text-green-400 cursor-pointer">Home</Link></li>
          <li><Link href="/About_Us" className="text-pink-500 hover:text-green-400 cursor-pointer">About</Link></li>
          <li><Link href="/Contact" className="text-pink-500 hover:text-green-400 cursor-pointer">Contact</Link></li>
          <li><Link href="/services" className="text-pink-500 hover:text-green-400 cursor-pointer">Services</Link></li>
          <li><Link href="/faqs" className="text-pink-500 hover:text-green-400 cursor-pointer">FAQs</Link></li>
          <li><Link href="/blog" className="text-pink-500 hover:text-green-400 cursor-pointer">Blog</Link></li>
          <li>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-green-400">
              Book Appointment
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
