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
                  Polycystic Ovary Syndrome (PCOD): Symptoms, Causes, and Treatment Options
                </h1>
                {/* Author and Date Information */}
                <AnimateOnScroll>
                    <p className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mt-2 text-secondary items-center justify-center gap-1 sm:gap-2">
                        <span className="flex items-center"><User className="mr-1" /><span className="text-primary">Salina Bastola</span></span>
                        <span className="hidden sm:inline">/</span>
                        <span className="flex items-center"><Clock className="mr-1" /><span className="text-primary">9 Jan 2025</span></span>
                    </p>
                </AnimateOnScroll>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
                <Image src="/blog/pcod.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="w-full h-auto rounded-2xl sm:rounded-4xl my-4 object-cover"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p className="mb-4 py-2">
                                PCOD is a common hormonal disorder that affects many women of reproductive age. This blog explains the causes, symptoms, and long-term effects of PCOD, along with treatment options including lifestyle changes, medication, and fertility treatments that can help manage the condition.
                            </p>
                            <p>
                                Polycystic Ovary Disorder (PCOD), also known as Polycystic Ovary Syndrome (PCOS), is a common hormonal condition that affects many women of reproductive age. PCOD can disrupt the normal functioning of the ovaries, leading to a variety of symptoms and potential long-term effects. This blog will explore the causes, symptoms, and treatment options, including lifestyle changes, medication, and fertility treatments that can help manage PCOD.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={32} width={32} alt={"icon-quote"} className="mb-2 sm:mb-0" />
                            <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                                &quot;While PCOD cannot be cured, it can be managed effectively through various treatment options.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p>
                                PCOD occurs when the ovaries produce an excess amount of androgens (male hormones), which disrupt the normal functioning of the ovaries. This hormonal imbalance can interfere with the development and release of eggs during the menstrual cycle, leading to irregular periods, the formation of cysts on the ovaries, and difficulty conceiving.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Causes of PCOD</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                The exact cause of Polycystic Ovary Syndrome (PCOD) is unclear, but factors like hormonal imbalance, insulin resistance, genetics, and lifestyle play a role. High levels of androgens (male hormones) prevent egg maturation and ovulation. Insulin resistance, where the body&#39;s cells don&#39;t respond well to insulin, can worsen hormonal imbalances, leading to weight gain and irregular periods. Genetic factors also contribute, as PCOD tends to run in families. Poor diet, lack of exercise, and obesity can make symptoms worse and increase the risk of conditions like diabetes and heart disease.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Symptoms of PCOD</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                PCOD presents with a variety of symptoms, which can differ from person to person. Common symptoms include irregular periods, such as infrequent or absent cycles. Excessive hair growth (hirsutism) occurs due to elevated androgen levels, affecting areas like the face and chest. Acne and oily skin are also common, particularly around the jawline and chin. Many women with PCOD experience weight gain or difficulty losing weight, often with increased abdominal fat. Thinning hair or male-pattern baldness can develop due to higher androgen levels. Cysts on the ovaries are often present but alone do not confirm a PCOD diagnosis. Lastly, infertility is a key issue, as irregular or absent ovulation makes conception challenging.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Treatment Options for PCOD</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                While there is no cure for PCOD, several treatment options can help manage the symptoms, regulate menstrual cycles, and improve fertility. Treatment plans often depend on the severity of symptoms and the specific needs of the woman, such as whether she is trying to conceive. While PCOD cannot be cured, several treatments can help manage symptoms and improve fertility:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Lifestyle Changes:A healthy diet with fruits, vegetables, lean proteins, and whole grains helps manage weight and insulin resistance, while regular exercise improves insulin sensitivity and reduces symptoms like acne and excessive hair growth.</li>
                                <li>Medications:Birth control pills regulate periods and reduce hair growth, metformin improves insulin sensitivity, anti-androgens reduce excess hair, and fertility meds stimulate ovulation to boost pregnancy chances.</li>
                                <li>Surgery:Ovarian Drilling is a procedure to promote ovulation by making small holes in the ovaries.</li>
                                <li>Fertility Treatments:For women struggling with fertility, IVF can help by fertilizing an egg outside the body and implanting the embryo in the uterus.</li>
                            </ul>
                        </AnimateOnScroll>
                        <div className="h-px bg-gray-300 my-4"></div>
                    </section>
                </div>

                <AnimateOnScroll>
                    <section className="flex flex-col sm:flex-row flex-wrap gap-4 text-center justify-center slide-down mt-4">
                        <p className="text-primary font-semibold text-base sm:text-xl mr-0 sm:mr-6">Tags : </p>
                        <div className="flex flex-wrap gap-2 sm:gap-8 justify-center">
                            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">PolycysticOvary</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Hormones</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Reproductive</button>
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
