"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center slide-side">
        <h1 className="text-xl md:text-3xl font-bold text-primary">Intrauterine Insemination (IUI): A Simple and Effective Fertility Solution</h1>
        {/* Author and Date Information */}

        <AnimateOnScroll>
          <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
            <User />
            <span className="flex px-2 text-primary">
              Salina Bastola
            </span>{' '}
            / <Clock /> <span className="flex px-2 text-primary"> 4 Jan 2025</span>
          </p></AnimateOnScroll>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Image src="/blog/intrauterine-insemination.jpg"
          alt="ovulation-induction"
          height={800}
          width={800}
          className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
        />
        <div className=" px-20">
          <AnimateOnScroll>
            <section className="text-txt leading-relaxed mb-8 text-base slide-down">
              <p className="mb-4 py-2">
                Intrauterine insemination (IUI) is a popular and minimally invasive fertility treatment that helps improve the chances of pregnancy. This blog discusses the IUI procedure, its success rates, and how it can be the right solution for couples facing mild infertility challenges.
              </p>
              <p>
                Intrauterine insemination (IUI) is a widely-used fertility treatment designed to increase the chances of pregnancy for couples experiencing infertility. This procedure is relatively simple, minimally invasive, and can be an effective solution for couples facing mild to moderate infertility challenges. In this blog, we&apos;ll explore the IUI process, its success rates, and how it may be the right choice for many couples trying to conceive.
              </p>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <section className="flex bg-back rounded-4xl p-4 mb-8 shadow-sm slide-down">
              <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
              <p className="text-primary font-semibold text-xl p-4">
                &quot;Success rates for IUI can vary depending on several factors, including the woman&apos;s age, the cause of infertility, and whether fertility medications are used. On average, IUI success rates range from 10-20% per cycle.&quot;
              </p>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <section className="text-txt leading-relaxed mb-8 slide-down">
              <p>
                Success rates for IUI can vary depending on several factors, including the woman&apos;s age, the cause of infertility, and whether fertility medications are used. On average, IUI success rates range from 10-20% per cycle. Younger women tend to have higher success rates compared to older women, and those with unexplained infertility often respond well to IUI. Using fertility drugs to stimulate ovulation can also improve the success rates, though it may increase the risk of multiple pregnancies (twins, triplets, etc.).
              </p>
            </section>
          </AnimateOnScroll>

          <section className="mb-8">
            {/* Section title */}
            <AnimateOnScroll>
              <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Understanding the Medications</h2>
              <p className="text-txt leading-relaxed mb-6 slide-down">
                While IUI is not recommended for women with blocked fallopian tubes or severe male infertility, it remains a first-line treatment for many other fertility issues.IUI can be an effective option for couples with the following infertility challenges:
              </p>
            </AnimateOnScroll>
            {/* Unordered list of key points */}
            <AnimateOnScroll>
              <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                <li>Male factor infertility: Low sperm count or sperm motility issues can be addressed with IUI, allowing sperm to bypass cervical mucus and be directly delivered to the uterus.</li>
                <li>Unexplained infertility: For couples with no clear cause of infertility, IUI can increase the chances of conception.</li>
                <li>Cervical issues: Conditions such as cervical mucus problems or cervical stenosis may prevent sperm from traveling into the uterus, making IUI a good solution.</li>
                <li>Ovulatory disorders: Women who do not ovulate regularly may benefit from IUI in combination with fertility medications to promote ovulation.</li>
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-txt leading-relaxed mb-4 slide-down">
                In conclusion,Intrauterine insemination is a simple, effective, and minimally invasive fertility treatment that can be a great option for couples facing mild to moderate infertility challenges. With a good understanding of the procedure, success rates, and potential risks, couples can make an informed decision about whether IUI is the right choice for them. If you&apos;re struggling to conceive, speak with your fertility specialist to explore your options and determine if IUI could help you on your journey to parenthood.
              </p>
            </AnimateOnScroll>
            <div className="h-px bg-gray-300 my-4"></div>
          </section>
        </div>


        <AnimateOnScroll>
          <section className="flex text-center justify-center slide-down">
            <p className="text-primary font-semibold text-xl mr-6">Tags : </p>
            <div className="flex gap-80">
              <div className="flex gap-4">
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Intrauterinelnsemination</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Infertility</button>
                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Ovulatory</button>
              </div>
              <div className="flex gap-2">
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
