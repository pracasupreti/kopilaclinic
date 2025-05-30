'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { blog_data } from '../Assets/assets';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const blogId = Number(params.id);
    const post = blog_data.find(item => item.id === blogId);
    if (post) {
      setData(post);
    }
  }, [params.id]);

  return data ? (
    <div>
      {/* Header Section */}
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Body Content */}
      <div className="px-5 py-12 max-w-4xl mx-auto">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-md mb-8"
          priority
        />
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.description || data.excerpt}
        </p>
      </div>
    </div>
  ) : (
    <p className="text-center mt-20 text-gray-500">Loading blog post...</p>
  );
};

export default Page;
