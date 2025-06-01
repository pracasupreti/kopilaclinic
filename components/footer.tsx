"use client"


import { Facebook, Twitter,Instagram, Youtube,  Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

  return (

    <footer className="bg-pink-500 text-white backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-8">
                    <img src="/logo.svg" alt="Kopila Clinic Logo" width={310} height={90} className=" h-16 w-auto m-2" />
                  </div>
                  <p className="text-white">
                    Welcome to Kopila Fertility and Womens Clinic,
                     your trusted partner in reproductive health and womens wellness in Damak, Nepal.
                  </p>
                  <div className="flex gap-4">
               {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={"text-white-600 hover:text-green-600 transition-colors"}
                target="_blank"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          </div>

                <div className="space-y-4 ml-0 md:ml-8 ">
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <nav className="flex flex-col gap-2">
                    <Link
                      href="/" className="text-white hover:text-green-600 transition-colors">
                      Home
                    </Link>
                    <Link
                      href="/gallery" className="text-white hover:text-green-600 transition-colors">
                      Gallery
                    </Link>
                    <Link
                      href="/blog" className="text-white hover:text-green-600 transition-colors">
                      Blog
                    </Link>
                    <Link
                      href="/team" className="text-white hover:text-green-600 transition-colors">
                      Team
                    </Link>
                    <Link
                      href="/testimonials" className="text-white hover:text-green-600 transition-colors">
                      Testimonials
                    </Link>
                  </nav>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Company</h3>
                  <nav className="flex flex-col gap-2">
                    <Link href="/about_Us" className="text-white hover:text-green-600 transition-colors">   
                      About Us
                    </Link>
                    <Link href="/contact" className="text-white hover:text-green-600 transition-colors"> 
                      Contact
                    </Link>
                    <Link href="/faqs" className="text-white hover:text-green-600 transition-colors"> 
                      Privacy Policy
                    </Link>
                  </nav>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact</h3>
                  <div className="space-y-2 text-white hover:text-green-600 transition-colors">
                    <p>Email: info@kopilaclinic.com.np</p>
                    <p>Phone: +977 970 905 5065</p>
                    <p>Address: Jaycess Chowk, Damak-6, Jhapa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10">
              <div className="container mx-auto px-4 py-6 text-center">
              <p className="text-white text-sm"> Copyright
                <span className="inline-flex items-center gap-1">
              </span>{" "}
              © {new Date().getFullYear()}.
                Kopila Fertility & Womens Clinic, Damak, Jhapa, Nepal. All Rights Reserved.{" "}
              </p>
              </div>
            </div>
          </footer>
  )
}
