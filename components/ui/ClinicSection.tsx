
'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlayCircle, FaTimes } from 'react-icons/fa';
import { AnimateOnScroll } from './AnimateOnScroll';
import CountUpNumber from './CountUpNumber';

const ClinicSection: React.FC = () => {
  const [showPlayButton, setShowPlayButton] = useState(false); // State for video visibility

  const handleToggle = () => {
    setShowPlayButton(!showPlayButton);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white mx-auto max-w-7xl py-0 mt-12
                 px-2 sm:px-6 md:px-8 lg:px-0 xl:px-0 2xl:px-2"
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-full">
        <div
          className="relative w-full max-w-full mx-0 rounded-4xl overflow-hidden shadow-2xl py-12"
          style={{
            backgroundImage: 'url(/visitClinic.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', 
          }}
        >
          
          <div className="absolute inset-0 bg-primary opacity-60"></div>

          <div
            className="relative z-10 flex flex-col items-center justify-center
                       p-8 md:p-16 text-white text-center min-h-[400px]"
          > <AnimateOnScroll>
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
              <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" /> Visit Clinic
            </span> </AnimateOnScroll>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fertility & Gyne Specialist
            </h1> 
            <AnimateOnScroll>
            <button
            className="flex items-center px-6 py-3 bg-white text-secondary rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleToggle}
            >
            Watch Video <span className='px-2 text-2xl'><FaPlayCircle /></span>
           </button>
            </AnimateOnScroll>
            {showPlayButton && (
  <div className="mt-8 w-full max-w-2xl mx-auto">
    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
      {/* Close Icon */}
      <button
        className="absolute top-2 right-2 z-20 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
        onClick={() => setShowPlayButton(false)}
        aria-label="Close Video"
        type="button"
      >
        <FaTimes className="text-2xl text-secondary" />
      </button>
      <iframe
        src="https://www.youtube.com/embed/8BH7WFmRs-E"
        title="Pregnancy: A Month-By-Month Guide | 3D Animation"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats details section */}
      <div
        className="w-full max-w-full mx-auto mt-16 grid grid-cols-1 py-16
                   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left px-4">
        <div className="flex flex-col px-0 lg:px-4">
          
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2"><CountUpNumber end={500}/></h2>
          <p className="text-primary text-lg md:text-xl font-medium font-semibold">Successful Delivery</p>
          <div className="h-px bg-gray-300 my-4"></div>
          <p className="mt-2 text-gray-600 text-base">
            Celebrating the joy of motherhood with over 500 successful deliveries.
          </p>
        </div>
        <div className="flex flex-col px-0 lg:px-4">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2"><CountUpNumber end={10}/></h2>
          <p className="text-primary text-lg md:text-xl font-medium font-semibold">Years Of Experience</p>
          <div className="h-px bg-gray-300 my-4"></div>
          <p className="mt-2 text-gray-600 text-base">
            A decade of excellence in fertility and womens healthcare.
          </p>
        </div>
        <div className="flex flex-col px-0 lg:px-4">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2"><CountUpNumber end={2000}/></h2>
          <p className="text-primary text-lg md:text-xl font-medium font-semibold">Plus Counselling</p>
          <div className="h-px bg-gray-300 my-4"></div>
          <p className="mt-2 text-gray-600 text-base">
            Providing personalized guidance through over 2,000 counseling sessions.
          </p>
        </div>
        <div className="flex flex-col px-0 lg:px-4">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2"><CountUpNumber end={7}/></h2>
          <p className="text-primary text-lg md:text-xl font-medium font-semibold">Experience Doctors</p>
          <div className="h-px bg-gray-300 my-4"></div>
          <p className="mt-2 text-gray-600 text-base">
            Trusted care from a team of 7+ highly skilled and experienced doctors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;
