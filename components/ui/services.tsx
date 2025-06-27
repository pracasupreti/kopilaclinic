import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import ServiceCard from "../ServiceCard";



const ServicesSection: React.FC = () => (
   <section className="bg-[#f0f8ff] py-24 px-6 ">
          <div className="max-w-7xl mx-auto text-center"><AnimateOnScroll>
            <p className="text-sm text-secondary font-semibold mb-4 slide-up"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
              OUR SERVICES</p> </AnimateOnScroll>
            <h2 className="text-2xl lg:text-5xl font-extrabold text-secondary slide-side">
              Fertility & Gyne <span className="text-primary">Services for You.</span>
            </h2> <AnimateOnScroll>
              <p className="text-gray-500 mt-8 slide-up">
                Dedication of Providing Professional Healthcare Services.
              </p></AnimateOnScroll>

            <div className="relative z-10 container mx-auto mt-12 text-left">
              {/* Services Grid */}
              <AnimateOnScroll>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center slide-up">
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
              <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                We believe in using the latest technology and techniques to <br /> ensure the best outcomes for our patients.
              </p> </AnimateOnScroll>
            <AnimateOnScroll>
              <Link href="/Services" passHref>
                <button className="mx-auto mt-6 px-6 py-3 bg-secondary text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
                  View All Services
                  <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
                </button>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
);

export default ServicesSection;