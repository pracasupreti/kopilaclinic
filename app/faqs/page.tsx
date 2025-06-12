'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect, useRef, useState } from "react";

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 20,
      once: true
    });
    // Animate page on mount
    setTimeout(() => {
      document.getElementById('faq-main')?.classList.add('aos-animate');
    }, 100);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Refs for each section
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const faqs = [
    // ... (same as before)
    {
      question: "What Is Ovulation Induction?",
      answer:
        "Ovulation induction is a fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, improving the chances of conception.",
    },
    {
      question: "Who Is A Candidate For Ovulation Induction?",
      answer:
        "Women who do not ovulate regularly or at all, often due to conditions like PCOS, may be good candidates.",
    },
    {
      question: "What Medications Are Used For Ovulation Induction?",
      answer:
        "Common medications include Clomiphene Citrate and Letrozole, which stimulate egg production.",
    },
    {
      question: "What Are The Risks Of Ovulation Induction?",
      answer:
        "Risks may include multiple pregnancies, ovarian hyperstimulation syndrome (OHSS), and side effects from medications.",
    },
    {
      question: "How Is Ovulation Monitored During Treatment?",
      answer:
        "Monitoring is done through ultrasound and blood tests to track follicle development and hormone levels.",
    },
  ];
  const faqs1 = [
    // ... (same as before)
    {
      question: "What is Intrauterine Insemination (IUI)?",
      answer: "Intrauterine Insemination (IUI) is a fertility treatment that involves placing washed and prepared sperm directly into a woman’s uterus during ovulation to increase the chances of conception.",
    },
    {
      question: "Who IS A Good Candiate for IUI?",
      answer: "IUI is ideal for individuals or couples dealing with unexplained infertility, mild male factor infertility, ovulatory disorders, or cervical mucus issues. It is also an option for those using donor sperm.",
    },
    {
      question: "What Is The Success Rate of IUI?",
      answer: "The success rate of IUI varies between 10-20% per cycle, depending on factors such as the age of the woman, the cause of infertility, and the quality of sperm and eggs.",
    },
    {
      question: "What Are The Risks Associated with IUI?",
      answer: "Risks of IUI include multiple pregnancies (if fertility drugs are used), mild cramping or discomfort during the procedure, and a very low risk of infection.",
    },
    {
      question: "How Should I Prepare For An IUI Procedure?",
      answer: "Preparation includes monitoring ovulation cycles, avoiding unprotected intercourse before the procedure, and ensuring a semen sample is collected and properly prepared."
    },
  ];
  const faqs2 = [
    // ... (same as before)
    {
      question: "What Is In Vitro Fertilization(IVF)?",
      answer: "In Vitro Fertilization (IVF) is a fertility treatment where eggs are fertilized by sperm outside the body in a laboratory and then transferred to the uterus to achieve pregnancy.",
    },
    {
      question: "Who can Benefit From IVF?",
      answer: "IVF is often recommended for individuals or couples facing issues such as blocked fallopian tubes, severe male factor infertility, endometriosis, unexplained infertility, or those using donor eggs or sperm.",
    },
    {
      question: "What Is The Success Rate of IVF?",
      answer: "IVF success rates depend on factors such as the age of the woman, the quality of eggs and sperm, and underlying medical conditions. On average, success rates range from 20-40% per cycle.",
    },
    {
      question: "Are There Risks Associated with IVF?",
      answer: "Risks of IVF include ovarian hyperstimulation syndrome (OHSS), multiple pregnancies, ectopic pregnancy, and a small risk of complications from egg retrieval.",
    },
    {
      question: "How Should I Prepare For An IVF Cycle?",
      answer: "Preparation for IVF involves undergoing fertility testing, following a prescribed treatment plan, maintaining a healthy lifestyle, and managing stress effectively to improve outcomes.",
    },
  ];
  const faqs3 = [
    // ... (same as before)
    {
      question: "What is An Antenatal Check-Up?",
      answer: "An antenatal check-up is a routine medical appointment during pregnancy to monitor the health of the mother and developing baby, ensuring early detection and management of potential complications.",
    },
    {
      question: "Why are Antenatal Check-Ups Important?",
      answer: "Antenatal check-ups help track the growth and development of the baby, monitor maternal health, and identify risks such as gestational diabetes, high blood pressure, or preeclampsia, allowing timely intervention.",

    },
    {
      question: "How Often Should I Have Antenatal Check-Ups?",
      answer: "The frequency of antenatal check-ups varies by stage of pregnancy: monthly visits during the first two trimesters, bi-weekly in the third trimester, and weekly as the due date approaches.",
    },
    {
      question: "What Tests Are Conducted During Antenatal check-Ups?",
      answer: "Tests during antenatal check-ups may include blood tests, urine analysis, ultrasound scans, glucose tolerance tests, and screenings for infections like HIV or hepatitis.",
    },
    {
      question: "How can I Prepare For My Antenatal Check-Up?",
      answer: "To prepare for an antenatal check-up, keep a list of questions or concerns, track your weight, and note any symptoms. Ensure you carry any required medical records or test results.",
    }
  ];

  const sidebarLinks = [
    "Ovulation Induction",
    "Intrauterine Insemination (IUI)",
    "In Vitro Fertilization (IVF)",
    "Antenatal Check-Up",
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Scroll to section and trigger animation
  const handleSidebarClick = (i: number) => {
    sectionRefs[i].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Re-trigger AOS animation
    setTimeout(() => {
      sectionRefs[i].current?.classList.remove('aos-animate');
      // Force reflow
      void sectionRefs[i].current?.offsetWidth;
      sectionRefs[i].current?.classList.add('aos-animate');
    }, 300);
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
    <main
      id="faq-main"
      className="bg-white min-h-screen p-10 flex gap-10 mx-auto container relative opacity-0 aos-init"
      data-aos="fade-in"
    >
      {/* Sidebar */}
      <aside className="bg-blue-50 rounded-2xl p-6 w-72 shadow  h-auto sticky top-10 self-start">
        <ul className="space-y-6 text-pink-600 font-semibold text-lg">
          {sidebarLinks.map((link, i) => (
            <li key={i} className="flex justify-between items-center cursor-pointer" onClick={() => handleSidebarClick(i)}>
              {link} <span className="text-blue-400">↗️</span>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1">
        <div className="flex flex-col">
          <section
            ref={sectionRefs[0]}
            className="flex-1"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-pink-600 mb-6">
              Ovulation Induction
            </h1>
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="border rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 text-xl font-semibold text-pink-500 flex justify-between items-center"
                >
                  {faq.question}
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 text-center">{openIndex === index ? "⬇️" : "➡️"}</div>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-500">{faq.answer}</div>
                )}
              </div>
            ))}
          </section>
          <section
            ref={sectionRefs[1]}
            className="mt-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-pink-600 mb-6">
              Intrauterine Insemination (IUI)
            </h1>
            {faqs1.map((faq, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="border rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 text-xl font-semibold text-pink-500 flex justify-between items-center"
                >
                  {faq.question}
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 text-center">{openIndex === index ? "⬇️" : "➡️"}</div>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-500">{faq.answer}</div>
                )}
              </div>
            ))}
          </section>
          <section
            ref={sectionRefs[2]}
            className="mt-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-pink-600 mb-6">
              In Vitro Fertilization (IVF)
            </h1>
            {faqs2.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="border rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 text-xl font-semibold text-pink-500 flex justify-between items-center"
                >
                  {faq.question}
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 text-center">{openIndex === index ? "⬇️" : "➡️"}</div>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-500">{faq.answer}</div>
                )}
              </div>
            ))}
          </section>
          <section
            ref={sectionRefs[3]}
            className="mt-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-pink-600 mb-6">
              Antenatal check-Up
            </h1>
            {faqs3.map((faq, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="border rounded-xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 text-xl font-semibold text-pink-500 flex justify-between items-center"
                >
                  {faq.question}
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 text-center">{openIndex === index ? "⬇️" : "➡️"}</div>
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-500">{faq.answer}</div>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
    </>
  );
}

// Add this to your global CSS if not already present for fade-in effect
/*
[data-aos="fade-in"] {
  opacity: 0;
  transition-property: opacity;
  transition-duration: 900ms;
}
[data-aos="fade-in"].aos-animate {
  opacity: 1;
}
*/ 