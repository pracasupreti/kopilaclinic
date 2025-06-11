import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'; // For the 'Read More' arrow icon

const ServiceCard = ({ iconUrl, title, description, link = '#' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg transition duration-300 group p-6 flex flex-col h-full relative overflow-hidden">
  
      <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-primary z-0 transition-all duration-700 pointer-events-none" style={{transitionProperty:'height,opacity'}} />
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <Image
            src={iconUrl}
            alt={`${title} Icon`}
            width={40}
            height={40}
            className="flex-shrink-0"
          />
        </div>
        <h3 className="text-xl font-bold text-primary ml-4">
          {title}
        </h3>
        <p className="text-gray-500 text-base mb-6 flex-grow">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-secondary font-semibold hover:underline"
        >
          Read More <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;