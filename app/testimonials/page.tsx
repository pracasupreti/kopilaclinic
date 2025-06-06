"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// Add Framer Motion for animation
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
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
          className="text-center bg-green-50 py-32 px-4"
          initial="hidden"
          animate={headerControls}
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h1 className="text-6xl font-bold text-green-500 mb-2">Testimonials</h1>
          <p className="text-sm text-pink-500 font-semibold">Home / Testimonials</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-12">
          {testimonials.map((t, idx) => {
            const ref = useRef(null);
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
                  <img src="testimonials/icon-quote.svg" alt="" />
                </div>
                <div className="text-yellow-400 text-xl mb-2 font-semibold">★★★★★</div>
                <p className="text-base text-gray-500 mb-4">“{t.text}”</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-xl text-pink-500">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Testimonials;
