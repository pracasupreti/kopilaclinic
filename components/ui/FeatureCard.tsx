
import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ title, description, alignment = 'left' }) => {
  return (
    <div className={`flex flex-col ${alignment === 'left' ? 'items-end text-right' : 'items-start text-left'} max-w-sm mx-auto`}>
      <div className="flex items-center space-x-2">
        {alignment === 'right' && (
          <Image
            src="icon.svg" 
            alt="Flower Icon"
            width={32}
            height={32}
            className="flex-shrink-0"
          />
        )}
        <h3 className="text-healofy-pink text-lg md:text-xl font-semibold mb-1">
          {title}
        </h3>
        {alignment === 'left' && (
          <Image
            src="icon.svg" 
            alt="Flower Icon"
            width={32}
            height={32}
            className="flex-shrink-0"
          />
        )}
      </div>
      <p className="text-healofy-dark-gray text-sm mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;