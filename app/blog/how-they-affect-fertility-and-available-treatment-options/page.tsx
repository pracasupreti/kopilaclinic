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
                  Uterine Fibroids: How They Affect Fertility and Available Treatment Options
                </h1>
                {/* Author and Date Information */}
                <AnimateOnScroll>
                    <p className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mt-2 text-secondary items-center justify-center gap-1 sm:gap-2">
                        <span className="flex items-center"><User className="mr-1" /><span className="text-primary">Salina Bastola</span></span>
                        <span className="hidden sm:inline">/</span>
                        <span className="flex items-center"><Clock className="mr-1" /><span className="text-primary">12 Jan 2025</span></span>
                    </p>
                </AnimateOnScroll>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-8">
                <Image src="/blog/uterine-fibroids.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="w-full h-auto rounded-2xl sm:rounded-4xl my-4 object-cover"
                />
                <div className="px-0 sm:px-2 md:px-10 lg:px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p className="mb-4 py-2">
                                Uterine fibroids are non-cancerous growths that can lead to heavy bleeding and infertility. This blog outlines the different types of fibroids, how they impact fertility, and the various treatment options, including medication, surgery, and uterine fibroid embolization, to improve reproductive health.
                            </p>
                            <p>
                                Uterine fibroids are common non-cancerous tumors that develop within or on the walls of the uterus. Though they often don&rsquo;t cause symptoms, they can sometimes lead to significant health issues, including heavy menstrual bleeding, pelvic pain, and infertility. Understanding how fibroids impact fertility and exploring available treatment options can help women manage their reproductive health more effectively.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex flex-col sm:flex-row bg-back rounded-2xl sm:rounded-4xl p-3 sm:p-4 mb-8 shadow-sm slide-down items-center">
                            <Image src="/testimonials/icon-quote.svg" height={32} width={32} alt={"icon-quote"} className="mb-2 sm:mb-0" />
                            <p className="text-primary font-semibold text-base sm:text-xl p-2 sm:p-4 text-center sm:text-left">
                                &quot;Uterine Fibroid Treatment: Restoring Fertility, Renewing Hope, Bringing Parenthood Within Reach.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-sm sm:text-base slide-down">
                            <p>
                                The success rate of uterine fibroid treatment in improving fertility varies depending on the type of treatment, the size and location of the fibroids, and the individual’s overall reproductive health.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">Treatment Options for Uterine Fibroids</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Treatment for uterine fibroids largely depends on the symptoms, the size and location of the fibroids, and whether or not fertility preservation is a priority. Here are the most common treatment options:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Hormonal Treatments: Birth control pills, IUDs, or hormone therapies can help regulate menstrual cycles and reduce symptoms like heavy bleeding. However, they do not eliminate fibroids.</li>
                                <li>Uterine Fibroid Embolization (UFE):UFE is a minimally invasive procedure where the blood vessels supplying the fibroids are blocked off, causing the fibroids to shrink and die</li>
                                <li>Surgical Options Myomectomy: A surgical procedure where fibroids are removed from the uterus. This option is often recommended for women who wish to preserve their fertility.</li>
                                <li>Lifestyle and Alternative Treatments:While not directly addressing fibroid size, maintaining a healthy weight and managing stress can help reduce the growth of fibroids</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-2xl sm:text-4xl text-primary font-bold mb-4 sm:mb-6 text-center slide-side">How Uterine Fibroids Affect Fertility</h2>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                Fibroids can impact fertility in several ways, though not every woman with fibroids will experience fertility problems. Some ways fibroids affect fertility include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-6 sm:mb-8 text-sm sm:text-base font-semibold slide-down">
                                <li>Distortion of the Uterine Cavity: Submucosal fibroids can change the shape of the uterine cavity, making it difficult for an embryo to implant.</li>
                                <li>Blockage of Fallopian Tubes: Large fibroids can block the fallopian tubes, preventing the egg from meeting the sperm.</li>
                                <li>Impaired Blood Flow to the Uterus: Intramural fibroids may reduce blood flow to the uterine lining, making it harder for an embryo to implant or for the pregnancy to thrive.</li>
                                <li>Hormonal Imbalance: Fibroids can produce hormones that interfere with ovulation, leading to irregular cycles and less chance of conception.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base slide-down">
                                In Uterine fibroids are a common cause of fertility problems, but with the right treatment, many women can still conceive and have healthy pregnancies. It is crucial to discuss your symptoms and treatment options with a healthcare provider who specializes in reproductive health. Whether through medication, surgery, or more advanced procedures like UFE, there are numerous options available to help manage fibroids and improve fertility outcomes
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
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">UterineFibroids</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">TreatmentOptions</button>
                                <button className="bg-secondary text-white font-semibold p-2 sm:p-3 rounded-lg text-xs sm:text-base hover:bg-primary">Myomectomy</button>
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
