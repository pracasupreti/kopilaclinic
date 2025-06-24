"use client";
import React from 'react';
import Image from "next/image";
import { AnimateOnScroll } from './AnimateOnScroll';

type FeatureCardProps = {
  title: string;
  description: string;
  alignment?: 'left' | 'right';
};

const FeatureCard = ({  } : FeatureCardProps) => {
  return (
    <section className="bg-green-50 py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="text-center mb-16"> <AnimateOnScroll>
        <h3 className="text-secondary text-sm font-semibold mb-2"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
        WHY CHOOSE US</h3> </AnimateOnScroll>
        <h1 className="text-secondary text-4xl font-bold mb-4">Best Fertility <span className='text-primary'>Clinic</span></h1>
        <AnimateOnScroll>
        <p className="text-gray-500 text-lg">
          We are committed to sustainability, eco-friendly initiatives.
        </p> </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full items-center justify-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          {/* Expert Care */}
          <AnimateOnScroll>
          <div className="flex items-start text:left lg:text-right">
            <div className="mr-4">
              <h2 className="text-primary text-xl font-semibold mb-2">Expert Care:</h2>
              <p className="text-gray-500 text-base">
                With 7+ experienced doctors, we provide compassionate and specialized care for every patient.
              </p>
            </div>
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mt-8" />
          </div> </AnimateOnScroll>

          {/* Proven Track Record */}
          <AnimateOnScroll>
          <div className="flex items-start text:left lg:text-right">
            <div className="mr-4">
              <h2 className="text-primary text-xl font-semibold mb-2">Proven Track Record:</h2>
              <p className="text-gray-500 text-base">
                Over 500+ successful deliveries reflect our commitment to excellence in maternal health.
              </p>
            </div>
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mt-8" />
          </div> </AnimateOnScroll>

          {/* Decade Of Dedication */}
          <AnimateOnScroll>
          <div className="flex items-start text:left lg:text-right">
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mt-8 mr-2 md:hidden" />
            <div className="mr-4">
              <h2 className="text-primary text-xl font-semibold mb-2">Decade Of Dedication:</h2>
              <p className="text-gray-500 text-base">
                Backed by 10+ years of experience, we deliver reliable and trusted healthcare services.
              </p>
            </div>
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mt-8" />
          </div> </AnimateOnScroll>
        </div> 

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden h-96 w-96 sm:w-150 sm:h-150 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Replace with your actual baby image */}
            <Image src="/happybaby.png" alt="Happy" height={120} width={120}
            className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          {/* Comprehensive Support */}
          <AnimateOnScroll>
          <div className="flex items-start text-left">
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mr-4 mt-8" />
            <div>
              <h2 className="text-primary text-xl font-semibold mb-2">Comprehensive Support:</h2>
              <p className="text-gray-500 text-base">
                With 2k+ counseling sessions, we guide you every step of the way on your journey to parenthood.
              </p>
            </div>
          </div> </AnimateOnScroll>

          {/* State-Of-The-Art Facilities */}
          <AnimateOnScroll>
          <div className="flex items-start text-left">
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mr-4 mt-8" />
            <div>
              <h2 className="text-primary text-xl font-semibold mb-2">State-Of-The-Art Facilities:</h2>
              <p className="text-gray-500 text-base">
                Equipped with advanced technology to ensure the highest standard of treatment and care.
              </p>
            </div>
          </div> </AnimateOnScroll>

          {/* Patient-Centered Approach */}
          <AnimateOnScroll>
          <div className="flex items-start text-left">
            {/* Replace with your actual icon component or image */}
            <Image src="/icon.svg" alt="Flower Icon" height={120} width={120}
            className="w-12 h-12 flex-shrink-0 mr-4 mt-8" />
            <div>
              <h2 className="text-primary text-xl font-semibold mb-2">Patient-Centered Approach:</h2>
              <p className="text-gray-500 text-base">
                We focus on individualized care, prioritizing your comfort, privacy, and well-being.
              </p>
            </div>
          </div> </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;