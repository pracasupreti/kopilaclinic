"use client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { FaEye, FaWhatsapp } from "react-icons/fa";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
  "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg",
  "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
  "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", "/gallery/16.jpg",
  "/gallery/17.jpg", "/gallery/18.jpg", "/gallery/19.jpg", "/gallery/20.jpg",
  "/gallery/21.jpg", "/gallery/22.jpg",
];

const Gallery = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 20,
      once: true,
    });
  }, []);

  const handlePrev = () => {
    if (openIdx !== null) setOpenIdx((openIdx - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (openIdx !== null) setOpenIdx((openIdx + 1) % images.length);
  };

  return (
    <>
      <Head>
        <title>Kopila Fertility & Womens Clinic, Damak-6, Jhapa, Nepal</title>
        <meta
          name="description"
          content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care."
        />
        <meta
          name="keywords"
          content="jhapa gyne clinic, kopila clinic, damak gyne clinic, women clinic damak, jhapa clinic"
        />
        <meta name="author" content="PRACAS" />
        <meta property="og:url" content="https://kopilaclinic.com.np" />
        <meta property="og:title" content="Kopila Fertility & Womens Clinic | Damak, Jhapa, Nepal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care."
        />
        <meta property="og:image" content="https://kopilaclinic.com.np/images/og.jpg" />
        <meta property="og:image:alt" content="Kopila Fertility & Womens Clinic logo or clinic image" />
      </Head>

      <div className="bg-green-50">
        <div className="max-w-6xl mx-auto text-center py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-primary" data-aos="fade-up">
            <span className="text-secondary">Gallery</span>
          </h1>
          <p className="text-primary mt-4 text-sm md:text-base" data-aos="fade-up" data-aos-delay="100">
            Home <span className="text-secondary">/</span> Gallery
          </p>


            <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-12 py-20 px-4 lg:px-0"
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
                <div className="absolute inset-0 bg-primary bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <FaEye className="text-secondary text-5xl" />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {openIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-80">
            <div className="relative max-w-3xl w-full flex flex-col items-center">
              <button
                className="absolute -top-70 lg:top-2 right-2 lg:-right-68 text-txt text-3xl font-semibold"
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
                  className="object-contain rounded-xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
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

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 animate-bounce">
        <a
          href="https://wa.me/9779709055065"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
          className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
      </div>
    </>
  );
};

export default Gallery;
