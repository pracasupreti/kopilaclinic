"use client";

import React from 'react';
import Image from "next/image";
import { FaPlayCircle } from 'react-icons/fa'; 

interface BlogPostCardProps {
  imageUrl:string,title:string,description:string,link:string
}

const BlogPostCard = ({ imageUrl, title, description, link = '#' } : BlogPostCardProps ) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative w-full aspect-video"> 
        <Image
          src={imageUrl}
          alt={title}
          quality={80}
          height={800}
          width={800}
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-healofy-gray-500 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-secondary font-semibold hover:underline"
        >
          Read More <FaPlayCircle className="ml-2 text-base" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
