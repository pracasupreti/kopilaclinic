'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blog_data } from '../Assets/assets';

export default function BlogPage() {
  return (
    <div className="px-5 py-8 max-w-6xl mx-auto w-full">
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/" className="text-gray-600 hover:text-primary">Home</Link> / <span>Blog</span>
      </nav>

      <h1 className="text-3xl font-bold text-center text-secondary mb-8">Our Blog</h1>

      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog_data.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.id}`}
            className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                priority={false}
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-primary font-medium hover:underline">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
