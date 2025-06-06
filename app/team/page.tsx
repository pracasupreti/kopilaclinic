"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";

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
        <title>Our Team | Kopila Clinic</title>
        <meta name="description" content="Meet the dedicated team at Kopila Clinic, including doctors, nurses, and staff committed to your care." />
        <meta property="og:title" content="Our Team | Kopila Clinic" />
        <meta property="og:description" content="Meet the dedicated team at Kopila Clinic, including doctors, nurses, and staff committed to your care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/team" />
        <meta property="og:image" content="https://yourdomain.com/team/team1.png" />
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
        <div className="bg-green-50 py-32 px-6 rounded-lg shadow max-w-12xl mx-auto mb-12 slide-down">
          <h1 className="text-6xl font-bold text-center">
            <span className="text-pink-600">Our </span>
            <span className="text-green-600">Team</span>
          </h1>
          <p className="text-base text-pink-500 mt-2 text-center">Home / Team</p>
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
                  />
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
    </>
  );
};

export default Team;
