"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle,  FaWhatsapp,  FaArrowLeft, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import ServiceCard from "@/components/ServiceCard";
import  { useState } from "react";
import Head from 'next/head';

// Testimonials data for slider
const testimonials = [
  {
    name: "Sunita Karki",
    location: "Canada",
    text: "After struggling with infertility for years, I finally found hope at Kopila Fertility and Women Clinic. The team was compassionate and supportive throughout my treatment, and today, I am thrilled to be expecting my first child. Dr. Sita Koirala and her team truly are a blessing for families like mine.",
    image: "/testimonials/testimonial1.jpg",
    stars: 5,
  },
  {
    name: "Anju Rijal",
    location: "Birtamode",
    text: "The antenatal care I received at Kopila Clinic was exceptional. The doctors were attentive, and the staff made me feel calm and worry-free. I felt confident and well-prepared for my delivery thanks to their expert guidance. Highly recommended for all expecting mothers!",
    image: "testimonials/testimonial2.jpg",
    stars: 5,
  },
  {
    name: "Priti Subedi",
    location: "Itahari",
    text: "Kopila Fertility and Women Clinic gave me a new lease on life. After years of irregular cycles and gynecological issues, I finally found the right care here. Their expertise and modern facilities are unmatched in the region. Thanks for restoring my health and confidence!",
    image: "testimonials/testimonial3.jpg",
    stars: 5,
  },
  {
    name: "Mina Paudel",
    location: "Canada",
    text: "My husband and I were overjoyed to find success with the treatment at Kopila Clinic. The patient-centered way they explain the process and made us feel comfortable. We are now proud parents of a beautiful baby girl, and we owe it all to the dedicated team at Kopila!",
    image: "testimonials/testimonial4.jpg",
    stars: 5,
  },
  {
    name: "Srijana Parajuli",
    location: "Bhaktapur",
    text: "Kopila Clinic is a sanctuary for women seeking professional and empathetic healthcare. Their gynecological services are outstanding, and the staff always treats you with respect and understanding. I always recommend this clinic to my friends and family!",
    image: "testimonials/testimonial5.jpg",
    stars: 5,
  },
  {
    name: "Rupa Basnet",
    location: "Canada",
    text: "Kopila Fertility and Women Clinic transformed my life. After struggling for years with irregular cycles and other gynecological complications, I finally received the expert care I needed. Their advice & the test facilities are comprehensive and easy to understand. I'm deeply grateful for the treatment and confidence they’ve given me!",
    image: "testimonials/testimonial6.jpg",
    stars: 5,
  },
  {
    name: "Laxmi Pandey",
    location: "Canada",
    text: "I had been trying to conceive for a long time, and the treatments here were a game-changer. Dr. Sita took the time to understand my medical history, and their approach was both holistic and effective. The care we received was exceptional, and now I'm expecting my first child! I highly recommend this clinic to any woman facing fertility challenges.",
    image: "testimonials/testimonial7.jpg",
    stars: 5,
  },
  {
    name: "Santoshi Maskey",
    location: "Bharatpur",
    text: "The fertility treatments were tailored to my needs, and I felt like I was in great hands from the start. The team was all about empathy, and no matter how trivial some of my questions, I was heard. We had a successful outcome, and I’ll always be grateful for this clinic. Highly recommend them to any couple wanting to start a family.",
    image: "testimonials/testimonial8.jpg",
    stars: 5,
  },
  {
    name: "Rejina Mijhi",
    location: "Canada",
    text: "As a husband, I was hesitant at first about fertility treatments, but the specialists at Kopila Clinic made the process so seamless and stress-free for both my wife and I. Clinic provided me clarity and peace of mind. The environment is welcoming, and the staff are approachable throughout the journey. My wife and I are now expecting and we can’t thank them enough!",
    image: "testimonials/testimonial9.jpg",
    stars: 5,
  },
];


