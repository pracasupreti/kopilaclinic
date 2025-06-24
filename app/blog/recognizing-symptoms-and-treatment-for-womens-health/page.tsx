"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center slide-side">
                <h1 className="text-xl md:text-3xl font-bold text-primary">Adenomyosis: Recognizing Symptoms and Treatment for Womens Health
                </h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 15 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/adenomyosis.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className=" px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">
                                Adenomyosis is a condition where tissue from the uterine lining grows into the muscular wall of the uterus. This blog explains the symptoms, effects on fertility, and available treatments, including medication and surgical options, for managing adenomyosis and improving quality of life.
                            </p>
                            <p>
                                Adenomyosis is a condition where tissue from the uterine lining (endometrium) grows into the muscular wall of the uterus, leading to a variety of symptoms that can significantly impact a woman’s health and quality of life. While the exact cause of adenomyosis remains unclear, it is a relatively common condition, particularly in women over the age of 30 and those who have had children.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex bg-back rounded-4xl p-4 mb-8 shadow-sm slide-down">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                "Understand the symptoms of adenomyosis, its effects on fertility, and the treatment options available to manage the condition effectively."
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Symptoms of Adenomyosis</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Adenomyosis can be challenging to diagnose since its symptoms often overlap with other gynecological conditions, such as fibroids or endometriosis. Common symptoms include:

                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Heavy Menstrual Bleeding: Adenomyosis often causes heavy and prolonged periods, sometimes with blood clots. This can lead to anemia and fatigue over time.</li>
                                <li>Severe Menstrual Cramps: Intense, deep cramps that worsen over time.</li>
                                <li>Pelvic Pain: Chronic, sometimes radiating pain in the lower abdomen or back.</li>
                                <li>Pain During Intercourse: Discomfort during sex due to uterine pressure.</li>
                                <li>Enlarged Uterus: Uterus may become enlarged and tender.</li>
                                <li>Infertility: Can interfere with conception by disrupting uterine function.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                In conclusion, ovulation induction is a powerful tool in the field of reproductive medicine. By addressing ovulatory issues, it opens up new possibilities for couples facing infertility. Consultation with a fertility specialist is the first step towards exploring this treatment and understanding its potential benefits.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Treatment Options for Adenomyosis</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Treatment for adenomyosis depends on the severity of symptoms, the woman's age, and whether she is planning to have children in the future. Options include medication, non-invasive procedures, and surgery.
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Uterine Artery Embolization (UAE):Minimally invasive procedure to shrink adenomyosis tissue by blocking blood flow.</li>
                                <li>Hormonal Treatments: Birth control pills or IUDs reduce bleeding and pain.</li>
                                <li>Endometrial Ablation: Destroys uterine lining to control bleeding, not recommended for women wanting pregnancy.</li>
                                <li>Myomectomy:Removes fibroids while preserving the uterus, helpful for fertility if fibroids are present.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Adenomyosis can significantly impact a woman’s quality of life, causing pain and disrupting fertility. While there is no cure, various treatments, including medication, surgery, and fertility treatments, can help manage symptoms and improve the chances of conception. If you suspect you may have adenomyosis, it’s essential to seek medical advice to develop a treatment plan tailored to your specific needs. With the right approach, women with adenomyosis can lead a fulfilling life and manage their reproductive health effectively.
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
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Adenomyosis</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Women's Health</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Uterine Health</button>
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
