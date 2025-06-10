"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { FaEye } from "react-icons/fa";
import Head from "next/head";

// Custom hook for intersection observer
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
  "/gallery/22.jpg",
];

const Gallery = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Section refs and inView states
  const [titleRef, titleInView] = useInView();
  const [subtitleRef, subtitleInView] = useInView();
  const [gridRef, gridInView] = useInView();

  const handlePrev = () => {
    if (openIdx !== null) setOpenIdx((openIdx - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (openIdx !== null) setOpenIdx((openIdx + 1) % images.length);
  };

  return (
    <><Head>
          <title>Kopila Fertility & Womens Clinic, Damak-6, Jhapa, Nepal</title>
          <meta name="description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care."/>
            <meta name="keywords" content="jhapa gyne clinic, kopila clinic, damak gyne clinic, women clinic damak, jhapa clinic"/>
            <meta name="author" content="PRACAS"/>
          <meta property="og:url" content="https://kopilaclinic.com.np"/>
          <meta property="og:title" content="Kopila Fertility & Womens Clinic | Damak, Jhapa, Nepal"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care."/>
          <meta property="og:image" content="https://kopilaclinic.com.np/images/og.jpg"/>
          <meta property="og:image:alt" content="Kopila Fertility & Womens Clinic logo or clinic image"/>
      
        </Head>
      <div className="bg-green-50">
        <div className="max-w-6xl mx-auto text-center py-20 bg-green-50">
          <h1
            ref={titleRef}
            className={`text-3xl font-bold transition-all duration-700 ${
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-green-600 text-5xl">Gallery</span>
          </h1>
          <p
            ref={subtitleRef}
            className={`text-sm text-pink-500 mt-1 font-semibold transition-all duration-700 delay-150 ${
              subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Home / Gallery
          </p>

          <div
            ref={gridRef}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-12 py-20 bg-white transition-all duration-700 delay-300 ${
              gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setOpenIdx(idx)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-pink-400 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaEye className="text-green-600 text-5xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for large image */}
        {openIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative max-w-3xl w-full flex flex-col items-center">
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex items-center justify-center w-full">
                <button
                  className="text-white bg-green-600 hover:bg-green-700 rounded-full p-3 mx-2"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <Image
                  src={images[openIdx]}
                  alt={`Gallery image ${openIdx + 1}`}
                  width={700}
                  height={700}
                  className="object-contain rounded-xl bg-white"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <button
                  className="text-white bg-green-600 hover:bg-green-700 rounded-full p-3 mx-2"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
