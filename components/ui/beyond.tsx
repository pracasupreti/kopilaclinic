"use client";
import Image from 'next/image';

const CareSection = () => {
  return (
    <section className="bg-green-50 w-full mx-auto max-w-7xl min-w-screen">
      <div className="mt-10 mb-10 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 w-full max-w-7xl mx-auto px-4">

          {/* Static Text */}
          <p className="text-primary font-bold text-xl lg:text-2xl py-8 md:py-20 px-4 md:px-8 text-left lg:text-left w-full md:w-auto">
            Beyond medical treatment, <br />we provide:
          </p>

          {/* Scrolling Images: 3 visible at a time */}
          <div className="relative w-[216px] md:w-[288px] lg:w-[360px] xl:w-[732px] 2xl:w-[504px] overflow-hidden">
            <div className="flex animate-scrollXLoop gap-4 w-max mt-4 md:mt-8 px-4 md:px-8">
              {/* Image Set (repeated for seamless looping) */}
              {[1, 2, 3, 4, 1, 2, 3, 4].map((img, idx) => (
                <Image
                  key={idx}
                  src={`/about/${img}.svg`}
                  alt={`Care ${img}`}
                  width={200}
                  height={200}
                  className="w-24 h-24 md:w-46 md:h-46 flex-shrink-0"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareSection;
