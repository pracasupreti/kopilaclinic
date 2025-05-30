import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; 
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import ServiceCard from "@/components/ServiceCard";

const AboutUsPage = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
     
      <div className="relative z-10 container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mt-2">
            About <span className='text-green-500'> Us</span>
          </h1>
          <p className="text-pink-500 mt-2 text-sm md:text-base">
            Home <span className='text-green-500'> / </span>About Us
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/about.jpg" 
                alt="Happy Baby"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full text-center lg:text-left">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
              + ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mt-2 mb-4">
              Welcome to <span className='text-pink-500'>Kopila Fertility and Womens Clinic</span>
            </h2>
            <p className="text-gray-500 text-base  leading-relaxed mb-6">
              Your trusted partner in reproductive health and women's wellness in Damak, Nepal. Having established in November 2023, we stand at the of fertility to Jaycess Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.
            </p>
           <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-pink-500 font-semibold">
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" /> Expert Team
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Personalized Care
          </div>
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />State-Of-The-Art Facility
          </div>
          <div className="flex items-center gap-2">
             <FaCheckCircle className="text-green-500 text-lg mr-2 flex-shrink-0" />Comprehensive Support
          </div>
        </div>
        </div>
        </div>

        {/* Message from The Director Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            <span className="text-sm md:text-base mb-2 font-medium uppercase tracking-wide text-green-500">
              + Few WORDS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mt-2 mb-4">
              Message from <span className='text-pink-500'>The Director</span>
            </h2>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              Dear valued patients and community members,
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              It is with great pride and heartfelt commitment that I welcome you to Kopila Fertility and Women's Clinic, which opened its doors in November 2023, at Jaycess Chowk, Damak-6, Jhapa, Nepal. Our mission is to provide compassionate and comprehensive fertility and women's healthcare solutions to support your journey towards better health and well-being.
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              At Kopila, we specialize in a range of services, including infertility treatment, intrauterine insemination (IUI), comprehensive antenatal care, and gynecological services. Our state-of-the-art facility is designed with the goal of offering the highest standard of care to women of all ages, ensuring their comfort and privacy in their pursuit of parenthood.
            </p>
            <p className="text-gray-500 text-base md:text-base leading-relaxed mb-4">
              I invite you to experience the difference at Kopila Fertility and Women's Clinic, where your dreams of parenthood and women's wellness are our primary focus.
            </p>
            <p className="text-healofy-dark-gray text-base md:text-lg leading-relaxed font-semibold mt-6">
              Warmest regards,
            </p>
            <p className="text-healofy-dark-gray text-base md:text-lg leading-relaxed">
              Dr. Bibeka <span className="font-semibold">Director</span>
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative w-full max-w-full h-140 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/doctor.jpg" 
                alt="Dr. Bibeka - Director"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 animate-bounce">
        <a
          href="+977 970 905 5065" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
      </div>
      
     {/* Services Section */}
       <section className="bg-[#f0f8ff] py-2 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-[#1ec28b] font-semibold mb-2">+ OUR SERVICES</p>
        <h2 className="text-5xl font-extrabold text-green-500">
          Fertility & Gyne <span className="text-pink-600">Services for You.</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Dedication of Providing Professional Healthcare Services.
        </p>

   
      <div className="relative z-10 container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center">
          <ServiceCard
            iconUrl="/icon.svg"
            title="Ovulation Induction"
            description="A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception."
            link="/Services"
          />
          <ServiceCard
            iconUrl="/icon.svg"
            title="Intrauterine Insemination (IUI)"
            description="A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization."
            link="/Services" 
          />
          <ServiceCard
            iconUrl="/icon.svg" 
            title="In Vitro Fertilisation (IVF)"
            description="A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy."
            link="/Services" 
          />
          <ServiceCard
            iconUrl="/icon.svg"
            title="Antenatal Check Up"
            description="Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby."
            link="/Services"
          />
        </div>
      </div>
       <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto">
          We believe in using the latest technology and techniques to <br/> ensure the best outcomes for our patients.
        </p>

        <button className="max-w-2xl mx-auto mt-6 px-4 py-3 bg-green-600 text-white font-bold rounded-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%]">
          <a href="Services">View All Services</a>
          <span className="text-xl bg-white text-blue-500 rounded-full px-2">↗</span>
        </button>
      </div>
      </section>
    </section>
  );
};

export default AboutUsPage;