"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css"; // Assuming this contains base styles and potentially global utility classes
import { ArrowRight, Star, Phone, Clock } from "lucide-react";
import { FaCheckCircle, FaPlayCircle, FaPhoneAlt, FaWhatsapp, FaUserMd, FaClinicMedical, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import FeatureCard from "@/components/ui/FeatureCard";
import AccordionItem from "@/components/ui/AccordionItem";
import ServiceCard from "@/components/ServiceCard";
import Head from "next/head";
import BlogPostCard from "@/components/BlogPostCard";




export default function Page() { // Changed to Page for convention

  const [showPlayButton, setShowPlayButton] = useState(false);
  const handleToggle = () => {
    setShowPlayButton((prev) => !prev);
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
      <div className="min-h-screen bg-green-50 flex flex-col justify-between w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden mt-24 w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="max-w-8xl mx-auto w-full px-0 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center w-full">
              {/* Left Content */}
              <div className="relative h-full lg:text-left mt-0 lg:mt-30 ">
                {/* Decorative elements - Using standard Tailwind for basic animation approximation */}
                <div className="absolute top-8 -left-5 md:top-6 md:-left-10 w-16 h-16 md:w-16 md:h-16 opacity-30"> {/* animate-pulse for approximation */}
                  <Image
                    src="/icon-star.svg"
                    alt="Star Icon"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain"
                    }} />
                </div>

                <div className="absolute space-y-12 justify-center mt-16 slide-down">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4 md:mb-6 leading-relax drop-shadow-lg">
                  Fertility <span className="text-secondary">and</span> <br className="hidden sm:inline" /> <span className="text-primary">Women's Clinic</span>
                </h1>

                <p className="text-base md:text-base text-gray-500 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                  The clinic specializes in infertility treatment, intrauterine insemination (IUI),
                  antenatal care, and gynecological services.
                </p>

                 <Link href="/appointment">
              <div className="group">
                <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-primary to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto</button> lg:mx-0">
               Book An Appointment
              <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
              </button>
              </div>
             </Link>
                
                {/* Google Rating */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-16">
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
                </div>
              </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="relative flex justify-center items-center lg:mt-0  mt-120">
                <div className="absolute top-0 left-12 md:top-2 md:left-12 w-12 h-12 md:w-20 md:h-20 animate-pop"> {/* animate-pulse for approximation */}
                  <Image
                    src="/icon-star.svg"
                    alt="Star Icon"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain"
                    }} />
                </div>
                {/* Main Hero Image */}
                <div className="relative w-full max-w-full md:max-w-full mx-auto aspect-[7/8] -top-12 -left-12 fade-in"> {/* Using aspect ratio for better control */}
                  <Image
                    src="/home/hero-img.png"
                    alt="Mother and child"
                    className="object-top"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain"
                    }} /> {/* Adjusted objectFit */}

                  <div className="absolute bottom-1/2 left-12 md:bottom-1/2 md:left-36 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-1/4 -translate-x-1/2 hover:bg-primary"> {/* Adjusted positioning and animation */}
                    <Image
                      src="/baby-stroller.svg"
                      alt="Baby Stroller Icon"
                      className="p-4"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain"
                      }} />
                  </div>
                  <div className="absolute top-1/4 right-0 md:top-1/4 md:right-7 w-22 h-22 bg-white rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2 translate-x-1/2 hover:bg-primary"> {/* Adjusted positioning and animation */}
                    <Image
                      src="/baby.svg"
                      alt="Baby Icon"
                      className="p-4"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain"
                      }} />
                  </div>
                  <div className="absolute bottom-10 right-4 w-22 h-22 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary">
                    <Image
                      src="/icon-hero-theeth-3.svg"
                      alt="Tooth Icon"
                      className="p-4"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain"
                      }} />
                  </div>
                  {/* Doctor Profile Card */}
                  <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-lg flex items-center p-2 space-x-3 w-56 animate-wiggleX"> 
                    <Image
                      src="/home/DrSita.jpg"
                      alt="Dr. Sita Rai"
                      // Explicit width
                      width={80}
                      // Explicit height
                      height={100}
                      className="rounded-xl object-cover"
                      style={{
                        maxWidth: "100%",
                        height: "auto"
                      }} />
                    <div>
                      <h3 className="font-semibold text-primary text-lg">Dr. Sita Rai</h3>
                      <p className="text-sm text-secondary">Gynaecologist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

              {/* Bottom Contact Section */}
        <section className="bg-primary text-white py-12 md:py-12 w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="max-w-7xl mx-auto w-full px-0 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full slide-down">
              {/* Consult A Doctor */}
              <div className="flex items-center space-x-4">
                <div className=" bg-opacity-20 rounded-full p-3">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Consult A Doctor</h3>
                  <p className="text-white">Call on : (+977) 970 905 5065</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center space-x-4">
                <div className="bg-opacity-20 rounded-full p-3">
                  <Clock className="h-12 w-12 text-white" />
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
                <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
                 Book An Appointment
               <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
               </button>
               </div>
               </Link>
              </div>
            </div>
          </div>
        </section>


        {/* About Section */}
         <section className="bg-white mb-30 md:mb-32 flex flex-col md:flex-row items-center justify-between gap-16 px-2 py-32 max-w-12xl mx-auto w-full max-w-full">
       {/* Left Image Section */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center mb-90 mr-30 md:-top-40">
            <div className="border-8 border-white rounded-4xl overflow-hidden w-2/3 self-start absolute top-1 left-20">
            <Image
              src="/home/baby1.jpg"
              alt="Baby smiling"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>

          <div className="border-8 border-white rounded-4xl overflow-hidden w-4/5 self-end absolute top-36 left-24">
            <Image
              src="/home/baby2.jpg"
              alt="Happy baby"
              width={700}
              height={600}
              className="object-cover w-full h-full"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>

          {/* Experience Badge */}
         <div className="absolute top-10 left-70 md:left-120 w-40 h-40 rounded-full ">
    <img src="about-experience-circle.png" alt="" className="w-full h-full animate-spinClockwise" />
  </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm text-secondary font-semibold mb-2 slide-down">+ ABOUT US</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-secondary slide-down">
              Fertility Clinic{' '}
              <span className="text-primary">in Damak,<br className="hidden sm:inline" /> Nepal</span>
            </h2>
            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-xl mx-auto md:mx-0 slide-down">
              Welcome to Kopila Fertility and womens Clinic, your trusted partner in
              reproductive health and womens wellness in Damak, Nepal.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-primary font-semibold">
              <div className="flex md:justify-start text-left md:text-left">
                <FaCheckCircle className="text-secondary text-lg mr-2 flex-shrink-0" />Expert Team
              </div>
              <div className="flex md:justify-start text-left md:text-left">
                <FaCheckCircle className="text-secondary text-lg mr-2 flex-shrink-0" />Personalized Care
              </div>
              <div className="flex md:justify-start text-left md:text-left">
                <FaCheckCircle className="text-secondary text-lg mr-2 flex-shrink-0" />State-Of-The-Art Facility
              </div>
              <div className="flex md:justify-start text-left md:text-left">
                <FaCheckCircle className="text-secondary text-lg mr-2 flex-shrink-0" />Comprehensive Support
              </div>
            </div>

            <Link href="/about_Us" passHref>
              <button className="mt-8 px-6 py-3 bg-secondary text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] mx-auto md:mx-0">
                Read More
                <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
             <section className="bg-[#f0f8ff] py-2 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-secondary font-semibold mb-2 slide-down">+ OUR SERVICES</p>
          <h2 className="text-5xl font-extrabold text-secondary slide-down">
            Fertility & Gyne <span className="text-primary">Services for You.</span>
          </h2>
          <p className="text-gray-500 mt-2 fade-in">
            Dedication of Providing Professional Healthcare Services.
          </p>

            <div className="relative z-10 container mx-auto mt-12">
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center">
                <ServiceCard
                  iconUrl="/icon.svg"
                  title="Ovulation Induction"
                  description="A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception."
                  link="/Services"
                />
                <ServiceCard
                  iconUrl="/icon.svg"
                  title="Intrauterine Insemination (IUI)"
                  description="A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization."
                  link="/Services"
                />
                <ServiceCard
                  iconUrl="/icon.svg"
                  title="In Vitro Fertilisation (IVF)"
                  description="A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy."
                  link="/Services"
                />
                <ServiceCard
                  iconUrl="/icon.svg"
                  title="Antenatal Check Up"
                  description="Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby."
                  link="/Services"
                />
              </div>
            </div>
            <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              We believe in using the latest technology and techniques to <br /> ensure the best outcomes for our patients.
            </p>

            <Link href="/Services" passHref>
              <button className="mx-auto mt-6 px-6 py-3 bg-secondary text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
                View All Services
                <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
              </button>
            </Link>
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="relative w-full overflow-hidden bg-white min-h-screen py-16 md:py-24 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative z-10 flex flex-col items-center justify-center px-0 w-full max-w-full">
            <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/visitClinic.jpg"
                  alt="Mother and child"
                  quality={90}
                  className="brightness-[0.7] contrast-[1.1]"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }} />
                <div className="absolute inset-0 bg-primary opacity-60"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center min-h-[400px]">
                <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
                  + Visit Clinic
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Fertility & Gyne Specialist
                </h1>
                <button className="flex items-center px-6 py-3 bg-white text-secondary rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleToggle}>
                  Watch Video <FaPlayCircle className="ml-4 text-2xl" />
                </button>
                {showPlayButton && (
                  <div className="mt-8 w-full max-w-2xl mx-auto">
                    {/* Changed source to a generic YouTube placeholder for demonstrative purposes */}
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=0" title="Placeholder Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4">
              <div className="flex flex-col items-center">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">500+</h2>
                <p className="text-primary text-lg md:text-xl font-medium">Successful Delivery</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Celebrating the joy of motherhood with over 500 successful deliveries.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">10+</h2>
                <p className="text-primary text-lg md:text-xl font-medium">Years Of Experience</p>
                <p className="mt-2 text-gray-600 text-sm">
                  A decade of excellence in fertility and women's healthcare.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">2K+</h2>
                <p className="text-primary text-lg md:text-xl font-medium">Plus Counselling</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Providing personalized guidance through over 2,000 counseling sessions.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-primary text-4xl md:text-5xl font-bold mb-2">7+</h2>
                <p className="text-primary text-lg md:text-xl font-medium">Experience Doctors</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Trusted care from a team of 7+ highly skilled and experienced doctors.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Choose Us Section */}
        <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 w-full">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                + WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">
                Best Fertility <span className="text-primary" > Clinic </span>
              </h2>
              <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                We are committed to sustainability, eco-friendly initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
              {/* Left Column*/}
              <div className="order-1 md:order-1 flex flex-col space-y-8 lg:space-y-12 items-center md:items-end text-center md:text-right">
                <FeatureCard
                  title="Expert Care:"
                  description="With 7+ experienced doctors, we provide compassionate and specialized care for every patient."
                  alignment="left" // This will be handled by the parent's text alignment
                />
                <FeatureCard
                  title="Proven Track Record:"
                  description="Over 500+ successful deliveries reflect our commitment to excellence in maternal health."
                  alignment="left"
                />
                <FeatureCard
                  title="Decade Of Dedication:"
                  description="Backed by 10+ years of experience, we deliver reliable and trusted healthcare services."
                  alignment="left"
                />
              </div>

              {/* Center Image */}
              <div className="order-2 md:order-2 flex justify-center items-center p-4">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                  <Image
                    src="/happbaby.png"
                    alt="Happy Baby"
                    quality={90}
                    className="rounded-full"
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover"
                    }} />
                </div>
              </div>

              {/* Right Column */}
              <div className="order-3 md:order-3 flex flex-col space-y-8 lg:space-y-12 items-center md:items-start text-center md:text-left">
                <FeatureCard
                  title="Comprehensive Support:"
                  description="With 2K+ counseling sessions, we guide you every step of the way on your journey to parenthood."
                  alignment="right" // This will be handled by the parent's text alignment
                />
                <FeatureCard
                  title="State-Of-The-Art Facilities:"
                  description="Equipped with advanced technology to ensure the highest standard of treatment and care."
                  alignment="right"
                />
                <FeatureCard
                  title="Patient-Centered Approach:"
                  description="We focus on individualized care, prioritizing your comfort, privacy, and well-being."
                  alignment="right"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full">
            {/* Left Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/home/how-it-work-img.jpg"
                  alt="Happy Baby"
                  quality={90}
                  className="rounded-3xl"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover"
                  }} />
              </div>
            </div>

            {/* Right Section: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                + WHAT WE DO?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">
                Infertility <span className="text-primary">Treatment </span>
              </h2>
              <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed max-w-xl lg:mx-0 mx-auto">
                Infertility treatment refers to medical interventions and procedures aimed at helping individuals or couples conceive a child when they face challenges in achieving pregnancy naturally.
              </p>

              {/* Accordion/Service List */}
              <div className="mt-8 space-y-4 max-w-xl mx-auto lg:mx-0">
                <AccordionItem
                  icon={FaCalendarAlt}
                  title="Book An Appointment"
                  description="Schedule your visit easily through a call or online to get started on your care journey."
                  initiallyOpen={true}
                />
                <AccordionItem
                    icon={FaClinicMedical}
                    title="Visit Our Clinic"
                    description="Discover our state-of-the-art facilities and meet our expert team for personalized care." initiallyOpen={false}              />
                <AccordionItem
                    icon={FaUserMd}
                    title="Consult With Our Doctors"
                    description="Get expert advice and tailored treatment plans from our highly experienced fertility specialists." initiallyOpen={false}              />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative w-full bg-blue-50 py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 w-full">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                + LATEST UPDATES
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mt-2">
                Our <span className="text-primary">Blog</span>
              </h2>
              <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                Get more information on various topics.
              </p>
            </div>

            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
              <BlogPostCard
                imageUrl="/blog1.jpg"
                title="Understanding Ovulation Induction: A Key To Overcoming Infertility"
                description="Ovulation induction is an essential treatment for women struggling with infertility due to irregular or absent ovulation."
                link="/blog/ovulation-induction"
              />
              <BlogPostCard
                imageUrl="/blog2.jpg"
                title="Intrauterine Insemination (IUI): A Simple And Effective Fertility Solution"
                description="Intrauterine insemination (IUI) is a popular and minimally invasive fertility treatment that helps improve the chances of pregnancy."
                link="/blog/intrauterine-insemination-iui"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}

        <section className="relative bg-white py-16 md:py-24 overflow-hidden px-2 sm:px-4 md:px-6 lg:px-8 xl:px-0 w-full max-w-full">
          <div className="relative z-10 container mx-auto px-0 sm:px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full">
            {/* Left Section: Google Map */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-gray-200">

                {/* Changed YouTube placeholder to a generic Google Maps placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.046944062638!2d87.66986517551062!3d26.65757997680072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f592233c873f41%3A0xb3e64848d530863!2sDamak%2C%20Nepal!5e0!3m2!1sen!2snp!4v1701358052445!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
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
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                + CONTACT NOW
              </span>
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

              <div className="mt-10 flex justify-center lg:justify-start">
                 <Link href="/appointment">
                <div className="group">
                <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
                 Book An Appointment
                <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
                </button>
                </div>
                </Link>
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
      </div>
    </>
  );
}