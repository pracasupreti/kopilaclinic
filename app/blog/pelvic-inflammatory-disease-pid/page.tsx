"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center slide-side">
                <h1 className="text-xl md:text-3xl font-bold text-primary">Pelvic Inflammatory Disease (PID): Causes, Symptoms, and Treatment for Fertility Preservation
                </h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 17 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/pid.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className=" px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">
                                Pelvic Inflammatory Disease (PID) is a common infection that can affect fertility if left untreated. This blog provides an overview of PID, its causes, symptoms, and treatment options to prevent complications and preserve fertility, highlighting the importance of early diagnosis and intervention.
                            </p>
                            <p>
                                Pelvic Inflammatory Disease (PID) is an infection of the reproductive organs that can have serious consequences for a woman’s health, particularly her fertility. If left untreated, PID can cause long-term damage to the fallopian tubes, uterus, and ovaries, potentially leading to infertility. Understanding the causes, symptoms, and treatment options for PID is essential in preventing complications and preserving fertility.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex bg-back rounded-4xl p-4 mb-8 shadow-sm slide-down">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                "Early intervention restores health, preserves fertility, and brings the hope of parenthood within reach."
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p className="text-txt leading-relaxed mb-6 slide-down">
                            PID is typically caused by a bacterial infection that spreads from the cervix or vagina into the upper reproductive organs. The most common bacteria responsible for PID are Chlamydia trachomatis and Neisseria gonorrhoeae, which are sexually transmitted. Other infections, such as bacterial vaginosis, can also increase the risk of PID.
                        </p>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Symptoms of PID</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                PID may not always present with obvious symptoms, which is why it’s important to be aware of potential signs. Common symptoms include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Abdominal or pelvic pain: Often deep and persistent, it may worsen during intercourse or after menstruation.</li>
                                <li>Abnormal vaginal discharge: May be foul-smelling or unusual in color.</li>
                                <li>Painful urination: A burning sensation during urination.</li>
                                <li>Irregular menstrual bleeding: Spotting or heavier-than-normal periods.</li>
                                <li>Fever and chills: These may occur in more severe cases of PID.</li>
                                <li>Pain during intercourse: Discomfort or pain during sexual activity.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Impact of PID on Fertility</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                PID can have a significant impact on fertility if left untreated. The infection can lead to scarring and damage to the reproductive organs, particularly the fallopian tubes. The consequences of PID on fertility include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Fallopian Tube Damage: Scarring or blockages can prevent the egg from reaching the uterus, causing infertility.</li>
                                <li>Ectopic Pregnancy: PID increases the risk of a fertilized egg implanting outside the uterus, usually in the fallopian tube.</li>
                                <li>Chronic Pelvic Pain: PID can cause long-term pelvic pain that affects daily life and reproductive health.</li>
                                <li>Miscarriage: PID-related damage to reproductive organs raises the risk of miscarriage during pregnancy.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Treatment for PID</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Early diagnosis and treatment of PID are crucial for preventing long-term complications and preserving fertility. Treatment options may include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Antibiotics: Oral antibiotics treat PID; IV antibiotics are used for severe cases.</li>
                                <li>Pain Management: Over-the-counter pain relievers or stronger medications for severe pain.</li>
                                <li>Treatment for Partner(s): Partners must also be tested and treated to prevent reinfection.</li>
                                <li>Surgery: Surgery may be needed for abscesses or severe reproductive organ damage.</li>
                                <li>Fertility Preservation: IVF can be recommended if PID causes fallopian tube damage, bypassing the need for healthy tubes.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                In conclusion, Pelvic Inflammatory Disease (PID) is a serious condition that can affect fertility if left untreated. Early diagnosis and prompt treatment with antibiotics are crucial for preventing complications and preserving reproductive health. If you experience symptoms such as pelvic pain, abnormal discharge, or painful intercourse, seek medical advice right away. Practicing safe sex and getting regular STI screenings are essential for reducing the risk of PID and maintaining overall reproductive health.
                            </p>
                        </AnimateOnScroll>
                        <div className="h-px bg-gray-300 my-4"></div>
                    </section>
                </div>


                <AnimateOnScroll>
                    <section className="flex text-center justify-center slide-down">
                        <p className="text-primary font-semibold text-xl mr-6">Tags : </p>
                        <div className="flex gap-30">
                            <div className="flex gap-4">
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Pelvicinflammatory</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Parantage</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Blockage</button>
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
