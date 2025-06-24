"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import ServiceCard from "@/components/ServiceCard";
import Head from 'next/head';
import ClinicSection from "@/components/ui/ClinicSection";
import Testimonial from "@/components/ui/Testimonial";
import CareSection from "@/components/ui/beyond";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";


const AboutUs = () => {




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
      <section className="relative w-full bg-white overflow-hidden mx-auto max-w-7xl min-w-full">
        <div className="relative z-10">
          <div className="text-center bg-green-50 mb-12 py-28">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              About <span className='text-secondary'> Us</span>
            </h1>
            <AnimateOnScroll>
              <p className="text-primary mt-4 text-sm md:text-base">
                Home <span className='text-secondary'> / </span>About Us
              </p> </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 px-8">
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative -top-20 h-96 rounded-2xl w-full overflow-hidden border border-white">
                <Image
                  src="/about/about.jpg"
                  alt="Happy Baby"
                  height={800}
                  width={600}
                  className="rounded-2xl image-unwrap" />
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-start text-left space-y-4 sm:mt-40 mt-0 lg:mt-18">
              <AnimateOnScroll>
                <span className="flex items-center gap-2 text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  ABOUT US </span>
              </AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4 max-w-lg">
                Welcome to <span className='text-primary'>Kopila Fertility and Womens Clinic</span>
              </h2> <AnimateOnScroll>
                <p className="mt-2 text-gray-500 text-base md:text-lg max-w-xl">
                  Your trusted partner in reproductive health and womens wellness in Damak, Nepal. Having established in November 2023, we stand at the heart of fertility. Jaycess Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.
                </p> </AnimateOnScroll>
              <AnimateOnScroll>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm text-primary font-semibold">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-secondary text-xl mr-2" /> Expert Team
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-secondary text-xl mr-2" /> Personalized Care
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-secondary text-xl mr-2" /> State-Of-The-Art Facility
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-secondary text-xl mr-2" /> Comprehensive Support
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <CareSection />
        </div>

        {/* Message from The Director Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 md:px-4 max-w-7xl mx-auto w-full">
          <div className="w-full text-center lg:text-left order-2 lg:order-1"> <AnimateOnScroll>
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary flex items-center justify-center lg:justify-start">
              <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block mr-2" /> Few WORDS
            </span> </AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
              Message from <span className='text-primary'>The Director</span>
            </h2> <AnimateOnScroll>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">Dear valued patients and community members, </p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">It is with great pride and heartfelt commitment that I welcome you to Kopila Fertility and Womens Clinic, which opened its doors in November 2023, at Jaycess Chowk, Damak-6, Jhapa, Nepal. Our mission is to provide compassionate and comprehensive fertility and womens healthcare solutions to support your journey towards better health and well-being.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">At Kopila, we specialize in a range of services, including infertility treatment, intrauterine insemination (IUI), comprehensive antenatal care, and gynecological services. Our state-of-the-art facility is designed with the goal of offering the highest standard of care to women of all ages, ensuring their comfort and privacy in their pursuit of parenthood.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">I invite you to experience the difference at Kopila Fertility and Womens Clinic, where your dreams of parenthood and womens wellness are our primary focus. </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed  mt-6">Warmest regards,</p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-semibold">Dr. Sita Rai <span className="text-base font-normal">Director</span></p>
            </AnimateOnScroll> </div>
          <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2 py-8 md:py-16 lg:py-24">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[32rem] h-80 sm:h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-lg border border-gray-100 image-unwrap">
              <Image
                src="/about/doctor.jpg"
                alt="Dr. Sita Rai - Director"
                quality={90}
                fill
                className="object-cover rounded-4xl"
              />
            </div>
          </div>
        </div>
        {/* Services Section */}
        <section className="bg-[#f0f8ff] py-32 px-6 ">
          <div className="max-w-7xl mx-auto text-center"> <AnimateOnScroll>
            <p className="text-sm text-[#1ec28b] font-semibold mb-2"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
              OUR SERVICES</p> </AnimateOnScroll>
            <h2 className="text-5xl font-extrabold text-secondary">
              Fertility & Gyne <span className="text-primary">Services for You.</span>
            </h2> <AnimateOnScroll>
              <p className="text-gray-500 mt-4">
                Dedication of Providing Professional Healthcare Services.
              </p> </AnimateOnScroll>
            <div className="relative z-10 container mx-auto px-4 py-12">
              {/* Services Grid */}
              <AnimateOnScroll>
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
              </AnimateOnScroll>
            </div> <AnimateOnScroll>
              <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
                We believe in using the latest technology and techniques to <br /> ensure the best outcomes for our patients.
              </p> </AnimateOnScroll>
            <AnimateOnScroll>
              <a href="/Services">
                <button className="max-w-2xl mx-auto mt-6 px-4 py-3 bg-secondary text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-primary to-primary bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
                  View All Services
                  <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
                </button>
              </a> </AnimateOnScroll>
          </div>
        </section>

        {/* Visit Us Section */}
        <ClinicSection />

        {/* Expertise Section */}
        <section className="relative w-full bg-green-50 py-16 md:py-24 overflow-hidden mx-auto max-w-7xl px-2">
          <div className="relative z-10 container mx-auto px-2 flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Section: Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left relative mt-20">
              <div className="absolute top-12 -left-10 w-20 h-20 animate-pop ">
                <Image src="/icon-star.svg" alt="" height={16} width={16} />
              </div> <AnimateOnScroll>
                <p className="mt-2 text-secondary max-w-2xl mx-auto">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  EXPERTISE EXPERIENCE
                </p> </AnimateOnScroll>
              <h2 className="text-2xl md:text-5xl font-bold text-secondary mb-4">Intrauterine Insemination (IUI)</h2>
              <AnimateOnScroll>
                <p className="text-gray-500 text-base font-semiboldmd:text-base leading-relaxed mb-6">
                  Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a womans uterus around the time of ovulation to increase the chances of fertilization. IUI is often used in cases of male infertility, unexplained infertility, or cervical mucus issues. It is a relatively simple, minimally invasive procedure that can be performed with or without ovulation induction.
                </p> </AnimateOnScroll>
              {/* Key Points */}
              <AnimateOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-semibold">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-secondary text-xl mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Medical History Review</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-secondary text-xl mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Ovulation Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-secondary text-xl mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Semen Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-secondary text-xl mr-3 flex-shrink-0" />
                    <span className="text-primary text-base">Post-Procedure</span>
                  </div>
                </div> </AnimateOnScroll>
            </div>
            {/* Right Section: Image */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-full rounded-xl overflow-hidden shadow-xl image-unwrap">
                <Image
                  src="/about/iui.jpg"
                  alt="Pregnant woman"
                  quality={90}
                  height={900}
                  width={600}
                  className="rounded-4xl h-[600px] w-[740px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonial />
        {/* Floating contact buttons */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 animate-bounce">
          <a
            href="https://wa.me/9779709055065"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <FaWhatsapp className="w-7 h-7 text-white" />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutUs;