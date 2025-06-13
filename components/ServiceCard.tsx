import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'; // For the 'Read More' arrow icon

interface ServiceCardProps {
  iconUrl:string, title:string,description:string,link:string
}

const ServiceCard = ({ iconUrl, title, description, link = '#' }: ServiceCardProps ) => {
  return (
    <div className="bg-white rounded-4xl shadow-lg transition duration-300 group p-6  flex flex-col h-full relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-primary z-0 text-white transition-all duration-700 pointer-events-none" style={{transitionProperty:'height,opacity'}} />
      <div className="relative z-10 font-relaxed">
        <div className="flex items-center mb-4 group-hover:filter group-hover:brightness-200 group-hover:grayscale group-hover:contrast-0">
          <Image
            src={iconUrl}
            alt={`${title} Icon`}
            width={46}
            height={46}
            className="flex-shrink-0" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-4 text-left group-hover:text-white text-left">
          {title}
        </h3>
        <p className="text-gray-500 text-lg mb-6 flex-grow group-hover:text-white text-left leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-secondary font-semibold group-hover:text-white"
        >
          Read More <FaArrowRight className="ml-2 text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;