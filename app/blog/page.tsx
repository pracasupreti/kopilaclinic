
"use client";
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

// Define a type for the blog post
type BlogPost = {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  readMoreLink: string;
};

// Dummy data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: '/blog/ovulation-induction.jpg',
    alt: 'Understanding Ovulation Induction: A Key To Overcoming Infertility',
    title: 'Understanding Ovulation Induction: A Key To Overcoming Infertility',
    description: 'Ovulation induction is an essential treatment for women struggling with infertility due to irregular or absent ovulation. This blog explores how ovulation induction works, the medications involved, and how it can increase the chances of conception. Learn how this treatment can bring hope to those wishing to start or expand their families.',
    readMoreLink: '/blog/understanding-ovulation-induction',
  },
  {
    id: 2,
    image: '/blog/intrauterine-insemination.jpg',
    alt: 'Intrauterine Insemination (IUI): A Simple And Effective Fertility Solution',
    title: 'Intrauterine Insemination (IUI): A Simple And Effective Fertility Solution',
    description: 'Intrauterine Insemination (IUI) is a popular and minimally invasive fertility treatment that helps improve the chances of pregnancy. This blog explores how IUI procedures are done, its benefits and how it can be a great solution for couples facing mild infertility challenges.',
    readMoreLink: '/blog/intrauterine-insemination-iui',
  },
  {
    id: 3,
    image: '/blog/ivf.jpg',
    alt: 'IVF: The Path To Parenthood For Couples Facing Fertility Challenges',
    title: 'IVF: The Path To Parenthood For Couples Facing Fertility Challenges',
    description: 'In Vitro Fertilization (IVF) offers a lifeline to couples struggling with infertility. This blog delves into the IVF process, how eggs are retrieved and fertilized to embryos, and how it provides hope to women and why it is often the most effective treatment for various infertility issues.',
    readMoreLink: '/blog/couples-facing-fertility-challenges',
  },
  {
    id: 4,
    image: '/blog/antenatal-checkup.jpg',
    alt: 'The Importance Of Regular Antenatal Check-Ups For A Healthy Pregnancy',
    title: 'The Importance Of Regular Antenatal Check-Ups For A Healthy Pregnancy',
    description: 'Antenatal care is crucial for monitoring the health of both the mother and the baby throughout pregnancy. This blog highlights the significance of regular antenatal check-ups, the tests involved, and how they help prevent complications, ensuring a smooth and healthy pregnancy journey.',
    readMoreLink: '/blog/the-importance-of-regular-antenatal',
  },
  {
    id: 5,
    image: '/blog/pcod.jpg',
    alt: 'Polycystic Ovary Syndrome (PCOS): Symptoms, Causes, And Treatment Options',
    title: 'Polycystic Ovary Syndrome (PCOS): Symptoms, Causes, And Treatment Options',
    description: 'PCOS is a common hormonal disorder that affects many women of reproductive age. This blog explains the causes, symptoms, and long-term effects of PCOS, along with treatment options and lifestyle changes. Learn how to manage the condition and improve your overall health.',
    readMoreLink: '/blog/polycystic-ovary-syndrome-pcod',
  },
  {
    id: 6,
    image: '/blog/endometriosis.jpg',
    alt: 'Endometriosis: Understanding The Impact On Fertility And Treatment Options',
    title: 'Endometriosis: Understanding The Impact On Fertility And Treatment Options',
    description: 'Endometriosis can significantly affect a woman\'s fertility and overall well-being. This blog explores the condition, how it impacts pain and infertility, and discusses treatment options such as medication, surgery, and fertility treatments to help women manage the condition and increase their chances of pregnancy.',
    readMoreLink: '/blog/understanding-the-impact-on-fertility-and-treatment-options',
  },
  {
    id: 7,
    image: 'blog/uterine-fibroids.jpg',
    alt: 'Uterine Fibroids: How They Affect Fertility and Available Treatment Options',
    title: 'Uterine Fibroids: How They Affect Fertility and Available Treatment Options',
    description: 'Uterine fibroids are non-cancerous growths that can lead to heavy bleeding and infertility. This blog outlines the different types of fibroids, how they impact fertility, and the various treatment options, including medication, surgery, and uterine fibroid embolization, to improve reproductive health.',
    readMoreLink: '/blog/how-they-affect-fertility-and-available-treatment-options',
  },
  {
    id: 8,
    image: '/blog/adenomyosis.jpg',
    alt: 'Adenomyosis: Recognizing Symptoms and Treatment for Womens Health',
    title: 'Adenomyosis: Recognizing Symptoms and Treatment for Womens Health',
    description: 'Adenomyosis is a condition where tissue from the uterine lining grows into the muscular wall of the uterus. This blog explains the symptoms, effects on fertility, and available treatments, including medication and surgical options, for managing adenomyosis and improving quality of life.',
    readMoreLink: '/blog/recognizing-symptoms-and-treatment-for-womens-health',
  },
  {
    id: 9,
    image: 'blog/pid.jpg',
    alt: 'Pelvic Inflammatory Disease (PID): Causes, Symptoms, and Treatment for Fertility Preservation',
    title: 'Pelvic Inflammatory Disease (PID): Causes, Symptoms, and Treatment for Fertility Preservation',
    description: 'Pelvic Inflammatory Disease (PID) is a common infection that can affect fertility if left untreated. This blog provides an overview of PID, its causes, symptoms, and treatment options to prevent complications and preserve fertility, highlighting the importance of early diagnosis and intervention.',
    readMoreLink: '/blog/pelvic-inflammatory-disease-pid',
  },

];

const App: React.FC = () => {
  return (
    <div className="font-inter antialiased bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-green-50 py-12 md:py-12 lg:py-30 text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Our <span className='text-secondary'> Blog </span></h1>
        <p className="font-semibold text-primary">Home <span className='text-secondary'>/</span> Blog</p>
      </header>

      {/* Blog Posts Grid Section */}
      <main className="container mx-auto px-2 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="">
              <Image
                src={post.image.startsWith('/') ? post.image : `/${post.image}`}
                alt={post.alt}
                width={400}
                height={224}
                className="w-full h-66 rounded-4xl object-cover transform hover:scale-105 transition-transform duration-500 rounded-t-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = `https://placehold.co/400x250/F3E8FF/5B21B6?text=Image+Not+Found`;
                }}
                priority={post.id <= 3}
                unoptimized={post.image.startsWith('http')}
              />
              <div className="px-2 py-6">
                {/* Blog Post Title */}
                <h2 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {post.title}
                </h2>
                {/* Blog Post Description */}
                <p className="text-txt text-base mb-4 line-clamp-4">
                  {post.description}
                </p>
                {/* Read More Button */}
                <Link
                  href={post.readMoreLink}
                  className="inline-block bg-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-secondary transition duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      
          {/* Floating contact buttons */}
                  <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4 animate-bounce">
                    <a
                      href="https://wa.me/9779709055065"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
                    >
                      <FaWhatsapp className="w-7 h-7 text-white" />
                    </a>
                  </div>
    </div>
  );
};

export default App;
