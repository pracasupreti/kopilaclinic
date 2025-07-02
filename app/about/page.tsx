"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import ClinicSection from "@/components/ui/ClinicSection";
import Testimonial from "@/components/ui/Testimonial";
import CareSection from "@/components/ui/beyond";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import ServicesSection from "@/components/ui/services";


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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 px-8 w-full max-w-7xl mx-auto">
            <div className="w-full flex justify-center lg:justify-end">
              <div className="absolute lg:relative right-6 right-0 top-50 md:top-20 lg:top-8 h-70  lg:h-96 rounded-2xl w-60 lg:w-full overflow-hidden border border-white">
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
                <span className="flex items-center gap-2 text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary">
                  <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
                  ABOUT US </span>
              </AnimateOnScroll>
              <h2 className="text-xl lg:text-4xl md:text-4xl font-bold text-secondary mt-2 mb-4 max-w-lg">
                Welcome to <span className='text-primary'>Kopila Fertility and Womens Clinic</span>
              </h2> <AnimateOnScroll>
                <p className="mt-2 text-gray-500 text-base md:text-lg max-w-xl">
                  Your trusted partner in reproductive health and Womens wellness in Damak, Nepal. Newly established in November 2024, our state-of-the-art facility in Jaycees Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.
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
          <div className="w-full text-left lg:text-left order-1 lg:order-1"> <AnimateOnScroll>
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-secondary flex lg:justify-start">
              <Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block mr-2" /> Few WORDS
            </span> </AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
              Message from <span className='text-primary'>The Director</span>
            </h2> <AnimateOnScroll>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">Dear Valued Patients and Community Members, </p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">It is with great pride and heartfelt commitment that I welcome you to Kopila Fertility and Womens Clinic, which opened its doors on November 24, 2024, at Jaycees Chowk, Damak-6, Jhapa, Nepal. Our mission is to provide compassionate, professional, and personalized healthcare solutions to support your journey toward better health and well-being.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">At Kopila, we specialize in a range of services, including infertility treatments, intrauterine insemination (IUI), comprehensive antenatal care, and gynecological services. Our state-of-the-art facility is designed with the goal of offering the highest standard of care for women of all ages and supporting families in their pursuit of parenthood.</p>
              <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">I invite you to experience the difference at Kopila Fertility and Womens Clinic, where your dreams of parenthood and Womens wellness are our primary focus. </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed  mt-6">Warmest regards,</p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-semibold">Dr. Sita Rai <span className="text-base font-normal">Director</span></p>
            </AnimateOnScroll> </div>
          <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2 py-8 md:py-16 lg:py-24">
            <div className="relative w-264 sm:w-80 md:w-96 lg:w-[32rem] h-80 sm:h-96 md:h-[32rem] rounded-4xl overflow-hidden border border-gray-100 image-unwrap">
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
        <ServicesSection />
        {/* Visit Us Section */}
        <ClinicSection />

        {/* Expertise Section */}
        <section className="relative w-full bg-green-50 lg:py-16 md:py-24 overflow-hidden mx-auto max-w-7xl px-2">
          <div className="relative z-10 container mx-auto px-2 flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left Section: Text Content */}
            <div className="w-full lg:w-1/2 text-left lg:text-left relative mt-20">
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
                  Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a woman’s uterus around the time of ovulation to increase the chances of fertilization. IUI is often used in cases of male infertility, unexplained infertility, or cervical mucus issues. It is a relatively simple, minimally invasive procedure that can be performed with or without ovulation induction.
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