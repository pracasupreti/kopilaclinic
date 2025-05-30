"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";
import { ArrowRight,  Star, Baby, Heart, Stethoscope, Phone, Clock  } from "lucide-react";
import { MdMedicalServices, } from "react-icons/md";
import { FaArrowRight, FaBaby, FaCheckCircle, FaPlayCircle, FaPhoneAlt, FaWhatsapp, FaUserMd, FaClinicMedical, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import FeatureCard from "@/components/ui/FeatureCard";
import AccordionItem from "@/components/ui/AccordionItem";
import BlogPostCard from '@/components/BlogPOstCard';
import ServiceCard from "@/components/ServiceCard";



export default function page() {

const [showPlayButton, setShowPlayButton] = useState(false);
const handleToggle = () => {
  setShowPlayButton((prev) => !prev);
};

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col justify-center h-full">
              {/* Decorative elements */}
              <div className="absolute top-12 -left-10 w-20 h-20 opacity-30 ">
                <img src="icon-star.svg" alt="" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-pink-700 mb-6 leading-tight drop-shadow-lg">
                Fertility <span className="text-green-600">and</span> <br/> <span className="text-pink-700">Women's Clinic</span>
              </h1>

              <p className="text-base  text-gray-500 mb-8">
                The clinic specializes in infertility treatment, intrauterine insemination (IUI),
                 antenatal care, and gynecological services.
              </p>

              <Link href="/appointment">
                <button className="bg-green-600 relative overflow-hidden text-white px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8">
                 <a href="/appointment"> Book An Appointment</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

              {/* Google Rating */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="text-pink-500 font-semibold mr-2">Google Rating</span>
                  <span className="text-xl  text-yellow-300">4.7</span>
                  <div className="flex ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-pink-500 text-sm">Based On Public Reviews</span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative flex justify-center items-center">
              <div className="absolute top-2 left-24 w-16 h-16 animate-pop">
                <img src="icon-star.svg" alt="" />
              </div>
              {/* Main Hero Image */}
              <div className="relative w-full max-w-md mx-auto">
                <img src="/hero-img.png" alt="Mother and child" className="w-full h-auto"  style={{minHeight:'600px'}} />
                
              <div className="absolute bottom-70 left-10 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="baby-stroller.svg" alt="" />
              </div>
              <div className="absolute bottom-100 left-100 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="baby.svg" alt="" />
              </div>
               <div className="absolute bottom-10 right-4 w-20 h-20 p-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img src="icon-hero-theeth-3.svg" alt="" />
              </div>
                {/* Doctor Profile Card */}
                <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-lg flex items-center p-2 space-x-3  max-w-full animate-wiggleX">
                  <img
                    src="/DrSita.jpg?height=80&width=60"
                    alt="Dr. Sita Rai"
                    className="w-20 h-30 rounded-xl object-cover border-1 border-pink-400"
                  />
                  <div>
                    <h3 className="font-semibold text-pink-500">Dr. Sita Rai</h3>
                    <p className="text-sm text-green-600">Gynaecologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-12 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Consult A Doctor */}
            <div className="flex items-center space-x-4">
              <div className=" bg-opacity-20 rounded-full p-3">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Consult A Doctor</h3>
                <p className="text-pink-100">Call on : (+977) 970 905 5065</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <div className="bg-opacity-20 rounded-full p-3">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Opening Hours</h3>
                <p className="text-pink-100">Sunday to Friday 07:00AM to 07:00PM</p>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="flex justify-center md:justify-end">
              <Link href="/appointment">
                <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 flex items-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  <a href="/appointment"> Book An Appointment</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section className="bg-white mb-30 md:mb-32 flex flex-col md:flex-row items-center justify-between gap-16 px-2 py-32 max-w-12xl mx-auto">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 mb-10 md:mb-60">
        <div className="border-8 border-white rounded-4xl overflow-hidden w-2/3 self-start">
          <Image
            src="/baby1.jpg"
            alt="Baby smiling"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="border-8 border-white rounded-4xl overflow-hidden w-4/5 self-end absolute top-36 left-24">
          <Image
            src="/baby2.jpg"
            alt="Happy baby"
            width={700}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Experience Badge */}
       <div className="absolute top-10 left-120 w-40 h-40 rounded-full ">
  <img src="about-experience-circle.png" alt="" className="w-full h-full animate-spinClockwise" />
</div>

      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left gap-4">
        <p className="text-sm text-green-500 font-semibold mb-2">+ ABOUT US</p>
        <h2 className="text-4xl font-extrabold leading-snug">
          <span className="text-green-600">Fertility Clinic</span>{' '}
          <span className="text-pink-600">in Damak,<br/> Nepal</span>
        </h2>
        <p className="mt-4 text-gray-500 text-base">
          Welcome to Kopila Fertility and womens Clinic, your trusted partner in
          reproductive health and womens wellness in Damak, Nepal.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-pink-500 font-semibold">
                  <div className="flex items-center gap-2">
                     <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Expert Team
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Personalized Care
                  </div>
                  <div className="flex items-center gap-2">
                     <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />State-Of-The-Art Facility
                  </div>
                  <div className="flex items-center gap-2">
                     <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Comprehensive Support
                  </div>
                </div>

        <button className="mt-6 px-4 py-3 bg-green-500 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
        <a href="/about_Us">   Read More</a>
          <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
        </button>
      </div>
    </section>

     {/* Services Section */}
       <section className="bg-[#f0f8ff] py-2 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ OUR SERVICES</p>
        <h2 className="text-5xl font-extrabold text-green-500">
          Fertility & Gyne <span className="text-pink-600">Services for You.</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Dedication of Providing Professional Healthcare Services.
        </p>

   
      <div className="relative z-10 container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center">
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
       <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe in using the latest technology and techniques to <br/> ensure the best outcomes for our patients.
        </p>

        <button className="max-w-2xl mx-auto mt-6 px-4 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
          <a href="Services">View All Services</a>
          <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
        </button>
      </div>
    </section>

    { /* Visit Us Section */ }
    <section className="relative w-full overflow-hidden bg-white min-h-screen">
      <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 rounded-full opacity-50 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 bg-blue-300 rounded-full opacity-50 transform -rotate-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 md:pt-32 md:pb-20">
      
        <div className="relative w-11/12 max-w-12xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/mother-baby.jpg" 
              alt="Mother and child"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="brightness-[0.7] contrast-[1.1]" 
            />
            <div className="absolute inset-0 bg-pink-500 opacity-60"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center min-h-[400px]">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
              + Visit Clinic
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Fertility & Gyne Specialist
            </h1>
            <button className="flex items-center px-6 py-3 bg-white text-green-500 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleToggle}>
              Watch Video  <FaPlayCircle className="ml-4 text-2xl" />
            </button>
            {showPlayButton && (
              <div className="mt-6 w-full max-w-2xl mx-auto">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/8BH7WFmRs-E" title="Pregnancy: A Month-By-Month Guide | 3D Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            )}
          </div>
        </div>
        <div className="w-11/12 max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">500+</h2>
            <p className="text-pink-500 text-lg md:text-xl font-medium">Successful Delivery</p>
            <p className="mt-2 text-gray-600 text-sm">
              Celebrating the joy of motherhood with over 500 successful deliveries.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">10+</h2>
            <p className="text-pink-500 text-lg md:text-xl font-medium">Years Of Experience</p>
            <p className="mt-2 text-gray-600 text-sm">
              A decade of excellence in fertility and women's healthcare.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">2K+</h2>
            <p className="text-pink-500 text-lg md:text-xl font-medium">Plus Counselling</p>
            <p className="mt-2 text-gray-600 text-sm">
              Providing personalized guidance through over 2,000 counseling sessions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-pink-500 text-4xl md:text-5xl font-bold mb-2">7+</h2>
            <p className="text-pink-500 text-lg md:text-xl font-medium">Experience Doctors</p>
            <p className="mt-2 text-gray-600 text-sm">
              Trusted care from a team of 7+ highly skilled and experienced doctors.
            </p>
          </div>
        </div>
      </div>
    </section>
    { /* Choose Us Section */}
    <section className="relative bg-healofy-gray-bg py-16 md:py-24 overflow-hidden">
      <div className="absolute top-8 left-8 w-6 h-6 bg-healofy-blue-light rounded-full opacity-60"></div>
      <div className="absolute bottom-16 right-16 w-8 h-8 bg-healofy-blue-light rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-healofy-blue-light rounded-full opacity-40 transform rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-healofy-blue-light rounded-full opacity-40 transform -rotate-30"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-gray-200 opacity-70">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z"/>
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-gray-200 opacity-50">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z"/>
        </svg>
      </div>
       <div className="absolute top-[8%] right-[5%] w-10 h-10 bg-blue-200 rounded-full opacity-60"></div>


      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
            + WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-600 mt-2">
            Best Fertility <span className="text-pink-500" > Clinic </span>
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            We are committed to sustainability, eco-friendly initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {/* Left Column*/}
          <div className="order-1 md:order-1 flex flex-col space-y-8 lg:space-y-12 items-end">
            <FeatureCard
              title="Expert Care:"
              description="With 7+ experienced doctors, we provide compassionate and specialized care for every patient."
              alignment="left"
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
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="order-3 md:order-3 flex flex-col space-y-8 lg:space-y-12 items-start">
            <FeatureCard
              title="Comprehensive Support:"
              description="With 2K+ counseling sessions, we guide you every step of the way on your journey to parenthood."
              alignment="right"
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
     <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/how-it-work-img.jpg" 
              alt="Happy Baby"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="rounded-3xl"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
          <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
            + WHAT WE DO?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-2">
            Infertility <span className="text-pink-500">Treatment </span> 
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-lg leading-relaxed max-w-xl lg:mx-0 mx-auto">
            Infertility treatment refers to medical interventions and procedures aimed at helping individuals or couples conceive a child when they face challenges in achieving pregnancy naturally.
          </p>

          {/* Accordion/Service List */}
          <div className="mt-8 space-y-4">
            <AccordionItem
              icon={FaCalendarAlt}
              title="Book An Appointment"
              description="Schedule your visit easily through a call or online to get started on your care journey."
              initiallyOpen={true}
            />
            <AccordionItem
              icon={FaClinicMedical}
              title="Visit Our Clinic"
              description="Discover our state-of-the-art facilities and meet our expert team for personalized care."
            />
            <AccordionItem
              icon={FaUserMd}
              title="Consult With Our Doctors"
              description="Get expert advice and tailored treatment plans from our highly experienced fertility specialists."
            />
          </div>
        </div>
      </div>
    </section>

    {/* Blog Section */}
     <section className="relative w-full bg-healofy-blog-bg py-16 md:py-24 overflow-hidden">

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
            + LATEST UPDATES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-2">
            Our <span className="text-pink-500">Blog</span>
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

    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
   
      <div className="absolute top-0 right-0 w-24 h-24 text-gray-200 opacity-50 transform translate-x-1/4 -translate-y-1/4 z-0">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z"/>
        </svg>
      </div>
    
       <div className="absolute bottom-0 left-0 w-20 h-20 text-gray-200 opacity-50 transform -translate-x-1/4 translate-y-1/4 z-0">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 11V3h-2v8H3v2h8v8h2v-8h8v-2h-8z"/>
        </svg>
      </div>


      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section: Google Map */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-gray-200">
            
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14175.760161471383!2d87.42080344999999!3d26.65751995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f59265f2a1b9b1%3A0x608e08d6c70b2203!2sKopila%20Fertility%20%26%20Womens%20Clinic!5e0!3m2!1sen!2snp!4v1717013444675!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md max-w-[200px]">
                <p className="font-semibold text-sm text-gray-800">Kopila Fertility & Womens Clinic</p>
                <p className="text-xs text-gray-600">Jaycess Chowk, Damak, 57217</p>
                <div className="flex items-center text-xs mt-1">
                    <span className="text-yellow-500 font-bold">5.0</span>
                    <span className="ml-1 text-gray-500">(16 reviews)</span>
                </div>
                <a href="#" className="text-blue-600 text-xs mt-1 block">View larger map</a>
                <div className="flex justify-between mt-2 text-gray-500">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">Directions</span>
                </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
          <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
            + CONTACT NOW
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-2">Consult
            <span className="text-pink-500"> Now</span>
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

          <div className="mt-10 flex lg:justify-start">
            <button className="max-w-2xl mx-auto ml-0 mt-6 px-4 py-3 bg-green-500 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
          <a href="/appointment">Book An Appointment</a>
          <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
        </button>
          </div>
        </div>
      </div>

      {/* Floating contact buttons*/}
      <div className="fixed bottom-12 right-8 z-50 flex flex-col space-y-8">
        <a
          href="+977 970 905 5065" 
          className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaPhoneAlt className="w-7 h-7 text-white" />
        </a>
        <a
          href="+977 970 905 5065" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 animate-bounce"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
      </div>
    </section>
    </div>
  );
}