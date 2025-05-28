// components/Footer.tsx
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-oklch(59.2% 0.249 0.584) text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <img src="/logo.png" alt="Kopila Clinic Logo" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed">
            Kopila Clinic provides comprehensive medical services with compassion and commitment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-green-300" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-green-300" />
              <a href="tel:+977123456789">+977 123456789</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-green-300" />
              <a href="mailto:info@kopilaclinic.com.np">info@kopilaclinic.com.np</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/80">
        <p>&copy; {new Date().getFullYear()} Kopila Clinic. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-green-300">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
