"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./globals.css";
import { ArrowRight,  Star, Baby, Heart, Stethoscope, Phone, Clock  } from "lucide-react";
import { MdMedicalServices, } from "react-icons/md";
import { FaArrowRight, FaBaby, FaPlayCircle } from "react-icons/fa";


export default function page() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center h-full">
              {/* Decorative elements */}
              <div className="absolute top-12 -left-10 w-20 h-20 bg-blue-200 opacity-30 animate-zoominout" style={{ clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)' }}></div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-pink-700 mb-6 leading-tight drop-shadow-lg">
                Fertility <span className="text-green-600">and</span> <br/> <span className="text-pink-700">Women's Clinic</span>
              </h1>

              <p className="text-base  text-gray-500 mb-8">
                The clinic specializes in infertility treatment, intrauterine insemination (IUI),
                 antenatal care, and gynecological services.
              </p>

              <Link href="/appointment">
                <button className="bg-green-600 relative overflow-hidden text-white px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8">
                  Book An Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

              {/* Google Rating */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="text-pink-500 font-semibold mr-2">Google Rating</span>
                  <span className="text-2xl font-bold text-gray-900">4.7</span>
                  <div className="flex ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-pink-500 text-sm">Based On Public Reviews</span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative flex justify-center items-center">
              <div className="absolute top-2 left-24 w-20 h-20 bg-blue-600 opacity-50 animate-zoomin" style={{ clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)' }}></div>
              {/* Main Hero Image */}
              <div className="relative w-full max-w-md mx-auto">
                <img src="/hero-img.png" alt="Mother and child" className="w-full h-auto"  style={{minHeight:'400px'}} />
                
              <div className="absolute bottom-70 left-10 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="baby-stroller.svg" alt="" />
              </div>
              <div className="absolute bottom-100 left-100 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="baby.svg" alt="" />
              </div>
               <div className="absolute bottom-10 right-4 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="icon-hero-theeth-3.svg" alt="" />
              </div>
                {/* Doctor Profile Card */}
                <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-lg flex items-center p-2 space-x-3  max-w-full animate-bounce">
                  <img
                    src="/DrSita.jpg?height=80&width=60"
                    alt="Dr. Sita Rai"
                    className="w-20 h-30 rounded-xl object-cover border-1 border-pink-400"
                  />
                  <div>
                    <h3 className="font-semibold text-pink-500">Dr. Sita Rai</h3>
                    <p className="text-sm text-green-600">Gynaecologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Consult A Doctor */}
            <div className="flex items-center space-x-4">
              <div className=" bg-opacity-20 rounded-full p-3">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Consult A Doctor</h3>
                <p className="text-pink-100">Call on : (+977) 970 905 5065</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <div className="bg-opacity-20 rounded-full p-3">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Opening Hours</h3>
                <p className="text-pink-100">Sunday to Friday 07:00AM to 07:00PM</p>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="flex justify-center md:justify-end">
              <Link href="/appointment">
                <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 flex items-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  Book An Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16 max-w-7xl mx-auto">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex flex-col gap-4">
        <div className="rounded-2xl overflow-hidden w-2/3 self-start">
          <Image
            src="/baby1.jpg"
            alt="Baby smiling"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="rounded-2xl overflow-hidden w-4/5 self-end">
          <Image
            src="/baby2.jpg"
            alt="Happy baby"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Experience Badge */}
        <div className="absolute top-10 left-24 bg-white w-20 h-20 rounded-full border-[6px] border-blue-500 text-blue-500 font-bold text-[10px] flex items-center justify-center text-center leading-tight animate-pulse shadow-md">
          <img src="about-experiance-circle.png" alt="" />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ ABOUT US</p>
        <h2 className="text-4xl font-extrabold leading-snug">
          <span className="text-green-600">Fertility Clinic</span>{' '}
          <span className="text-pink-600">in Damak, Nepal</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base">
          Welcome to Kopila Fertility and womens Clinic, your trusted partner in
          reproductive health and womens wellness in Damak, Nepal.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Expert Team
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Personalized Care
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> State-Of-The-Art Facility
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-xl">✔</span> Comprehensive Support
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 hover:bg-green-700 transition">
          Read More
          <span className="text-xl">↗</span>
        </button>
      </div>
    </section>

     {/* Services Section */}
       {/* <section className="bg-[#f0f8ff] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ OUR SERVICES</p>
        <h2 className="text-4xl font-extrabold text-green-600">
          Fertility & Gyne <span className="text-pink-600">Services for You.</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Dedication of Providing Professional Healthcare Services.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-lg font-bold text-pink-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <button className="text-green-600 font-semibold text-sm flex items-center gap-1">
                Read More <span className="text-lg">↗</span>
              </button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe in using the latest technology and techniques to ensure the best outcomes for our patients.
        </p>

        <button className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 hover:bg-green-700 transition">
          View All Services <span className="text-xl">↗</span>
        </button>
      </div>
    </section> */}

    { /* Visit Us Section */ }
    <section className="relative w-full overflow-hidden bg-white min-h-screen">
      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 rounded-full opacity-50 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 bg-blue-300 rounded-full opacity-50 transform -rotate-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 md:pt-32 md:pb-20">
      
        <div className="relative w-11/12 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/images/mother-child-bg.jpg" 
              alt="Mother and child"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="brightness-[0.7] contrast-[1.1]" 
            />
            <div className="absolute inset-0 bg-healofy-pink opacity-60"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center min-h-[400px]">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
              + Visit Clinic
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fertility & Gynecologist Specialist
            </h1>
            <button className="flex items-center px-6 py-3 bg-white text-healofy-pink rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaPlayCircle className="mr-2 text-xl" /> Watch Video
            </button>
          </div>
        </div>
        <div className="w-11/12 max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-healofy-pink text-4xl md:text-5xl font-bold mb-2">500+</h2>
            <p className="text-healofy-pink text-lg md:text-xl font-medium">Successful Delivery</p>
            <p className="mt-2 text-gray-600 text-sm">
              Celebrating the joy of motherhood with over 500 successful deliveries.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-healofy-pink text-4xl md:text-5xl font-bold mb-2">10+</h2>
            <p className="text-healofy-pink text-lg md:text-xl font-medium">Years Of Experience</p>
            <p className="mt-2 text-gray-600 text-sm">
              A decade of excellence in fertility and women's healthcare.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-healofy-pink text-4xl md:text-5xl font-bold mb-2">2K+</h2>
            <p className="text-healofy-pink text-lg md:text-xl font-medium">Plus Counselling</p>
            <p className="mt-2 text-gray-600 text-sm">
              Providing personalized guidance through over 2,000 counseling sessions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-healofy-pink text-4xl md:text-5xl font-bold mb-2">7+</h2>
            <p className="text-healofy-pink text-lg md:text-xl font-medium">Experience Doctors</p>
            <p className="mt-2 text-gray-600 text-sm">
              Trusted care from a team of 7+ highly skilled and experienced doctors.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <a
          href="tel:YOUR_PHONE_NUMBER" 
          className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
        </a>
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2.98 4.6l-1.05 3.84 3.91-1.03c1.37.75 2.97 1.13 4.54 1.13 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.04 18c-1.34 0-2.6-.33-3.73-.9l-.26-.15-2.73.72.74-2.65-.17-.28c-.68-1.12-1.04-2.42-1.04-3.79 0-4.39 3.58-7.96 7.96-7.96s7.96 3.58 7.96 7.96c0 4.39-3.58 7.96-7.96 7.96zm4.18-5.32c-.22-.11-.92-.45-1.06-.5-.15-.05-.26-.07-.37.07-.11.15-.43.5-.53.6c-.1.11-.2.12-.37.07-.15-.05-.62-.23-1.18-.73-.44-.39-.74-.87-.82-1.02-.08-.15 0-.14.1-.25.1-.11.22-.27.33-.4.11-.14.15-.24.23-.37.08-.12.04-.23-.02-.37-.06-.11-.37-.9-.51-1.23-.15-.32-.29-.27-.37-.27-.08 0-.17-.01-.26-.01-.1-.01-.26.04-.39.19-.13.15-.5.49-.5.59-.01.11-.01.21.08.36.09.15.14.23.27.39.46.66.86 1.25 1.48 1.76.6.51 1.11.75 1.5.94.38.19.6.16.82.1.22-.06.7-.29.8-.36.1-.08.22-.14.33-.11.11.03.7.32.79.37.09.06.15.07.26.07-.01-.01-.01-.07-.02-.2zm-4.18-5.32z" />
          </svg>
        </a>
      </div>
    </section>
    </div>
  );
}