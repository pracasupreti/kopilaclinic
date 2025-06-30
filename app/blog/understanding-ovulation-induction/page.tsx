"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-8 md:py-12 lg:py-30 text-center slide-side px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-primary leading-tight sm:leading-snug">Understanding Ovulation Induction: A Key to Overcoming Infertility</h1>
        {/* Author and Date Information */}

        <AnimateOnScroll>
          <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
            <User />
            <span className="flex px-2 text-primary">

              Sanna Soctos
            </span>{' '}
            / <Clock /> <span className="flex px-2 text-primary">Jan 2025</span>
          </p></AnimateOnScroll>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Image src="/blog/ovulation-induction.jpg"
          alt="ovulation-induction"
          height={800}
          width={800}
          className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
        />
        <div className="px-0 sm:px-2 md:px-10 lg:px-20"><AnimateOnScroll>
          <section className="text-txt leading-relaxed mb-8 text-base slide-down">
            <p className="mb-4 py-2">
              Ovulation induction is an essential treatment for women struggling with infertility due to irregular or absent ovulation. This blog explores how ovulation induction works, the medications involved, and how it can increase the chances of conception. Learn how this treatment can bring hope to those wishing to start or expand their families.
            </p>
            <p>
              Ovulation induction is a medical procedure designed to stimulate the ovaries to release eggs, enabling conception for women with ovulatory disorders. This process often involves the use of medications such as Clomiphene Citrate or injectable gonadotropins to regulate or enhance ovulation. Monitoring through ultrasound and blood tests ensures the treatment is tailored to the individual&#39;s needs.
            </p>
          </section></AnimateOnScroll>
          <AnimateOnScroll>
            <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
              <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
              <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                &quot;Ovulation induction can be a beacon of hope for couples facing infertility. It bridges the gap between aspiration and reality, bringing the dream of parenthood closer.&quot;
              </p>
            </section></AnimateOnScroll>
          <AnimateOnScroll>
            <section className="text-txt leading-relaxed mb-8 slide-down">
              <p>
                Success rates for ovulation induction vary depending on the underlying cause of infertility and the individual&#39;s response to treatment. However, many women have achieved successful pregnancies through this approach, making it a cornerstone in fertility treatments. While it is often used in conjunction with other procedures like intrauterine insemination (IUI), it can also be effective as a standalone treatment.
              </p>
            </section></AnimateOnScroll>

          <section className="mb-8">
            {/* Section title */}
            <AnimateOnScroll>
              <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Understanding the Medications</h2>
              <p className="text-txt leading-relaxed mb-6 slide-down">
                The two primary categories of medications used in ovulation induction are oral and injectable. Oral medications like Clomiphene Citrate are typically the first line of treatment and work by encouraging the brain to produce hormones that stimulate the ovaries. Injectable medications, or gonadotropins, are more potent and are used when oral medications are not effective.
              </p></AnimateOnScroll>
            {/* Unordered list of key points */}
            <AnimateOnScroll>
              <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                <li>Clomiphene citrate: A commonly used oral medication for ovulation stimulation.</li>
                <li>Gonadotropic injectable hormones that directly stimulate the ovaries.</li>
                <li>Monitoring: Ultrasound and blood tests to track the progress of the treatment.</li>
                <li>Support: A holistic approach, including lifestyle changes and counseling, can improve outcomes.</li>
              </ul></AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-txt leading-relaxed mb-4 slide-down">
                In conclusion, ovulation induction is a powerful tool in the field of reproductive medicine. By addressing ovulatory issues, it opens up new possibilities for couples facing infertility. Consultation with a fertility specialist is the first step towards exploring this treatment and understanding its potential benefits.
              </p></AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-txt leading-relaxed mb-4 slide-down">
                Ovulation induction is an essential treatment for women struggling with infertility due to irregular or absent ovulation. This blog explores how ovulation induction works, the medications involved, and how it can increase the chances of conception. Learn how this treatment can bring hope to those wishing to start or expand their families.
              </p></AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-txt leading-relaxed slide-down">
                Ovulation induction is a medical procedure designed to stimulate the ovaries to release eggs, enabling conception for women with ovulatory disorders. This process often involves the use of medications such as Clomiphene Citrate or injectable gonadotropins to regulate or enhance ovulation. Monitoring through ultrasound and blood tests ensures the treatment is tailored to the individual&#39;s needs.
              </p>
            </AnimateOnScroll>
          </section>
          <AnimateOnScroll>
            <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
              <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
              <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                &quot;Ovulation induction can be a beacon of hope for couples facing infertility. It bridges the gap between aspiration and reality, bringing the dream of parenthood closer.&quot;
              </p>
            </section></AnimateOnScroll>
          <section className="text-txt leading-relaxed mb-8 slide-down">
            <AnimateOnScroll><p>
              Success rates for ovulation induction vary depending on the underlying cause of infertility and the individual&#39;s response to treatment. However, many women have achieved successful pregnancies through this approach, making it a cornerstone in fertility treatments. While it is often used in conjunction with other procedures like intrauterine insemination (IUI), it can also be effective as a standalone treatment.
            </p></AnimateOnScroll>
          </section>

          {/* Section title */}
          <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Understanding the Medications</h2>
          <AnimateOnScroll>
            <p className="text-txt leading-relaxed mb-6">
              The two primary categories of medications used in ovulation induction are oral and injectable. Oral medications like Clomiphene Citrate are typically the first line of treatment and work by encouraging the brain to produce hormones that stimulate the ovaries. Injectable medications, or gonadotropins, are more potent and are used when oral medications are not effective.
            </p>
          </AnimateOnScroll>
          {/* Unordered list of key points */}
          <AnimateOnScroll>
            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
              <li>Clomiphene citrate: A commonly used oral medication for ovulation stimulation.</li>
              <li>Gonadotropic injectable hormones that directly stimulate the ovaries.</li>
              <li>Monitoring: Ultrasound and blood tests to track the progress of the treatment.</li>
              <li>Support: A holistic approach, including lifestyle changes and counseling, can improve outcomes.</li>
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="text-txt leading-relaxed mb-4 slide-down">
              In conclusion, ovulation induction is a powerful tool in the field of reproductive medicine. By addressing ovulatory issues, it opens up new possibilities for couples facing infertility. Consultation with a fertility specialist is the first step towards exploring this treatment and understanding its potential benefits.
            </p>
          </AnimateOnScroll>
          <div className="h-px bg-gray-300 my-4"></div>
        </div>

        <AnimateOnScroll>
            <section className="flex flex-col sm:flex-row flex-wrap gap-4 text-center justify-center slide-down mt-4">
                        <p className="text-primary font-semibold text-base sm:text-xl mr-0 sm:mr-6">Tags : </p>
                        <div className="flex flex-wrap gap-2 sm:gap-8 justify-center">
                            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Ovulation</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Infertility</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Parenthood</button>
              </div>
              <div className="flex gap-2 sm:gap-2 justify-center">
                <button className="bg-secondary text-white p-3 rounded-lg text-sm hover:bg-primary"><Facebook /></button>
                <button className="bg-secondary text-white p-3 rounded-lg text-sm hover:bg-primary"><Youtube /></button>
                <button className="bg-secondary text-white p-3 rounded-lg text-sm hover:bg-primary"><Instagram /></button>
                <button className="bg-secondary text-white p-3 rounded-lg text-sm hover:bg-primary"><Twitter /></button>
              </div>
            </div>
          </section>
        </AnimateOnScroll>
      </main>
    </div>
  );
};

export default FertilityInfoPage;
