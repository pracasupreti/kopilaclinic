
import React from 'react';
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  alignment?: 'left' | 'right';
};

const FeatureCard = ({ title, description, alignment = 'left' } : FeatureCardProps) => {
  return (
    <div className={`flex flex-col ${alignment === 'left' ? 'items-end text-right' : 'items-start text-left'} max-w-sm mx-auto`}>
      <div className="flex items-center space-x-2">
        {alignment === 'right' && (
          <Image
            src="/public/icon.svg"
            alt="Flower Icon"
            width={32}
            height={32}
            className="flex-shrink-0"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        )}
        <h3 className="text-primary text-lg md:text-xl font-semibold mb-1">
          {title}
        </h3>
        {alignment === 'left' && (
          <Image
            src="icon.svg"
            alt="Flower Icon"
            width={32}
            height={32}
            className="flex-shrink-0"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        )}
      </div>
      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;