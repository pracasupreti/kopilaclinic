'use client'; 

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionItem = ({ icon: Icon, title, description, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="border-b border-gray-200 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Icon && <Icon className="text-healofy-pink text-2xl mr-4" />} 
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-500 transition-transform duration-300 transform rotate-180" />
        ) : (
          <FaChevronDown className="text-gray-500 transition-transform duration-300" />
        )}
      </div>
      {isOpen && (
        <p className="mt-2 pl-10 text-healofy-dark-gray text-sm md:text-base pr-4 animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;