const AboutUs = () => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="relative z-10 container  px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mt-2">
              About <span className='text-green-500'> Us</span>
            </h1>
            <p className="text-pink-500 mt-2 text-sm md:text-base">
              Home <span className='text-green-500'> / </span>About Us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/about/about.jpg"
                  alt="Happy Baby"
                  height={600}
                  width={800}
                  className="rounded-xl"/>
              </div>
            </div>
            <div className="w-full text-center lg:text-left py-12">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
                <span className="flex items-center gap-2 text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
                <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                 ABOUT US </span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mt-2 mb-4">
                Welcome to <span className='text-pink-500'>Kopila Fertility and Womens Clinic</span>
              </h2>
              <p className="text-gray-500 text-base  leading-relaxed mb-6">
                Your trusted partner in reproductive health and womens wellness in Damak, Nepal. Having established in November 2023, we stand at the heart of fertility. Jaycess Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-pink-500 font-semibold">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> Expert Team
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> Personalized Care
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> State-Of-The-Art Facility
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> Comprehensive Support
                </div>
              </div>
            </div>
          </div>

          <div className='bg-green-50  mt-10 mb-10 w-screen md:w-screen mx:w-screen'>
           <div className='flex flex-row md:flex-row'>
            <p className='text-pink-500 font-bold py-20 px-8'>
            Beyond medical treatment, <br />we provide:</p>
            <Image src="/about/1.svg" alt="" height={16} width={16} />
            <Image src="/about/2.svg" alt="" height={16} width={16} />
            <Image src="/about/3.svg" alt="" height={16} width={16} />
            <Image src="/about/4.svg" alt="" height={16} width={16} />
           </div>
          </div>

          {/* Message from The Director Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 ml-8">
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
              <Image src="/icon-star.svg" alt="" height={16} width={16} className='h-2 w-2' /> Few WORDS </span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-2 mb-4">
                Message from <span className='text-pink-500'>The Director</span>
              </h2>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">Dear valued patients and community members, </p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">It is with great pride and heartfelt commitment that I welcome you to Kopila Fertility and Womens Clinic, which opened its doors in November 2023, at Jaycess Chowk, Damak-6, Jhapa, Nepal. Our mission is to provide compassionate and comprehensive fertility and womens healthcare solutions to support your journey towards better health and well-being.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">At Kopila, we specialize in a range of services, including infertility treatment, intrauterine insemination (IUI), comprehensive antenatal care, and gynecological services. Our state-of-the-art facility is designed with the goal of offering the highest standard of care to women of all ages, ensuring their comfort and privacy in their pursuit of parenthood.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">I invite you to experience the difference at Kopila Fertility and Womens Clinic, where your dreams of parenthood and womens wellness are our primary focus. </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed  mt-6">Warmest regards,</p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-semibold">Dr. Sita Rai <span className="text-base font-normal">Director</span></p>
            </div>
            <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative w-full max-w-full h-[35rem] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/about/doctor.jpg"
                  alt="Dr. Sita Rai - Director"
                  quality={90}
                  height={900}
                  width={800}
                  className="rounded-4xl"/>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="bg-[#f0f8ff] py-32 px-6 ">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ OUR SERVICES</p>
            <h2 className="text-5xl font-extrabold text-green-500">
              Fertility & Gyne <span className="text-pink-600">Services for You.</span>
            </h2>
            <p className="text-gray-500 mt-4">
              Dedication of Providing Professional Healthcare Services.
            </p>
            <div className="relative z-10 container mx-auto px-4 py-12">
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center">
                <ServiceCard
                  title="Ovulation Induction"
                  description="A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception."
                  link="/Services"
                />
                <ServiceCard
                  title="Intrauterine Insemination (IUI)"
                  description="A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization."
                  link="/Services"
                />
                <ServiceCard
                  title="In Vitro Fertilisation (IVF)"
                  description="A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy."
                  link="/Services"
                />
                <ServiceCard
                  title="Antenatal Check Up"
                  description="Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby."
                  link="/Services"
                />
              </div>
            </div>
            <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
              We believe in using the latest technology and techniques to <br /> ensure the best outcomes for our patients.
            </p>
            <a href="/Services">
              <button className="max-w-2xl mx-auto mt-6 px-4 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
                View All Services
                <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
              </button>
            </a>
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="relative w-full overflow-hidden bg-white min-h-screen">
          <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 rounded-full opacity-50 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-10 h-10 bg-blue-300 rounded-full opacity-50 transform -rotate-30"></div>
          <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 md:pt-32 md:pb-20">
            <div className="relative w-11/12 max-w-12xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="/visitClinic.jpg"
                  alt="Mother and child"
                  quality={90}
                  height={600}
                  width={600}
                  className="brightness-[0.7] contrast-[1.1]"
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <div className="absolute inset-0 bg-pink-500 opacity-60"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center min-h-[400px]">
                <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide">
                  + Visit  Clinic
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Fertility & Gyne Specialist
                </h1>
                <button
                  className="flex items-center px-6 py-3 bg-white text-green-500 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleToggle}
                >
                  Watch Video  <FaPlayCircle className="ml-4 text-2xl" />
                </button>
                {showPlayButton && (
                  <div className="mt-6 w-full max-w-2xl mx-auto">
                    <iframe
                      width="853"
                      height="480"
                      src="https://www.youtube.com/embed/8BH7WFmRs-E"
                      title="Pregnancy: A Month-By-Month Guide | 3D Animation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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
                  A decade of excellence in fertility and womens healthcare.
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

        {/* Expertise Section */}
        <section className="relative w-full bg-green-50 py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Section: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left relative">
              <div className="absolute top-12 -left-10 w-20 h-20 animate-pop ">
                <Image src="/icon-star.svg" alt="" height={16} width={16} />
              </div>
              <p className="mt-2 text-green-500 max-w-2xl mx-auto">
                + EXPERTISE EXPERIENCE
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Intrauterine Insemination (IUI)</h2>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-6">
                Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a womans uterus around the time of ovulation to increase the chances of fertilization. IUI is often used in cases of male infertility, unexplained infertility, or cervical mucus issues. It is a relatively simple, minimally invasive procedure that can be performed with or without ovulation induction.
              </p>
              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                  <span className="text-pink-500 text-base">Medical History Review</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                  <span className="text-pink-500 text-base">Ovulation Monitoring</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                  <span className="text-pink-500 text-base">Semen Analysis</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                  <span className="text-pink-500 text-base">Post-Procedure</span>
                </div>
              </div>
            </div>
            {/* Right Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-full aspect-[8/9] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/about/iui.jpg"
                  alt="Pregnant woman"
                  quality={90}
                  height={800}
                  width={600}
                  className="rounded-4xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
                + TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-green-500 mt-2">
                Our <span className='text-pink-500'>Testimonials</span>
              </h2>
              <p className="text-gray-500 mt-4 text-base md:text-base max-w-2xl mx-auto">
                Happy Parents
              </p>
            </div>
            <section className="bg-light-gray py-10 md:py-40">
              <div className="max-w-6xl bg-white flex flex-col md:flex-row relative mx-auto">
                {/* Image Card Section */}
                <div className="relative md:w-1/2 lg:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-64 md:h-auto">
                  <Image
                    src="/testimonials.jpg"
                    alt="Mother and child smiling"
                    className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    height={400}
                    width={400}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                  {/* Rating Box */}
                  <div className="absolute -bottom-9 right-0 bg-green-700 text-white p-4 pr-8 rounded-4xl shadow-md flex flex-col items-start border-5">
                    <span className="text-4xl font-bold mb-1">4.7/5</span>
                    <p className="text-sm leading-tight mb-1 text-left">This rate is given by user after visiting our location</p>
                    <div className="flex text-yellow-400 text-lg mb-1">
                      <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span className="text-yellow-300">&#9733;</span>
                    </div>
                    <p className="text-xs font-bold uppercase">For Excellence Services</p>
                  </div>
                </div>
                {/* Testimonial Content Section */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  {/* Testimonial Card Slider */}
                  <div className="w-full text-center lg:text-left py-12">
              <p className="text-lg md:text-xl leading-relaxed italic mb-6">“{testimonials[currentTestimonial].text}”</p>
                      <div className="flex flex-col items-center mt-4">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          width={64}
                          height={64}
                          className="rounded-full h-16 w-16 object-cover mb-2"/>
                        <h4 className="font-semibold text-lg text-pink-500">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-xs text-gray-500">{testimonials[currentTestimonial].location}</p>
                      </div>
               <div className="flex justify-center lg:justify-start mt-6 space-x-4">
                  <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      aria-label="Previous testimonial">
                      <FaArrowLeft />
                  </button>
                  <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                      aria-label="Next testimonial">
                      <FaArrowRight />
                  </button>
              </div>
              </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Floating contact buttons */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 animate-bounce">
          <a
            href="https://wa.me/9779709055065"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <FaWhatsapp className="w-7 h-7 text-white" />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutUs;