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
                  Pelvic Inflammatory Disease (PID): Causes, Symptoms, and Treatment for Fertility Preservation
                </h1>
                {/* Author and Date Information */}
                <AnimateOnScroll>
                    <p className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mt-2 text-secondary items-center justify-center gap-1 sm:gap-2">
                        <span className="flex items-center"><User className="mr-1" /><span className="text-primary">Salina Bastola</span></span>
                        <span className="hidden sm:inline">/</span>
                        <span className="flex items-center"><Clock className="mr-1" /><span className="text-primary">17 Jan 2025</span></span>
                    </p>
                </AnimateOnScroll>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
                <Image src="/blog/pid.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="w-full h-auto rounded-2xl sm:rounded-4xl my-4 object-cover"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p className="mb-4 py-2">
                                Pelvic Inflammatory Disease (PID) is a common infection that can affect fertility if left untreated. This blog provides an overview of PID, its causes, symptoms, and treatment options to prevent complications and preserve fertility, highlighting the importance of early diagnosis and intervention.
                            </p>
                            <p>
                                Pelvic Inflammatory Disease (PID) is an infection of the reproductive organs that can have serious consequences for a woman’s health, particularly her fertility. If left untreated, PID can cause long-term damage to the fallopian tubes, uterus, and ovaries, potentially leading to infertility. Understanding the causes, symptoms, and treatment options for PID is essential in preventing complications and preserving fertility.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={32} width={32} alt={"icon-quote"} className="mb-2 sm:mb-0" />
                            <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                                &quot;Early intervention restores health, preserves fertility, and brings the hope of parenthood within reach.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p className="text-txt leading-relaxed mb-6 text-sm sm:text-base slide-down">
                            PID is typically caused by a bacterial infection that spreads from the cervix or vagina into the upper reproductive organs. The most common bacteria responsible for PID are Chlamydia trachomatis and Neisseria gonorrhoeae, which are sexually transmitted. Other infections, such as bacterial vaginosis, can also increase the risk of PID.
                        </p>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Symptoms of PID</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                PID may not always present with obvious symptoms, which is why it’s important to be aware of potential signs. Common symptoms include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Abdominal or pelvic pain: Often deep and persistent, it may worsen during intercourse or after menstruation.</li>
                                <li>Abnormal vaginal discharge: May be foul-smelling or unusual in color.</li>
                                <li>Painful urination: A burning sensation during urination.</li>
                                <li>Irregular menstrual bleeding: Spotting or heavier-than-normal periods.</li>
                                <li>Fever and chills: These may occur in more severe cases of PID.</li>
                                <li>Pain during intercourse: Discomfort or pain during sexual activity.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Impact of PID on Fertility</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                PID can have a significant impact on fertility if left untreated. The infection can lead to scarring and damage to the reproductive organs, particularly the fallopian tubes. The consequences of PID on fertility include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Fallopian Tube Damage: Scarring or blockages can prevent the egg from reaching the uterus, causing infertility.</li>
                                <li>Ectopic Pregnancy: PID increases the risk of a fertilized egg implanting outside the uterus, usually in the fallopian tube.</li>
                                <li>Chronic Pelvic Pain: PID can cause long-term pelvic pain that affects daily life and reproductive health.</li>
                                <li>Miscarriage: PID-related damage to reproductive organs raises the risk of miscarriage during pregnancy.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Treatment for PID</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Early diagnosis and treatment of PID are crucial for preventing long-term complications and preserving fertility. Treatment options may include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Antibiotics: Oral antibiotics treat PID; IV antibiotics are used for severe cases.</li>
                                <li>Pain Management: Over-the-counter pain relievers or stronger medications for severe pain.</li>
                                <li>Treatment for Partner(s): Partners must also be tested and treated to prevent reinfection.</li>
                                <li>Surgery: Surgery may be needed for abscesses or severe reproductive organ damage.</li>
                                <li>Fertility Preservation: IVF can be recommended if PID causes fallopian tube damage, bypassing the need for healthy tubes.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                In conclusion, Pelvic Inflammatory Disease (PID) is a serious condition that can affect fertility if left untreated. Early diagnosis and prompt treatment with antibiotics are crucial for preventing complications and preserving reproductive health. If you experience symptoms such as pelvic pain, abnormal discharge, or painful intercourse, seek medical advice right away. Practicing safe sex and getting regular STI screenings are essential for reducing the risk of PID and maintaining overall reproductive health.
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
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Pelvicinflammatory</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Parantage</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Blockage</button>
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
