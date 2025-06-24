"use client";
import { User, Clock } from "lucide-react";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const FertilityInfoPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center slide-side">
                <h1 className="text-xl md:text-3xl font-bold text-primary">IVF: The Path to Parenthood for Couples Facing Fertility Challenges</h1>
                {/* Author and Date Information */}

                <AnimateOnScroll>
                    <p className="flex text-base font-semibold mt-2 text-secondary items-center justify-center">
                        <User />
                        <span className="flex px-2 text-primary">
                            Salina Bastola
                        </span>{' '}
                        / <Clock /> <span className="flex px-2 text-primary"> 5 Jan 2025</span>
                    </p></AnimateOnScroll>
            </header>

            <main className="container mx-auto px-4 py-8">
                <Image src="/blog/ivf.jpg"
                    alt="ovulation-induction"
                    height={800}
                    width={800}
                    className="min-h-full min-w-full rounded-4xl my-4 image-unwrap"
                />
                <div className=" px-20">
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 text-base slide-down">
                            <p className="mb-4 py-2">
                                In Vitro Fertilization (IVF) offers a lifeline to couples struggling with infertility. This blog delves into the IVF process, from egg retrieval and fertilization to embryo transfer, explaining how it works and why it is often the most effective solution for certain infertility issues.
                            </p>
                            <p>
                                In Vitro Fertilization (IVF) is a groundbreaking medical procedure that has helped countless couples struggling with infertility realize their dream of becoming parents. IVF involves the combination of an egg and sperm outside the body in a laboratory, resulting in fertilization, and then transferring the embryo into the uterus for implantation and pregnancy. This blog will take you through the steps of the IVF process and explain why it is often the most effective solution for specific infertility issues.
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="flex bg-back rounded-4xl p-4 mb-8 shadow-sm slide-down">
                            <Image src="/testimonials/icon-quote.svg" height={40} width={40} alt={"icon-quote"} className="" />
                            <p className="text-primary font-semibold text-xl p-4">
                                &quot;Dealing with male infertility, ovulation disorders, or other issues, IVF offers a pathway to parenthood when other treatments have not worked.&quot;
                            </p>
                        </section>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <section className="text-txt leading-relaxed mb-8 slide-down">
                            <p>
                                The success rates of IVF vary depending on several factors, such as the woman&apos;s age, egg and sperm quality, and underlying infertility issues. On average, women under 35 have a 40-45% success rate per cycle, while rates decrease with age, dropping to around 10-15% for women aged 41-42 and 5% or lower for women over 42. Younger women generally produce higher-quality eggs, which improves chances of success, while age-related declines in egg quality can lower outcomes. Other factors like sperm quality and the clinic&apos;s expertise also play a role in IVF success.
                            </p>
                        </section>
                    </AnimateOnScroll>

                    <section className="mb-8">
                        {/* Section title */}
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Understanding the Medications</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                IVF can be an emotional rollercoaster, and the process can take a physical toll on the body due to hormone treatments, procedures, and the uncertainty of the outcome. Couples may experience stress, anxiety, and emotional fatigue. It&apos;s essential to have a strong support system, whether that be a partner, family, friends, or a therapist, to navigate the ups and downs of the IVF process.IVF is often considered the most effective treatment for various infertility issues, including:
                            </p>
                        </AnimateOnScroll>
                        {/* Unordered list of key points */}
                        <AnimateOnScroll>
                            <ul className="list-disc pl-5 text-primary space-y-2 mb-8 text-base font-semibold slide-down">
                                <li>Blocked or Damaged Fallopian Tubes: IVF bypasses the fallopian tubes entirely, allowing fertilization to occur in the lab instead of within the body.</li>
                                <li>Male Infertility: IVF, especially when combined with ICSI, can address male infertility factors, including low sperm count or motility.</li>
                                <li>Ovulation Disorders: Women who do not ovulate regularly can benefit from IVF by using ovarian stimulation to produce multiple eggs for retrieval.</li>
                                <li>Endometriosis: Women with endometriosis who face difficulty getting pregnant may find IVF to be a successful solution.</li>
                                <li>Unexplained Infertility: If the cause of infertility cannot be identified, IVF offers a more direct approach, increasing the chances of conception.</li>
                            </ul>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <p className="text-txt leading-relaxed mb-4 slide-down">
                                In conclusion,Intrauterine insemination is a simple, effective, and minimally invasive fertility treatment that can be a great option for couples facing mild to moderate infertility challenges. With a good understanding of the procedure, success rates, and potential risks, couples can make an informed decision about whether IUI is the right choice for them. If you&apos;re struggling to conceive, speak with your fertility specialist to explore your options and determine if IUI could help you on your journey to parenthood.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <h2 className="text-4xl text-primary font-bold text-gray-800 mb-6 text-center slide-side">Why IVF is Effective for Certain Infertility Issues</h2>
                            <p className="text-txt leading-relaxed mb-6 slide-down">
                                IVF is effective for various infertility issues because it bypasses many natural barriers to conception. For women with blocked or damaged fallopian tubes, IVF allows fertilization to occur outside the body, eliminating the need for the tubes. In cases of male infertility, techniques like ICSI can help even with low sperm count or poor motility by directly injecting sperm into the egg. For women with endometriosis, IVF can overcome complications like scar tissue and improve the chances of successful pregnancy. IVF also offers a solution for unexplained infertility by optimizing the conditions for fertilization and embryo implantation. Essentially, IVF addresses specific fertility challenges by directly controlling the fertilization process and increasing the chances of conception.IVF is often considered the most effective fertility treatment for several reasons:
                            </p>
                            <p className="text-txt leading-relaxed mb-4 slide-down">
                                In conclusion, In Vitro Fertilization has been a revolutionary advancement in the field of reproductive medicine. While the process may seem daunting, understanding the steps involved and knowing why IVF is the right choice can provide clarity and hope for couples facing infertility challenges. Whether dealing with male infertility, ovulation disorders, or other issues, IVF offers a pathway to parenthood when other treatments have not worked.
                            </p>
                        </AnimateOnScroll>
                        <div className="h-px bg-gray-300 my-4"></div>
                    </section>
                </div>


                <AnimateOnScroll>
                    <section className="flex text-center justify-center slide-down">
                        <p className="text-primary font-semibold text-xl mr-6">Tags : </p>
                        <div className="flex gap-80">
                            <div className="flex gap-4">
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">VitroFertilization</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Ovulation</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Fertility</button>
                                <button className="bg-secondary text-white font-semibold p-3 rounded-lg text-base hover:bg-primary">Parenthood</button>
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
