'use client';
import QuotedText from '@/components/QuotedText';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function BlogPost({ post }) {
  const contentRefs = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      contentRefs.current.forEach(el => {
        if (el) observer.observe(el);
      });

      return () => {
        contentRefs.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
      };
    }
  }, [post]);

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-[#EFF8FF] py-16 px-5 md:px-12 lg:px-28 text-center">
        <h1
          className="text-3xl md:text-5xl font-bold text-[#E00C5B] mb-4 fade-in-on-scroll"
          ref={el => (contentRefs.current[0] = el)}
        >
          {post.title}
        </h1>
      </div>

      {/* Content */}
      <div className="px-5 py-16 lg:px-28  mx-auto space-y-8">
        {/* Blog Image */}
        <div className="fade-in-on-scroll" ref={el => (contentRefs.current[1] = el)}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className=" aspect-[2/1] object-cover rounded-[40px]"
            priority
          />
        </div>

        {/* Blog Text */}
        <div className="fade-in-on-scroll" ref={el => (contentRefs.current[2] = el)}>
          {/* <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {post.description || post.excerpt}
          </p> */}
          {post.paragraphs.map((paragraph, index) => (
            paragraph.isQuoted? <QuotedText text = {paragraph.text} />:
            <p key={index} className=" text-font-gray leading-7 whitespace-pre-line mb-4 text-base">
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
