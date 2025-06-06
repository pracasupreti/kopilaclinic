'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Services() {
  useEffect(()=>{
    AOS.init({
      duration:900,
      delay:20,
      once:true
    });
  },[]);
  const services=[
    {
      title:"Ovulation induction",
      desc:"A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception.",
    },
    {
      title:"Intrauterine insemination (IUI)",
      desc:"A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization.",
    },
    {
      title:"In vitro fertilisation (IVF)",
      desc:"A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy.",

    },
    {
      title:"Antenatal check Up",
      desc:"Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby.",
    },
    {
      title:"Polycystic Ovary Syndrome (PCOD)",
      desc:"Polycystic Ovary Syndrome (PCOD) is a common hormonal disorder affecting women of reproductive age.",
    },
    {
      title:"Endometriosis",
      desc:"Endometriosis is a condition in which tissue similar to the uterine lining grows outside the uterus, causing pain, heavy periods, and potential infertility. ",

    },
    {
      title:"Uterine Fibroids",
      desc:"Uterine fibroids are non-cancerous growths in or on the uterus that can cause heavy bleeding, pelvic pain, and fertility problems. ",
    },
    {
      title:"Adenomyosis",
      desc:"Adenomyosis occurs when the tissue that normally lines the uterus grows into the muscular wall of the uterus etc.",
    },
    {
      title:"Pelvic Inflammatory Disease (PID)",
      desc:"Pelvic Inflammatory Disease (PID) is an infection of the female reproductive organs, often caused by sexually transmitted infections (STIs).",
    },
    {
      title:"Menstrual Irregularities",
      desc:"Menstrual irregularities refer to abnormal menstrual cycles, which can include missed periods, excessively heavy or light bleeding .",
    },
    {
      title:"Ovarian Cysts",
      desc:"Ovarian cysts are fluid-filled sacs that form on the ovaries. Most ovarian cysts are benign and do not cause symptoms ..",
    },
    {
      title:"Vaginitis",
      desc:"Vaginitis is an inflammation or infection of the vagina that can cause symptoms such as itching, burning, unusual discharge, and discomfort during intercourse."
    }
  
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
        { services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"

            className="bg-white rounded-3xl shadow-md p-6 hover:shadow-lg transition duration-300 hover:bg-pink-600 group"
          >
            <img
              src="icon.svg"
              alt="icon"
              className="h-12 w-12 mb-3"
            />
            <h2 className=" text-pink-600 font-semibold text-[16px] mb-[15px] group-hover:text-white">
              {service.title}
            </h2>
            <p className="text-gray-600 text-[14px]  font-normal text-left mb-5 group-hover:text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}