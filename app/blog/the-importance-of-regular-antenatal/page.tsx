"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-8 md:py-12 lg:py-30 text-center slide-side px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-primary leading-tight sm:leading-snug">The Importance of Regular Antenatal Check-Ups for a Healthy Pregnancy</h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 7 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/antenatal-checkup.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">
                                Antenatal care is crucial for monitoring the health of both the mother and the baby throughout pregnancy. This blog highlights the significance of regular antenatal check-ups, the tests involved, and how they help prevent complications, ensuring a smooth and healthy pregnancy journey.
                            </p>
                            <p>
                                Antenatal care (ANC) is essential for monitoring the health of both the mother and the baby throughout pregnancy. Regular check-ups with a healthcare provider can help detect potential complications early, ensuring a smoother and healthier pregnancy journey. This blog explores why antenatal care is so crucial, the tests involved, and how it plays a vital role in preventing complications.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                &quot;Regular antenatal check-ups are the key to a healthy pregnancy, protecting both mother and baby, and paving the way for a safe and joyful journey to parenthood&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 slide-down">
                            <p>
                                The success rate of antenatal care itself isn&apos;t typically quantified in the same way as fertility treatments like IVF, as it primarily focuses on the ongoing health monitoring and management of a pregnancy. However, regular antenatal care significantly reduces the risks of complications during pregnancy and childbirth. For example, studies show that consistent antenatal care can decrease the likelihood of maternal mortality, preterm births, low birth weight, and stillbirths, improving overall outcomes for both mother and baby. The success of antenatal care lies in its ability to prevent, identify, and manage complications early, leading to healthier pregnancies and safer deliveries.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Why Regular Antenatal Check-Ups Are Crucial</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Regular antenatal check-ups provide several key benefits that are critical for the health of both the mother and the baby. These visits allow healthcare professionals to monitor vital health indicators such as the mother’s blood pressure, weight, and blood sugar levels. Early detection of any health concerns, like high blood pressure, gestational diabetes, or infections, allows for prompt treatment, reducing the risk of complications for both the mother and baby. Additionally, these check-ups provide an opportunity for expectant mothers to ask questions, receive advice on nutrition and lifestyle changes, and prepare for labor and delivery. Antenatal care also plays an important role in detecting potential complications, such as fetal growth restrictions, preeclampsia, or even conditions like placenta previa. Addressing such issues early on can significantly reduce risks and improve outcomes for both the mother and baby. Early detection of complications such as gestational diabetes, preeclampsia, or fetal growth issues can significantly reduce risks for both mother and baby, improving outcomes for both.
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Regular Check-ups: Frequent visits monitor the mother&#39;s and baby&#39;s health, checking blood pressure, weight, and fetal heartbeat.</li>
                                <li>Blood and Urine Tests: Detect conditions like anemia, infections, and gestational diabetes, and check for complications like preeclampsia.</li>
                                <li>Ultrasound Scans: Track baby&#39;s growth, position, and development, and check for issues like abnormalities or fluid levels.</li>
                                <li>Screening for Genetic Conditions: Identify risks for genetic disorders such as Down syndrome.</li>
                                <li>Monitoring Fetal Movements: Track baby’s movements to ensure fetal well-being starting at 28 weeks.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 slide-down">
                                Antenatal care is a crucial part of ensuring a healthy pregnancy. Regular check-ups, tests, and screenings help detect potential complications early, allowing for timely interventions and improving the chances of a safe delivery. By prioritizing antenatal visits and following medical advice, expectant mothers can give themselves and their babies the best possible start on their pregnancy journey.</p>
                        </AnimateOnScroll>
                        <div className="h-px bg-gray-300 my-4"></div>
                    </section>
                </div>


                <AnimateOnScroll>
                    <section className="flex flex-col sm:flex-row flex-wrap gap-4 text-center justify-center slide-down mt-4">
                        <p className="text-primary font-semibold text-base sm:text-xl mr-0 sm:mr-6">Tags : </p>
                        <div className="flex flex-wrap gap-2 sm:gap-8 justify-center">
                            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Antenatal</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Check-Ups</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Complications</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Tests</button>
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
