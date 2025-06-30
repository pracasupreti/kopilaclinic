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
                  Adenomyosis: Recognizing Symptoms and Treatment for Womens Health
                </h1>
                {/* Author and Date Information */}
                <AnimateOnScroll>
                    <p className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mt-2 text-secondary items-center justify-center gap-1 sm:gap-2">
                        <span className="flex items-center"><User className="mr-1" /><span className="text-primary">Salina Bastola</span></span>
                        <span className="hidden sm:inline">/</span>
                        <span className="flex items-center"><Clock className="mr-1" /><span className="text-primary">15 Jan 2025</span></span>
                    </p>
                </AnimateOnScroll>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
                <Image src="/blog/adenomyosis.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="w-full h-auto rounded-2xl sm:rounded-4xl my-4 object-cover"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p className="mb-4 py-2">
                                Adenomyosis is a condition where tissue from the uterine lining grows into the muscular wall of the uterus. This blog explains the symptoms, effects on fertility, and available treatments, including medication and surgical options, for managing adenomyosis and improving quality of life.
                            </p>
                            <p>
                                Adenomyosis is a condition where tissue from the uterine lining (endometrium) grows into the muscular wall of the uterus, leading to a variety of symptoms that can significantly impact a woman’s health and quality of life. While the exact cause of adenomyosis remains unclear, it is a relatively common condition, particularly in women over the age of 30 and those who have had children.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={32} width={32} alt={"icon-quote"} className="mb-2 sm:mb-0" />
                            <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                                &quot;Understand the symptoms of adenomyosis, its effects on fertility, and the treatment options available to manage the condition effectively.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Symptoms of Adenomyosis</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Adenomyosis can be challenging to diagnose since its symptoms often overlap with other gynecological conditions, such as fibroids or endometriosis. Common symptoms include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Heavy Menstrual Bleeding: Adenomyosis often causes heavy and prolonged periods, sometimes with blood clots. This can lead to anemia and fatigue over time.</li>
                                <li>Severe Menstrual Cramps: Intense, deep cramps that worsen over time.</li>
                                <li>Pelvic Pain: Chronic, sometimes radiating pain in the lower abdomen or back.</li>
                                <li>Pain During Intercourse: Discomfort during sex due to uterine pressure.</li>
                                <li>Enlarged Uterus: Uterus may become enlarged and tender.</li>
                                <li>Infertility: Can interfere with conception by disrupting uterine function.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                In conclusion, ovulation induction is a powerful tool in the field of reproductive medicine. By addressing ovulatory issues, it opens up new possibilities for couples facing infertility. Consultation with a fertility specialist is the first step towards exploring this treatment and understanding its potential benefits.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Treatment Options for Adenomyosis</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Treatment for adenomyosis depends on the severity of symptoms, the woman&#39;s age, and whether she is planning to have children in the future. Options include medication, non-invasive procedures, and surgery.
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Uterine Artery Embolization (UAE):Minimally invasive procedure to shrink adenomyosis tissue by blocking blood flow.</li>
                                <li>Hormonal Treatments: Birth control pills or IUDs reduce bleeding and pain.</li>
                                <li>Endometrial Ablation: Destroys uterine lining to control bleeding, not recommended for women wanting pregnancy.</li>
                                <li>Myomectomy:Removes fibroids while preserving the uterus, helpful for fertility if fibroids are present.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Adenomyosis can significantly impact a woman’s quality of life, causing pain and disrupting fertility. While there is no cure, various treatments, including medication, surgery, and fertility treatments, can help manage symptoms and improve the chances of conception. If you suspect you may have adenomyosis, it’s essential to seek medical advice to develop a treatment plan tailored to your specific needs. With the right approach, women with adenomyosis can lead a fulfilling life and manage their reproductive health effectively.
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
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Adenomyosis</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Women&#39;s Health</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Uterine Health</button>
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
