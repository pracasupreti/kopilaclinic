"use client";
import React from "react";
import  { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Sunita Karki",
    location: "Damak",
    text: "After struggling with infertility for years, I finally found hope at Kopila Fertility and Womens Clinic. The team was compassionate and supportive throughout my treatment, and today, I am thrilled to be expecting my first child. Dr. Sita Rai and her team are truly a blessing for families like mine.",
    image: "/testimonials/testimonial1.jpg",
    stars: 5,
  },
  {
    name: "Anju Rijal",
    location: "Birtamode",
    text: "The antenatal care I received at Kopila Clinic was exceptional. The doctors were attentive, and the staff made me feel cared for during every visit. I felt confident and well-prepared for my delivery thanks to their expert guidance. Highly recommend it to all expecting mothers!",
    image: "/testimonials/testimonial2.jpg",
    stars: 5,
  },
  {
    name: "Priti Subedi",
    location: "Itahari",
    text: "Kopila Fertility and Womens Clinic gave me a new lease on life. After years of irregular cycles and gynecological issues, I finally found the right care here. Their expertise and modern facilities are unmatched in the region. Thank you for restoring my health and confidence!",
    image: "/testimonials/testimonial3.jpg",
    stars: 5,
  },
  {
    name: "Mina Paudel",
    location: "Damak",
    text: "My husband and I were overjoyed to find success with IUI treatment at Kopila Clinic. The staff explained every step of the process and made us feel comfortable. We are now proud parents of a beautiful baby girl, and we owe it all to the dedicated team at Kopila!",
    image: "/testimonials/testimonial4.jpg",
    stars: 5,
  },
  {
    name: "Srijana Parajuli",
    location: "Bhadrapur",
    text: "Kopila Clinic is a sanctuary for women seeking professional and empathetic healthcare. Their gynecological services are outstanding, and the staff always treats you with respect and understanding. I always recommend this clinic to my friends and family.",
    image: "/testimonials/testimonial5.jpg",
    stars: 5,
  },
  {
    name: "Rupa Basnet",
    location: "Damak",
    text: "Kopila Fertility and Womens Clinic transformed my life. After struggling for years with irregular cycles and other gynecological challenges, I finally received the expert care I needed. Their state-of-the-art facilities and compassionate team are truly unparalleled. I'm deeply grateful for the restored health and confidence they’ve given me!",
    image: "/testimonials/testimonial6.jpg",
    stars: 5,
  },
  {
    name: "Laxmi Pandey",
    location: "Ilam",
    text: "I had been trying to conceive for a long time, and the treatments here were a game-changer. Dr. Sita took the time to understand my medical history, and her approach was both holistic and effective. The care I received was exceptional, and I am now expecting my first child! I recommend this clinic to any woman facing fertility challenges.",
    image: "/testimonials/testimonial7.jpg",
    stars: 5,
  },
  {
    name: "Sarita Maskey",
    location: "Biratnagar",
    text: "The fertility treatments were tailored to my needs, and I felt like I was in great hands from the start. The staff was always kind, attentive, and ready to answer all my questions. I’ve had two successful pregnancies with the help of their expert team, and I couldn't be more grateful for the support they provided every step of the way.",
    image: "/testimonials/testimonial8.jpg",
    stars: 5,
  },
  {
    name: "Rajesh Majhi",
    location: "Biratnagar",
    text: "As a husband, I was hesitant at first about fertility treatments, but the specialists at Kopila Clinic made the process seamless and stress-free for both my wife and me. Clinc Provided me not only the professional expertise but also emotional support throughout my journey. Their professionalism and expertise turned our dream of parenthood into reality. We can’t thank them enough!. ",
    image: "/testimonials/testimonial9.jpg",
    stars: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const Testimonials = () => {
  // Animation for the page header
  const headerControls = useAnimation();
  useEffect(() => {
    headerControls.start("visible");
  }, [headerControls]);

  return (
    <>
    <Head>
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
    <motion.div
      className="bg-white mb-26"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-12xl mx-auto text-center">
        <motion.div
          className="text-center bg-green-50 py-20 lg:py-32 px-4"
          initial="hidden"
          animate={headerControls}
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-2">Testimonials</h1>
          <p className="text-sm text-primary font-semibold">Home / Testimonials</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 lg:px-8">
          {testimonials.map((t, idx) => {
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useRef(null);
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const inView = useInView(ref, { once: true, margin: "-100px" });
            return (
              <motion.div
                ref={ref}
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md text-left border border-gray-200"
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={idx}
              >
                <div>
                  <Image src="/testimonials/icon-quote.svg" alt="" height={32} width={32} />
                </div>
                <div className="text-yellow-400 text-xl mb-2 py-4 font-bold">★ ★ ★ ★ ★</div>
                <p className="text-base text-gray-500 mb-4 leading-relaxed">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={40}
                    className="rounded-full h-16 w-16"
                  />
                  <div>
                    <h4 className="font-semibold text-xl text-primary">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
    
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
    </>
  );
};

export default Testimonials;
