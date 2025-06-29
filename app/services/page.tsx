'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 20,
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Ovulation induction',
      desc: 'A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception.',
    },
    {
      title: 'Intrauterine insemination (IUI)',
      desc: 'A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization.',
    },
    {
      title: 'In vitro fertilisation (IVF)',
      desc: 'A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy.',
    },
    {
      title: 'Antenatal check Up',
      desc: 'Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby.',
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOD)',
      desc: 'Polycystic Ovary Syndrome (PCOD) is a common hormonal disorder affecting women of reproductive age.',
    },
    {
      title: 'Endometriosis',
      desc: 'Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus, causing pain, heavy periods, and potential infertility.',
    },
    {
      title: 'Uterine Fibroids',
      desc: 'Uterine fibroids are non-cancerous growths in or on the uterus that can cause heavy bleeding, pelvic pain, and fertility problems.',
    },
    {
      title: 'Adenomyosis',
      desc: 'Adenomyosis occurs when the tissue that normally lines the uterus grows into the muscular wall of the uterus.',
    },
    {
      title: 'Pelvic Inflammatory Disease (PID)',
      desc: 'Pelvic Inflammatory Disease (PID) is an infection of the female reproductive organs, often caused by sexually transmitted infections (STIs).',
    },
    {
      title: 'Menstrual Irregularities',
      desc: 'Menstrual irregularities refer to abnormal menstrual cycles, which can include missed periods, excessively heavy or light bleeding.',
    },
    {
      title: 'Ovarian Cysts',
      desc: 'Ovarian cysts are fluid-filled sacs that form on the ovaries. Most ovarian cysts are benign and do not cause symptoms.',
    },
    {
      title: 'Vaginitis',
      desc: 'Vaginitis is an inflammation or infection of the vagina that can cause symptoms such as itching, burning, unusual discharge, and discomfort during intercourse.',
    },
  ];

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
      <div className="min-h-screen bg-gray-50 max-w-7xl mx-auto">
        <div className="text-center bg-green-50 mb-12 py-28">
      <h1 className="text-4xl md:text-5xl font-bold text-primary">
        Our <span className='text-secondary'> Services</span>
      </h1>
      <p className="text-primary mt-4 text-sm md:text-base">
        Home <span className='text-secondary'> / </span>Our Services
      </p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 py-12 pb-30">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-4xl shadow-lg transition duration-300 group p-6 flex flex-col h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div
                className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-primary z-0 text-white transition-all duration-700 pointer-events-none"
                style={{ transitionProperty: 'height,opacity' }}
              />
              <div className="relative z-10 font-relaxed py-4"> {/* Content inside the service card */ }
                <div className="flex items-center mb-4 group-hover:filter group-hover:brightness-200 group-hover:grayscale group-hover:contrast-0">
                  <Image
                    src="/icon.svg"
                    alt="Flower Icon"
                    width={32}
                    height={32}
                    className="flex-shrink-0 h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 text-left group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base mb-6 flex-grow group-hover:text-white text-left leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
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
}