import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-raspberry text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold mb-4">KOPILA</h2>
          <p>
            Welcome to Kopila Fertility and Womens Clinic, your trusted partner in reproductive health and women’s wellness in Damak, Nepal.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Social Media</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><FaFacebookF /> <a href="#" className="hover:underline">Facebook</a></li>
            <li className="flex items-center gap-2"><FaInstagram /> <a href="#" className="hover:underline">Instagram</a></li>
            <li className="flex items-center gap-2"><FaYoutube /> <a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>Jaycess Chowk<br />Damak-6, Jhapa</p>
          <p className="mt-2"><a href="mailto:info@kopilaclinic.com.np" className="hover:underline">info@kopilaclinic.com.np</a></p>
          <p className="mt-1 flex items-center gap-2"><FaPhoneAlt /> +977 970 905 5065</p>
          <div className="mt-2">
            <a href="https://wa.me/9779709055065" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} className="text-green-400 hover:text-green-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white mt-8">
        &copy; 2025 Kopila Fertility & Women’s Clinic, Damak, Jhapa, Nepal. All Rights Reserved.
      </div>
    </footer>
  );
}
