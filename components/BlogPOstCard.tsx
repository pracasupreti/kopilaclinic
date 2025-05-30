import React from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa'; 

const BlogPostCard = ({ imageUrl, title, description, link = '#' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-video"> 
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-pink-500 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-healofy-gray-500 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-green-500 font-semibold hover:underline"
        >
          Read More <FaPlayCircle className="ml-2 text-base" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;