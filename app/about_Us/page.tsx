"use client";

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; 
import { FaPhoneAlt, FaWhatsapp, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ServiceCard from "@/components/ServiceCard";

import React, { useState } from "react";
import { FaPlayCircle } from 'react-icons/fa'; // Importing the play icon for the video button

const AboutUsPage = () => {

  const [showPlayButton, setShowPlayButton] = useState(false);
  const handleToggle = () => {
    setShowPlayButton((prev) => !prev);
  };
  
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
     
      <div className="relative z-10 container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mt-2">
            About <span className='text-green-500'> Us</span>
          </h1>
          <p className="text-pink-500 mt-2 text-sm md:text-base">
            Home <span className='text-green-500'> / </span>About Us
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/about.jpg" 
                alt="Happy Baby"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full text-center lg:text-left py-12">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
              + ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mt-2 mb-4">
              Welcome to <span className='text-pink-500'>Kopila Fertility and Womens Clinic</span>
            </h2>
            <p className="text-gray-500 text-base  leading-relaxed mb-6">
              Your trusted partner in reproductive health and women's wellness in Damak, Nepal. Having established in November 2023, we stand at the of fertility to Jaycess Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.
            </p>
           <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-pink-500 font-semibold">
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> Expert Team
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Personalized Care
          </div>
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />State-Of-The-Art Facility
          </div>
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Comprehensive Support
          </div>
        </div>
        </div>
        </div>

        {/* Message from The Director Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
              + Few WORDS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-2 mb-4">
              Message from <span className='text-pink-500'>The Director</span>
            </h2>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              Dear valued patients and community members,
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              It is with great pride and heartfelt commitment that I welcome you to Kopila Fertility and Women's Clinic, which opened its doors in November 2023, at Jaycess Chowk, Damak-6, Jhapa, Nepal. Our mission is to provide compassionate and comprehensive fertility and women's healthcare solutions to support your journey towards better health and well-being.
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              At Kopila, we specialize in a range of services, including infertility treatment, intrauterine insemination (IUI), comprehensive antenatal care, and gynecological services. Our state-of-the-art facility is designed with the goal of offering the highest standard of care to women of all ages, ensuring their comfort and privacy in their pursuit of parenthood.
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              I invite you to experience the difference at Kopila Fertility and Women's Clinic, where your dreams of parenthood and women's wellness are our primary focus.
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed  mt-6">
              Warmest regards,
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-semibold">
              Dr. Sita Rai <span className="text-base font-normal">Director</span>
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative w-full max-w-full h-140 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/doctor.jpg" 
                alt="Dr. Bibeka - Director"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
      
     {/* Services Section */}
       <section className="bg-[#f0f8ff] py-32 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ OUR SERVICES</p>
        <h2 className="text-5xl font-extrabold text-green-500">
          Fertility & Gyne <span className="text-pink-600">Services for You.</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Dedication of Providing Professional Healthcare Services.
        </p>

   
      <div className="relative z-10 container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center">
          <ServiceCard
            iconUrl="/icon.svg"
            title="Ovulation Induction"
            description="A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception."
            link="/Services"
          />
          <ServiceCard
            iconUrl="/icon.svg"
            title="Intrauterine Insemination (IUI)"
            description="A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization."
            link="/Services" 
          />
          <ServiceCard
            iconUrl="/icon.svg" 
            title="In Vitro Fertilisation (IVF)"
            description="A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy."
            link="/Services" 
          />
          <ServiceCard
            iconUrl="/icon.svg"
            title="Antenatal Check Up"
            description="Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby."
            link="/Services"
          />
        </div>
      </div>
       <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe in using the latest technology and techniques to <br/> ensure the best outcomes for our patients.
        </p>

        <button className="max-w-2xl mx-auto mt-6 px-4 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
          <a href="Services">View All Services</a>
          <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
        </button>
      </div>
      </section>
      { /* Visit Clinic Section */}
       { /* Visit Us Section */ }
          <section className="relative w-full overflow-hidden bg-white min-h-screen">
            <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 rounded-full opacity-50 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-10 h-10 bg-blue-300 rounded-full opacity-50 transform -rotate-30"></div>
      
            <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 md:pt-32 md:pb-20">
            
              <div className="relative w-11/12 max-w-12xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src="/visitClinic.jpg" 
                    alt="Mother and child"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    className="brightness-[0.7] contrast-[1.1]" 
                  />
                  <div className="absolute inset-0 bg-pink-500 opacity-60"></div>
                </div>
      
                <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center min-h-[400px]">
                  <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
                    + Visit  Clinic
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Fertility & Gyne Specialist
                  </h1>
                  <button className="flex items-center px-6 py-3 bg-white text-green-500 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleToggle}>
                    Watch Video  <FaPlayCircle className="ml-4 text-2xl" />
                  </button>
                  {showPlayButton && (
                    <div className="mt-6 w-full max-w-2xl mx-auto">
                      <iframe width="853" height="480" src="https://www.youtube.com/embed/8BH7WFmRs-E" title="Pregnancy: A Month-By-Month Guide | 3D Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-11/12 max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
                <div className="flex flex-col items-center">
                  <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">500+</h2>
                  <p className="text-pink-500 text-lg md:text-xl font-medium">Successful Delivery</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Celebrating the joy of motherhood with over 500 successful deliveries.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">10+</h2>
                  <p className="text-pink-500 text-lg md:text-xl font-medium">Years Of Experience</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    A decade of excellence in fertility and women's healthcare.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">2K+</h2>
                  <p className="text-pink-500 text-lg md:text-xl font-medium">Plus Counselling</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Providing personalized guidance through over 2,000 counseling sessions.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">7+</h2>
                  <p className="text-pink-500 text-lg md:text-xl font-medium">Experience Doctors</p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Trusted care from a team of 7+ highly skilled and experienced doctors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}

      <section className="relative w-full bg-green-50 py-16 md:py-24 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Section: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="absolute top-12 -left-10 w-20 h-20 animate-pop ">
                <img src="icon-star.svg" alt="" />
              </div>
          <p className="mt-2 text-green-500 max-w-2xl mx-auto">
            + EXPERTISE EXPERIENCE
          </p>
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">
              Intrauterine Insemination (IUI)
            </h2>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-6">
              Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a woman's uterus around the time of ovulation to increase the chances of fertilization. IUI is often used in cases of male infertility, unexplained infertility, or cervical mucus issues. It is a relatively simple, minimally invasive procedure that can be performed with or without ovulation induction.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                <span className="text-pink-500 text-base">Medical History Review</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                <span className="text-pink-500 text-base">Ovulation Monitoring</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                <span className="text-pink-500 text-base">Semen Analysis</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                <span className="text-pink-500 text-base">Post-Procedure</span>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-full aspect-[8/9] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/iui.jpg"
                alt="Pregnant woman"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
            + TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-2">
            Our <span className='text-pink-500'>Testimonials</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-base max-w-2xl mx-auto">
            Happy Parents
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/testimonials.jpg" 
                alt="Happy Mother-Baby"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full text-center lg:text-left py-12">
            <p className="text-gray-500 text-base  leading-relaxed mb-6">
                &ldquo; The antenatal care I received at Kopila Clinic was exceptional. The doctors were attentive, and the staff made me feel cared for during every visit. I felt confident and well-prepared for my delivery thanks to their expert guidance. Highly recommend it to all expecting mothers!
            </p>
            <p className="text-healofy-pink text-lg font-semibold mt-4">
              Anju Rijal
            </p>
            <p className="text-gray-500 text-sm">
              Birtamode
            </p>
             <div className="flex justify-center lg:justify-start mt-6 space-x-4">
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                    <FaArrowLeft />
                </button>
                <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                    <FaArrowRight />
                </button>
            </div>
            </div>
        </div>
        </div>  
    </section>
    
      {/* Floating contact buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
      </div>
    </section>
  );
};

export default AboutUsPage;