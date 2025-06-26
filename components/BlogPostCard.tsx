"use client";

import React from "react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

interface BlogPostCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const BlogPostCard = ({
  imageUrl,
  title,
  description,
  link = "#",
}: BlogPostCardProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="transition-shadow duration-300 overflow-hidden flex flex-col h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-100 w-150 aspect-video overflow-hidden rounded-4xl">
        {/* Zoom Image */}
        <Image
          src={imageUrl}
          alt={title}
          quality={80}
          height={800}
          width={800}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Diagonal Overlay with animation */}
        {hovered && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="w-[160%] h-[160%] bg-white rotate-[25deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ animation: "overlayExpandFade 0.7s ease-in-out forwards" }}
            />
          </div>
        )}
      </div>

      <div className="p-2 py-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-healofy-gray-500 text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-secondary font-semibold hover:text-primary"
        >
          Read More <FaArrowCircleRight className="ml-2 text-base" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
