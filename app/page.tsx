"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";
import { ArrowRight, Star } from "lucide-react";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import FeatureCard from "@/components/ui/FeatureCard";
import AccordionItem from "@/components/ui/AccordionItem";
import Head from "next/head";
import BlogPostCard from "@/components/BlogPostCard";
import ClinicSection from "@/components/ui/ClinicSection";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import ServicesSection from "@/components/ui/services";



export default function Page() { // Changed to Page for convention

  const [hovered, setHovered] = useState(false);

  return (
    <><Head>
      <title>Kopila Fertility & Womens Clinic, Damak-6, Jhapa, Nepal</title>
      <meta name="description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
      <meta name="keywords" content="jhapa gyne clinic, kopila clinic, damak gyne clinic, women clinic damak, jhapa clinic" />
      <meta name="author" content="PRACAS" />
      <meta property="og:url" content="https://kopilaclinic.com.np" />
      <meta property="og:title" content="Kopila Fertility & Womens Clinic | Damak, Jhapa, Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
      <meta property="og:image" content="https://kopilaclinic.com.np/images/og.jpg" />
      <meta property="og:image:alt" content="Kopila Fertility & Womens Clinic logo or clinic image" />

    </Head>
      <main className="relative min-h-screen overflow-hidden min-w-full">
        {/* Hero Section */}
        <section className="bg-green-50 flex flex-col justify-center space-y-8 pt-4 lg:pt-0 pr-8">
          <div className="max-w-7xl mx-auto w-full lg:px-4 2xl:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="relative h-full lg:text-left mt-0 md:mt-120 lg:mt-120 p-4 md:p-0">
                {/* Decorative elements - Using standard Tailwind for basic animation approximation */}
                <div className="absolute -top-2 -left-5 md:-top-20 md:-left-10 w-16 h-16 md:w-16 md:h-16 opacity-10"> {/* animate-pulse for approximation */}
                  <Image src="/icon-star.svg" alt="Star Icon" height={36} width={76} />
                </div>

                <div className="absolute space-y-12 justify-centerS">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 md:mb-6 leading-relax drop-shadow-lg slide-side">
                    Fertility <span className="text-secondary">and</span> <br className="hidden sm:inline" /> <span className="text-primary">Womens Clinic</span>
                  </h1>

                  <p className="text-base md:text-base text-gray-500 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 slide-up">
                    The clinic specializes in infertility treatment, intrauterine insemination (IUI),
                    antenatal care, and gynecological services.
                  </p>
                  <AnimateOnScroll>
                    <Link href="/appointment">
                      <div className="group">
                        <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-primary to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto</button> lg:mx-0">
                          Book An Appointment
                          <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
                        </button>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                  <div className="h-px bg-gray-300 my-4"></div>
                  {/* Google Rating */}
                  <AnimateOnScroll>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-2">

                      <div className="flex items-center">

                        <span className="text-primary font-semibold mr-2">Google Rating</span>
                        <span className="text-sm text-yellow-300">4.7</span>
                        <div className="flex ml-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                      </div>
                      <span className="text-primary text-sm">Based On Public Reviews</span>
                      <div className="absolute -right-12 bottom-2 w-12 h-12 md:w-12 md:h-12 opacity-10"> {/* animate-pulse for approximation */}
                  <Image src="/icon-star.svg" alt="Star Icon" height={36} width={76} />
                </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative flex justify-center items-center mt-80 md:mt-0 lg:mt-12 px-8">
                <div className="absolute top-0 left-12 md:top-8 md:left-16 w-12 lg:top-12 lg:left-20 h-12 md:w-20 md:h-20 animate-pop">
                  <Image src="/icon-star.svg" alt="Star Icon" height={36} width={76} />
                </div>
                {/* Main Hero Image */}
                <div className="relative fade-in">
                  <Image src="/hero-img.png"
                    alt="Mother and child"
                    height={600}
                    width={550}
                    className="object-top" />

                  <div className="absolute bottom-1/2 left-12 md:bottom-1/2 md:left-28 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-1/4 -translate-x-1/2 hover:bg-primary"> {/* Adjusted positioning and animation */}
                    <Image src="/baby-stroller.svg" alt="Baby Stroller Icon" height={120} width={120} className="p-4" />
                  </div>
                  <div className="absolute top-1/4 right-0 md:top-1/4 md:right-7 w-22 h-22 bg-white rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2 translate-x-1/2 hover:bg-primary"> {/* Adjusted positioning and animation */}
                    <Image src="/baby.svg" alt="Baby Icon" height={120} width={120} className="p-4" />
                  </div>
                  <div className="absolute bottom-10 right-4 w-22 h-22 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary">
                    <Image src="/icon-hero-theeth-3.svg" alt="Tooth Icon" height={120} width={120} className="p-4" />
                  </div>
                  {/* Doctor Profile Card */}
                  <div className="absolute bottom-20 left-4 bg-white shadow-xl rounded-lg flex items-center space-x-3 w-56 animate-wiggleX">
                    <Image
                      src="/DrSita.jpg"
                      alt="Dr. Sita Rai"
                      width={80}
                      height={100}
                      className="rounded-2xl p-2 lg:p-2"
                    />
                    <div>
                      <h3 className="font-semibold text-primary sm:text-sm lg:text-lg">Dr. Sita Rai</h3>
                      <p className="text-base lg:text-sm text-secondary">Gynaecologist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Contact Section */}
        <section className="bg-primary text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center w-full">
                {/* Consult A Doctor */}
                <div className="flex items-center space-x-4">
                  <div className=" bg-opacity-20 rounded-full p-3">
                    <Image src="/icon-cta-phone.svg" alt="Phone Icon" width={24} height={24} className="hidden md:block h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Consult A Doctor</h3>
                    <p className="text-white">Call on : (+977) 970 905 5065</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center space-x-4">
                  <div className="bg-opacity-20 rounded-full p-3">
                    <Image src="/icon-cta-time.svg" alt="Clock Icon" width={24} height={24} className="hidden md:block h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Opening Hours</h3>
                    <p className="text-white">Sunday to Friday 07:00AM to 07:00PM</p>
                  </div>
                </div>

                {/* Book Appointment */}
                <div className="flex justify-left md:justify-end">
                  <Link href="/appointment">
                    <div className="group">
                      <button className="bg-secondary text-sm font-semibold relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-white to-white hover:text-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
                        Book An Appointment
                        <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5 group-hover:bg-primary" />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>


        {/* About Section */}
        <section className="bg-white flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center gap-4 py-10 lg:mb-30 px-4 sm:px-8 lg:px-4 w-full">
          {/* Left Image Section */}
          <div className="relative flex flex-col justify-center items-center w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* Main Baby Image */}
            {/* Main Baby Image (baby1.jpg) */}
<div className="absolute z-0 left-2 top-4 rounded-3xl overflow-hidden border-4 border-white group">
  <Image
    src="/baby1.jpg"
    alt="Baby smiling"
    height={600}
    width={360}
    className="image-unwrap object-cover w-[960px] md:w-[320px] lg:w-[380px] transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
  {/* White Diagonal Overlay */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="w-[160%] h-[160%] bg-white rotate-[25deg] opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-60 transition-all duration-700 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
</div>

{/* Second Baby Image (baby2.jpg) */}
<div
  className="absolute z-10 left-44 top-45 sm:left-104 sm:top-90 lg:left-2 lg:top-45 rounded-3xl overflow-hidden border-4 border-white group"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <Image
    src="/baby2.jpg"
    alt="Happy baby"
    height={400}
    width={600}
    className="image-unwrap object-cover rounded-3xl w-[260px] md:w-[120px] lg:w-[560px] transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
  {/* White Diagonal Overlay */}
  {hovered && (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div
        className="w-[160%] h-[160%] bg-white rotate-[25deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animation: "overlayExpandFade 0.7s ease-in-out forwards" }}
      />
    </div>
  )}
</div>

            {/* Experience Badge */}
            <div className="absolute top-60 left-24 sm:top-98 sm:left-90 z-20 md:left-90 md:top-10 w-26 h-26 md:w-36 md:h-36 rounded-full ">
              <Image
                src="/about-experience-circle.png"
                alt="Experience Circle"
                height={120} width={120}
                className="w-full h-full animate-spinClockwise"
              />
            </div>
            {/* Star Icon */}
            <div className="absolute top-70 left-4 sm:top-120 sm:left-60 lg:left-120 lg:top-10 ">
              <Image src="icon-star.svg" alt="star"
                height={200} width={200} className="h-12 w-12 lg:opacity-10 " />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full flex flex-col justify-center items-start text-left space-y-4 sm:mt-40 mt-0 lg:mt-60">
            <AnimateOnScroll><p className="text-sm text-secondary font-semibold mb-2"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
              ABOUT US</p></AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-secondary slide-side">
              Fertility Clinic{' '}
              <span className="text-primary">in Damak,<br className="hidden sm:inline" /> Nepal</span>
            </h2><AnimateOnScroll>
              <p className="mt-2 text-gray-500 text-base md:text-lg max-w-xl">
                Welcome to Kopila Fertility and womens Clinic, your trusted partner in reproductive health and womens wellness in Damak, Nepal.
              </p></AnimateOnScroll><AnimateOnScroll>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 text-sm text-primary font-semibold">

                <div className="flex items-center slide-up"><FaCheckCircle className="text-secondary text-lg mr-2" />Expert Team</div>
                <div className="flex items-center slide-up"><FaCheckCircle className="text-secondary text-lg mr-2" />Personalized Care</div>
                <div className="flex items-center slide-up"><FaCheckCircle className="text-secondary text-lg mr-2" />State-Of-The-Art Facility</div>
                <div className="flex items-center slide-up"><FaCheckCircle className="text-secondary text-lg mr-2" />Comprehensive Support</div>
              </div></AnimateOnScroll>
            <AnimateOnScroll>
              <Link href="/about_Us" passHref>
                <button className="mt-6 px-6 py-3 bg-secondary text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] slide-up">
                  Read More
                  <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
                </button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Visit Us Section */}
        <ClinicSection />
        {/* Choose Us Section */}
        <FeatureCard title={"Choose us"} description={""} />

        {/* What We Do Section */}
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-2 xl:px-0">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full">
            {/* Left Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full h-160 max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/how-it-work-img.jpg"
                  alt="Happy Baby"
                  height={600} width={600}
                  quality={90}
                  className="rounded-3xl h-160 w-full object-cover"
                />
              </div>
            </div>

            {/* Right Section: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-12">
              <AnimateOnScroll>
                <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  WHAT WE DO?
                </span> </AnimateOnScroll>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">
                Infertility <span className="text-primary">Treatment </span>
              </h2> <AnimateOnScroll>
                <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed max-w-xl lg:mx-0 mx-auto">
                  Infertility treatment refers to medical interventions and procedures aimed at helping individuals or couples conceive a child when they face challenges in achieving pregnancy naturally.
                </p> </AnimateOnScroll>

              {/* Accordion/Service List */}
              <AccordionItem />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative w-full bg-blue-50 py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 w-full">
            {/* Section Header */}
            <div className="text-center mb-12">
              <AnimateOnScroll>
                <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  LATEST UPDATES
                </span> </AnimateOnScroll>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">
                Our <span className="text-primary">Blog</span>
              </h2> <AnimateOnScroll>
                <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                  Get more information on various topics.
                </p> </AnimateOnScroll>
            </div>

            {/* Blog Post Grid */}
            <AnimateOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 justify-items-center">
                <BlogPostCard
                  imageUrl="/blog1.jpg"
                  title="Understanding Ovulation Induction: A Key To Overcoming Infertility"
                  description="Ovulation induction is an essential treatment for women struggling with infertility due to irregular or absent ovulation."
                  link="/blog/understanding-ovulation-induction"
                />
                <BlogPostCard
                  imageUrl="/blog2.jpg"
                  title="Intrauterine Insemination (IUI): A Simple And Effective Fertility Solution"
                  description="Intrauterine insemination (IUI) is a popular and minimally invasive fertility treatment that helps improve the chances of pregnancy."
                  link="/blog/intrauterine-insemination-iui"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Section */}

        <section className="relative bg-white py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 w-full mx-auto max-w-7xl">
          <div className="relative z-10 container px-0 sm:px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 min-h-full">
            {/* Left Section: Google Map */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-gray-200">

                {/* Changed YouTube placeholder to a generic Google Maps placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3565.61545835821!2d87.69899!3d26.660792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f57b9806635%3A0xe165b513be0335a6!2sKopila%20Fertility%20%26%20Womens%20Clinic!5e0!3m2!1sen!2snp!4v1750173597681!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 border-0 rounded-2xl"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md max-w-[200px] text-sm">
                  <p className="font-semibold text-gray-800">Kopila Fertility & Womens Clinic</p>
                  <p className="text-xs text-gray-600">Jaycess Chowk, Damak, 57217</p>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-yellow-500 font-bold">5.0</span>
                    <span className="ml-1 text-gray-500">(16 reviews)</span>
                  </div>
                  <a href="#" className="text-blue-600 text-xs mt-1 block hover:underline">View larger map</a>
                  <div className="flex justify-between mt-2 text-gray-500">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">Directions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
              <AnimateOnScroll>
                <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  CONTACT NOW
                </span> </AnimateOnScroll>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">Consult
                <span className="text-primary"> Now</span>
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4 flex-shrink-0" />
                  <p className="text-blue-500 text-lg">Jaycess Chowk, Damak-6, Jhapa</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <FaPhoneAlt className="text-blue-500 text-2xl mr-4 flex-shrink-0" />
                  <a href="tel:+9779709055065" className="text-blue-500 text-lg hover:underline">
                    +977 970 905 5065
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <FaEnvelope className="text-blue-500 text-2xl mr-4 flex-shrink-0" />
                  <a href="mailto:info@kopilaclinic.com.np" className="text-blue-500 text-lg hover:underline">
                    info@kopilaclinic.com.np
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <FaClock className="text-blue-500 text-2xl mr-4 flex-shrink-0" />
                  <p className="text-blue-500 text-lg">Mon to Sat 07:00AM to 07:00PM</p>
                </div>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start"> <AnimateOnScroll>
                <Link href="/appointment">
                  <div className="group">
                    <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
                      Book An Appointment
                      <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
                    </button>
                  </div>
                </Link> </AnimateOnScroll>
              </div>
            </div>
          </div>

          {/* Floating contact buttons*/}
          <div className="fixed bottom-20 right-4 md:bottom-30 md:right-8 z-50 flex flex-col space-y-8">
            <span className="absolute rounded-full bg-primary opacity-40 animate-ping z-10 w-12 h-12 md:w-14 md:h-14"></span>
            <span className="absolute rounded-full bg-primary opacity-40 animate-ping z-4 w-12 h-12 md:w-14 md:h-14"></span>
            {/* Phone button */}
            <a
              href="tel:+9779709055065"
              className="group relative z-10 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
            >
              <FaPhoneAlt className="w-6 h-6 md:w-7 md:h-7 text-white transform transition-transform duration-300 group-hover:rotate-[130deg]" />
            </a>
            <a
              href="https://wa.me/9779709055065" // Correct WhatsApp URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 animate-bounce"
            >
              <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}