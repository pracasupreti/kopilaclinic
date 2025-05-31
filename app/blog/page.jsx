'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blog_data } from '../assets/assets';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blog_data.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#EFF8FF] w-full py-16 px-5 md:px-12 lg:px-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#E00C5B]">Our </span>
          <span className="text-[#0F9F16]">Blog</span>
        </h1>
        <div className="text-sm mt-2">
          <Link href="/" className="text-[#E00C5B]">Home</Link>
          <span className="text-[#0F9F16] mx-1">/</span>
          <span className="text-[#E00C5B]">Blog</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto my-8 px-5">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder-gray-400"
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pb-12 max-w-6xl mx-auto">
        {filteredPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.id}`}
            className="group block bg-white overflow-hidden rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="relative overflow-hidden h-48  image-anime">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-[30px] transition-transform duration-500 group-hover:scale-110 "
              />

              {/* Light Sweep */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-full w-full h-full bg-gradient-to-br from-white/25 to-transparent rotate-12 group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              {/* Read More Button */}
              <span className="inline-block px-4 py-2 border border-gray-800 text-gray-800 rounded-md transition-colors duration-300 group-hover:bg-gray-800 group-hover:text-white">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
