"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center slide-side">
                <h1 className="text-xl md:text-3xl font-bold text-primary">Uterine Fibroids: How They Affect Fertility and Available Treatment Options
                </h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 12 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/uterine-fibroids.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className=" px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">

                                Uterine fibroids are non-cancerous growths that can lead to heavy bleeding and infertility. This blog outlines the different types of fibroids, how they impact fertility, and the various treatment options, including medication, surgery, and uterine fibroid embolization, to improve reproductive health.
                            </p>
                            <p>
                                Uterine fibroids are common non-cancerous tumors that develop within or on the walls of the uterus. Though they often don't cause symptoms, they can sometimes lead to significant health issues, including heavy menstrual bleeding, pelvic pain, and infertility. Understanding how fibroids impact fertility and exploring available treatment options can help women manage their reproductive health more effectively.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex bg-back rounded-4xl p-4 mb-8 shadow-sm slide-down">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                "Uterine Fibroid Treatment: Restoring Fertility, Renewing Hope, Bringing Parenthood Within Reach."
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 slide-down">
                            <p>
                                The success rate of uterine fibroid treatment in improving fertility varies depending on the type of treatment, the size and location of the fibroids, and the individual’s overall reproductive health.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">Treatment Options for Uterine Fibroids</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Treatment for uterine fibroids largely depends on the symptoms, the size and location of the fibroids, and whether or not fertility preservation is a priority. Here are the most common treatment options:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Hormonal Treatments: Birth control pills, IUDs, or hormone therapies can help regulate menstrual cycles and reduce symptoms like heavy bleeding. However, they do not eliminate fibroids.</li>
                                <li>Uterine Fibroid Embolization (UFE):UFE is a minimally invasive procedure where the blood vessels supplying the fibroids are blocked off, causing the fibroids to shrink and die</li>
                                <li>Surgical Options Myomectomy: A surgical procedure where fibroids are removed from the uterus. This option is often recommended for women who wish to preserve their fertility.</li>
                                <li>Lifestyle and Alternative Treatments:While not directly addressing fibroid size, maintaining a healthy weight and managing stress can help reduce the growth of fibroids</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold mb-6 text-center slide-side">How Uterine Fibroids Affect Fertility</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                Fibroids can impact fertility in several ways, though not every woman with fibroids will experience fertility problems. Some ways fibroids affect fertility include:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Distortion of the Uterine Cavity: Submucosal fibroids can change the shape of the uterine cavity, making it difficult for an embryo to implant.</li>
                                <li>Blockage of Fallopian Tubes: Large fibroids can block the fallopian tubes, preventing the egg from meeting the sperm.</li>
                                <li>Impaired Blood Flow to the Uterus: Intramural fibroids may reduce blood flow to the uterine lining, making it harder for an embryo to implant or for the pregnancy to thrive.</li>
                                <li>Hormonal Imbalance: Fibroids can produce hormones that interfere with ovulation, leading to irregular cycles and less chance of conception.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                In Uterine fibroids are a common cause of fertility problems, but with the right treatment, many women can still conceive and have healthy pregnancies. It is crucial to discuss your symptoms and treatment options with a healthcare provider who specializes in reproductive health. Whether through medication, surgery, or more advanced procedures like UFE, there are numerous options available to help manage fibroids and improve fertility outcomes
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
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">UterineFibroids</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">TreatmentOptions</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Myomectomy</button>
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
