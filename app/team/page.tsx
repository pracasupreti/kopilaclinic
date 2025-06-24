"use client";
import React from "react";
import  { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Sita Rai",
    title: "Obstetrician And Gynecologist, Fertility Specialist",
    image: "/team/team1.png",
  },
  {
    name: "Laxmi Prasad Rai",
    title: "Director",
    image: "/team/team2.png",
  },
  {
    name: "Dr. Santosh Khatri",
    title: "Coordinator",
    image: "/team/team3.png",
  },
  {
    name: "Susma Rai",
    title: "Nurse",
    image: "/team/team4.png",
  },
];

const Team = () => {
  const teamSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("fade-in");
    const timer = setTimeout(() => {
      teamSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="bg-[#f3fbff] min-h-screen">
        {/* Animation overlay */}
        <style jsx global>{`
          body.fade-in {
            animation: fadeInBg 1.2s;
          }
          @keyframes fadeInBg {
            from { background: #fff; }
            to { background: #f3fbff; }
          }
          .slide-down {
            opacity: 0;
            transform: translateY(-60px);
            animation: slideDown 1.2s forwards;
          }
          @keyframes slideDown {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Heading Section with slide animation */}
        <div className="bg-green-50 py-32 px-6 rounded-lg max-w-12xl mx-auto mb-12 slide-down">
          <h1 className="text-6xl font-bold text-center">
            <span className="text-primary">Our </span>
            <span className="text-secondary">Team</span>
          </h1>
          <p className="text-base text-primary mt-2 text-center">Home / Team</p>
        </div>

        {/* Team Members Section */}
        <div
          className="max-w-12xl mx-auto py-20"
          ref={teamSectionRef}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
                <h4 className="text-pink-700 font-semibold mt-6 text-lg">{member.name}</h4>
                <p className="text-base text-gray-600 mt-2 whitespace-pre-line">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
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
};

export default Team;
