"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-8 md:py-12 lg:py-30 text-center slide-side px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-primary leading-tight sm:leading-snug">
                  IVF: The Path to Parenthood for Couples Facing Fertility Challenges
                </h1>
                {/* Author and Date Information */}
                <AnimateOnScroll>
                    <p className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mt-2 text-secondary items-center justify-center gap-1 sm:gap-2">
                        <span className="flex items-center"><User className="mr-1" /><span className="text-primary">Salina Bastola</span></span>
                        <span className="hidden sm:inline">/</span>
                        <span className="flex items-center"><Clock className="mr-1" /><span className="text-primary">5 Jan 2025</span></span>
                    </p>
                </AnimateOnScroll>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
                <Image src="/blog/ivf.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="w-full h-auto rounded-2xl sm:rounded-4xl my-4 object-cover"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p className="mb-4 py-2">
                                In Vitro Fertilization (IVF) offers a lifeline to couples struggling with infertility. This blog delves into the IVF process, from egg retrieval and fertilization to embryo transfer, explaining how it works and why it is often the most effective solution for certain infertility issues.
                            </p>
                            <p>
                                In Vitro Fertilization (IVF) is a groundbreaking medical procedure that has helped countless couples struggling with infertility realize their dream of becoming parents. IVF involves the combination of an egg and sperm outside the body in a laboratory, resulting in fertilization, and then transferring the embryo into the uterus for implantation and pregnancy. This blog will take you through the steps of the IVF process and explain why it is often the most effective solution for specific infertility issues.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={32} width={32} alt={"icon-quote"} className="mb-2 sm:mb-0" />
                            <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                                &quot;Dealing with male infertility, ovulation disorders, or other issues, IVF offers a pathway to parenthood when other treatments have not worked.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p>
                                The success rates of IVF vary depending on several factors, such as the woman&apos;s age, egg and sperm quality, and underlying infertility issues. On average, women under 35 have a 40-45% success rate per cycle, while rates decrease with age, dropping to around 10-15% for women aged 41-42 and 5% or lower for women over 42. Younger women generally produce higher-quality eggs, which improves chances of success, while age-related declines in egg quality can lower outcomes. Other factors like sperm quality and the clinic&apos;s expertise also play a role in IVF success.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold text-gray-800 mb-4 sm:mb-6 text-center slide-side">Understanding the Medications</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                IVF can be an emotional rollercoaster, and the process can take a physical toll on the body due to hormone treatments, procedures, and the uncertainty of the outcome. Couples may experience stress, anxiety, and emotional fatigue. It&apos;s essential to have a strong support system, whether that be a partner, family, friends, or a therapist, to navigate the ups and downs of the IVF process.IVF is often considered the most effective treatment for various infertility issues, including:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Blocked or Damaged Fallopian Tubes: IVF bypasses the fallopian tubes entirely, allowing fertilization to occur in the lab instead of within the body.</li>
                                <li>Male Infertility: IVF, especially when combined with ICSI, can address male infertility factors, including low sperm count or motility.</li>
                                <li>Ovulation Disorders: Women who do not ovulate regularly can benefit from IVF by using ovarian stimulation to produce multiple eggs for retrieval.</li>
                                <li>Endometriosis: Women with endometriosis who face difficulty getting pregnant may find IVF to be a successful solution.</li>
                                <li>Unexplained Infertility: If the cause of infertility cannot be identified, IVF offers a more direct approach, increasing the chances of conception.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 text-sm sm:text-base slide-down">
                                In conclusion,Intrauterine insemination is a simple, effective, and minimally invasive fertility treatment that can be a great option for couples facing mild to moderate infertility challenges. With a good understanding of the procedure, success rates, and potential risks, couples can make an informed decision about whether IUI is the right choice for them. If you&apos;re struggling to conceive, speak with your fertility specialist to explore your options and determine if IUI could help you on your journey to parenthood.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold text-gray-800 mb-4 sm:mb-6 text-center slide-side">Why IVF is Effective for Certain Infertility Issues</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                IVF is effective for various infertility issues because it bypasses many natural barriers to conception. For women with blocked or damaged fallopian tubes, IVF allows fertilization to occur outside the body, eliminating the need for the tubes. In cases of male infertility, techniques like ICSI can help even with low sperm count or poor motility by directly injecting sperm into the egg. For women with endometriosis, IVF can overcome complications like scar tissue and improve the chances of successful pregnancy. IVF also offers a solution for unexplained infertility by optimizing the conditions for fertilization and embryo implantation. Essentially, IVF addresses specific fertility challenges by directly controlling the fertilization process and increasing the chances of conception.IVF is often considered the most effective fertility treatment for several reasons:
                            </p>
                            <p className="text-txt leading-relaxed mb-4 text-sm sm:text-base slide-down">
                                In conclusion, In Vitro Fertilization has been a revolutionary advancement in the field of reproductive medicine. While the process may seem daunting, understanding the steps involved and knowing why IVF is the right choice can provide clarity and hope for couples facing infertility challenges. Whether dealing with male infertility, ovulation disorders, or other issues, IVF offers a pathway to parenthood when other treatments have not worked.
                            </p>
                        </AnimateOnScroll>
                        <div className="h-px bg-gray-300 my-4"></div>
                    </section>
                </div>

                <AnimateOnScroll>
                    <section className="flex flex-col sm:flex-row flex-wrap gap-4 text-center justify-center slide-down mt-4">
                        <p className="text-primary font-semibold text-base sm:text-xl mr-0 sm:mr-6">Tags : </p>
                        <div className="flex flex-wrap gap-2 sm:gap-8 justify-center">
                            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">VitroFertilization</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Ovulation</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Parenthood</button>
                            </div>
                            <div className="flex gap-2 sm:gap-2 justify-center">
                                <button className="bg-secondary text-white p-2 sm:p-3 rounded-lg text-xs sm:text-sm hover:bg-primary"><Facebook /></button>
                                <button className="bg-secondary text-white p-2 sm:p-3 rounded-lg text-xs sm:text-sm hover:bg-primary"><Youtube /></button>
                                <button className="bg-secondary text-white p-2 sm:p-3 rounded-lg text-xs sm:text-sm hover:bg-primary"><Instagram /></button>
                                <button className="bg-secondary text-white p-2 sm:p-3 rounded-lg text-xs sm:text-sm hover:bg-primary"><Twitter /></button>
                            </div>
                        </div>
                    </section>
                </AnimateOnScroll>
            </main>
        </div>
    );
};

export default FertilityInfoPage;
