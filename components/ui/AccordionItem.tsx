'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCalendarAlt, FaClinicMedical, FaUserMd } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react'; // Import useEffect for AOS initialization
import AOS from 'aos'; // Import AOS library

// Define the AccordionItemProps interface
interface AccordionItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// AccordionItem component
const AccordionItem = ({ icon: Icon, title, description, isOpen, toggleOpen }: AccordionItemProps & { isOpen: boolean; toggleOpen: () => void }) => {
  return (
    <div className="border-b border-gray-200 py-4 cursor-pointer" onClick={toggleOpen}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className="text-blue-500 text-2xl mr-4" />}
          <h3 className="text-lg md:text-xl font-semibold text-primary">{title}</h3>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-primary transition-transform duration-300 transform rotate-180" />
        ) : (
          <FaChevronDown className="text-primary transition-transform duration-300" />
        )}
      </div>
      {isOpen && (
        <p className="mt-2 pl-10 text-gray-500 text-sm md:text-base pr-4 animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  );
};

// Main component that uses AccordionItem
const MyAccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // State to manage which accordion item is open

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const accordionData = [
    {
      icon: FaCalendarAlt,
      title: "Book An Appointment",
      description: "Schedule your visit easily through a call or online to get started on your care journey.",
    },
    {
      icon: FaClinicMedical,
      title: "Visit Our Clinic",
      description: "Conveniently located at Damak-6, Jhapa, Nepal, experience our welcoming and patient-friendly environment.",
    },
    {
      icon: FaUserMd,
      title: "Consult With Our Doctors",
      description: "Receive expert advice and personalized care from our experienced team of specialists.",
    },
  ];


  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mt-8 space-y-4 max-w-xl mx-auto lg:mx-0">
        {accordionData.map((item, index) => (
          <div key={index} data-aos="fade-up">
             <button
              onClick={() => toggleAccordion(index + accordionData.length)}
              className="w-full text-left text-xl font-semibold text-primary flex justify-between items-center"
            ></button>
            <AccordionItem
              icon={item.icon}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index}
              toggleOpen={() => toggleAccordion(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccordionSection;