"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-8 md:py-12 lg:py-30 text-center slide-side px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-primary leading-tight sm:leading-snug">Endometriosis: Understanding the Impact on Fertility and Treatment Options
                </h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 11 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/endometriosis.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">
                                Endometriosis can significantly affect a woman&#39;s fertility and overall well-being. This blog explores the condition, how it causes pain and infertility, and discusses treatment options such as medication, surgery, and fertility treatments to help women manage the condition and increase their chances of pregnancy.
                            </p>
                            <p>
                                Endometriosis is a chronic condition where tissue similar to the lining of the uterus grows outside the uterus, causing pain and potentially affecting fertility. It&#39;s a common condition, yet its impact on a woman&#39;s health and ability to conceive can be significant. This blog explores how endometriosis leads to pain and infertility, and discusses the treatment options available to manage the condition and improve chances of pregnancy.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                &quot;Endometriosis can pose challenges to fertility, but with the right treatments, the dream of parenthood is still achievable. &quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 slide-down">
                            <p>
                                Endometriosis can affect fertility by causing damage to reproductive organs. The growth of endometrial tissue outside the uterus can block or distort the fallopian tubes, preventing eggs from being fertilized or reaching the uterus. It can also lead to the formation of ovarian cysts, which may reduce egg quality, and cause scar tissue or adhesions, disrupting the normal function of the ovaries and uterus. These factors can make it more difficult to conceive, though many women with endometriosis still manage to get pregnant with or without treatment.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Treatment Options for Endometriosis and Fertility</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                While there is currently no cure for endometriosis, various treatments can help manage the symptoms and improve fertility outcomes. The choice of treatment often depends on the severity of the condition, the woman&#39;s age, and whether she is trying to conceive.
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Medications:Medications are often used to manage symptoms and control endometrial tissue growth.</li>
                                <li>Surgery:Surgical treatments aim to remove endometrial tissue, adhesions, and cysts to improve fertility.</li>
                                <li>Fertility Treatments:For women struggling to conceive, assisted reproductive technologies (ART) may be helpful.</li>
                                <li>Lifestyle Modifications:Certain lifestyle changes can support overall health and fertility like balanced diet and nutrition regular exercise and stree managaement.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                In conclusion,Endometriosis is a complex condition that can affect both the physical and emotional well-being of women, especially those struggling with fertility. While the condition can be challenging, effective treatments—such as pain management, hormonal therapies, surgery, and fertility treatments—are available to help women manage symptoms and improve their chances of pregnancy. If you suspect you have endometriosis or are struggling with fertility, consult with a healthcare provider to explore the best treatment options tailored to your individual needs.
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
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Endometriosis</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Endometriosis Treatment</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility Journey</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility Preservation</button>
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
