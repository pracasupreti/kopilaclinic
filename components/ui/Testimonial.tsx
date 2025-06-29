"use client";
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from "react";
import { AnimateOnScroll } from './AnimateOnScroll';

// Testimonials data for slider (keep this as is)
const testimonials = [
  {
    name: "Sunita Karki",
    location: "Canada",
    text: "After struggling with infertility for years, I finally found hope at Kopila Fertility and Women Clinic. The team was compassionate and supportive throughout my treatment, and today, I am thrilled to be expecting my first child. Dr. Sita Koirala and her team truly are a blessing for families like mine.",
    image: "/testimonials/testimonial1.jpg",
    stars: 5,
  },
  {
    name: "Anju Rijal",
    location: "Birtamode",
    text: "The antenatal care I received at Kopila Clinic was exceptional. The doctors were attentive, and the staff made me feel calm and worry-free. I felt confident and well-prepared for my delivery thanks to their expert guidance. Highly recommended for all expecting mothers!",
    image: "/testimonials/testimonial2.jpg", // Ensure leading slash for public folder
    stars: 5,
  },
  {
    name: "Priti Subedi",
    location: "Itahari",
    text: "Kopila Fertility and Women Clinic gave me a new lease on life. After years of irregular cycles and gynecological issues, I finally found the right care here. Their expertise and modern facilities are unmatched in the region. Thanks for restoring my health and confidence!",
    image: "/testimonials/testimonial3.jpg",
    stars: 5,
  },
  {
    name: "Mina Paudel",
    location: "Canada",
    text: "My husband and I were overjoyed to find success with the treatment at Kopila Clinic. The patient-centered way they explain the process and made us feel comfortable. We are now proud parents of a beautiful baby girl, and we owe it all to the dedicated team at Kopila!",
    image: "/testimonials/testimonial4.jpg",
    stars: 5,
  },
  {
    name: "Srijana Parajuli",
    location: "Bhaktapur",
    text: "Kopila Clinic is a sanctuary for women seeking professional and empathetic healthcare. Their gynecological services are outstanding, and the staff always treats you with respect and understanding. I always recommend this clinic to my friends and family!",
    image: "/testimonials/testimonial5.jpg",
    stars: 5,
  },
  {
    name: "Rupa Basnet",
    location: "Canada",
    text: "Kopila Fertility and Women Clinic transformed my life. After struggling for years with irregular cycles and other gynecological complications, I finally received the expert care I needed. Their advice & the test facilities are comprehensive and easy to understand. I'm deeply grateful for the treatment and confidence they’ve given me!",
    image: "/testimonials/testimonial6.jpg",
    stars: 5,
  },
  {
    name: "Laxmi Pandey",
    location: "Canada",
    text: "I had been trying to conceive for a long time, and the treatments here were a game-changer. Dr. Sita took the time to understand my medical history, and their approach was both holistic and effective. The care we received was exceptional, and now I'm expecting my first child! I highly recommend this clinic to any woman facing fertility challenges.",
    image: "/testimonials/testimonial7.jpg",
    stars: 5,
  },
  {
    name: "Santoshi Maskey",
    location: "Bharatpur",
    text: "The fertility treatments were tailored to my needs, and I felt like I was in great hands from the start. The team was all about empathy, and no matter how trivial some of my questions, I was heard. We had a successful outcome, and I’ll always be grateful for this clinic. Highly recommend them to any couple wanting to start a family.",
    image: "/testimonials/testimonial8.jpg",
    stars: 5,
  },
  {
    name: "Rejina Mijhi",
    location: "Canada",
    text: "As a husband, I was hesitant at first about fertility treatments, but the specialists at Kopila Clinic made the process so seamless and stress-free for both my wife and I. Clinic provided me clarity and peace of mind. The environment is welcoming, and the staff are approachable throughout the journey. My wife and I are now expecting and we can’t thank them enough!",
    image: "/testimonials/testimonial9.jpg",
    stars: 5,
  },
];

const Testimonial: React.FC = () => {
  // const [showPlayButton, setShowPlayButton] = useState(false); // This state isn't used in the current design
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // const handleToggle = () => { // This function isn't used in the current design
  //   setShowPlayButton((prev) => !prev);
  // };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <div className="bg-white flex flex-col items-center justify-center py-12 mx-auto max-w-7xl">
      <section className="lg:py-16 md:py-24 overflow-hidden">
        <div className="relative z-10 container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12"> <AnimateOnScroll>
            <p className="text-secondary font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2">
              <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" /> TESTIMONIALS
            </p> </AnimateOnScroll>
            <h2 className="text-2xl lg:text-5xl font-bold text-secondary mt-2">
              Our <span className='text-primary'>Testimonials</span>
            </h2> <AnimateOnScroll>
            <p className="text-gray-600 text-lg mt-4">
              Happy Parents
            </p> </AnimateOnScroll>
          </div>

          <section className="bg-light-gray lg:py-10 md:py-16">
            <div className="flex flex-col md:flex-row overflow-hidden">
              
              <div className="relative w-full md:w-2/5 h-96"> {/* Adjusted width, height, and rounding */}
                <Image
                  src="/testimonials.jpg" 
                  alt="Mother and child smiling"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-4xl"
                />
                {/* Rating Box */}
                <div className="absolute w-90 lg:w-90 xl:w-100 -bottom-10 md:-bottom-8 left-4 xl:left-30 lg:left-1/2 bg-secondary text-white p-4 pr-8 rounded-4xl flex flex-col items-start border-5 border-white"> 
                 <AnimateOnScroll> <div className='flex flex-row gap-4 mb-4'><span className="text-4xl font-bold mb-1">4.7/5</span>
                  <p className="text-sm leading-tight mb-1 text-left">This rate is given by user <br /> after visiting our location</p>
                  </div>
                  <div className='flex flex-row gap-4'>
                  <div className="flex text-yellow-400 text-lg mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`${i < currentTestimonialData.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-bold uppercase">For Excellence Services</p> 
                  </div>
                  </AnimateOnScroll>
                </div>
              </div>

              {/* Testimonial Content Section (Right Side) */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-start"> {/* Adjusted padding and alignment */}
                {/* Large Quote Mark */}
                <p className="text-8xl text-gray-300 font-serif -mb-10 -ml-4 transform scale-x-[-1] leading-none">“</p> {/* Added large quote mark */}

                {/* Testimonial Text */} <AnimateOnScroll>
                <p className="text-primary text-base xl:text-xl font-semibold leading-relaxed mb-6 mt-4">
                  {currentTestimonialData.text}
                </p> </AnimateOnScroll>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-8">
                  <Image
                    src={currentTestimonialData.image}
                    alt={currentTestimonialData.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div> <AnimateOnScroll>
                    <h4 className="font-semibold text-lg text-secondary">{currentTestimonialData.name}</h4> {/* Changed color to secondary */}
                    <p className="text-sm text-gray-500">{currentTestimonialData.location}</p>
                 </AnimateOnScroll> </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-start space-x-4"> {/* Aligned to start */}
                  <button
                    className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    aria-label="Previous testimonial"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    aria-label="Next testimonial"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;