// app/Assets/assets.js

// Import blog images directly from Assets folder
import adenomyosis from './adenomyosis.jpg';
import antenatal from './antenatal-checkup.jpg';
import endometriosis from './endometriosis.jpg';
import iui from './intrauterine-insemination.jpg';
import ivf from './ivf.jpg';
import ovulation from './ovulation-induction.jpg';
import pcod from './pcod.jpg';
import pid from './pid.jpg';
import fibroids from './uterine-fibroids.jpg';

// Export only blog_data (no icons available)
export const blog_data = [
  {
    id: 1,
    slug: 'antenatal-check-ups',
    title: "The Importance Of Regular Antenatal Check-Ups",
    excerpt: "Antenatal care is crucial for monitoring the health of both mother and baby...",
    image: antenatal,
  },
  {
    id: 2,
    slug: 'understanding-ovulation',
    title: "Understanding Ovulation",
    excerpt: "Learn how ovulation affects fertility and how to track it effectively.",
    image: ovulation,
  },
  {
    id: 3,
    slug: 'pelvic-inflammatory-disease',
    title: "What is Pelvic Inflammatory Disease (PID)?",
    excerpt: "PID can lead to infertility if left untreated. Here’s what you need to know.",
    image: pid,
  },
  {
    id: 4,
    slug: 'adenomyosis-awareness',
    title: "Understanding Adenomyosis",
    excerpt: "Adenomyosis can cause heavy periods and pain. Learn how it's managed.",
    image: adenomyosis,
  },
  {
    id: 5,
    slug: 'uterine-fibroids',
    title: "Dealing with Uterine Fibroids",
    excerpt: "Fibroids are noncancerous growths that affect fertility and menstrual health.",
    image: fibroids,
  },
  {
    id: 6,
    slug: 'endometriosis-guide',
    title: "A Guide to Endometriosis",
    excerpt: "Endometriosis is often misunderstood. Discover symptoms, diagnosis, and treatment.",
    image: endometriosis,
  },
  {
    id: 7,
    slug: 'understanding-pcod',
    title: "PCOD: What You Should Know",
    excerpt: "PCOD affects many women and may impact hormonal balance and fertility.",
    image: pcod,
  },
  {
    id: 8,
    slug: 'ivf-process',
    title: "How IVF Works",
    excerpt: "In Vitro Fertilization is a major fertility option. Here’s a breakdown of the steps.",
    image: ivf,
  },
  {
    id: 9,
    slug: 'iui-treatment',
    title: "Introduction to Intrauterine Insemination (IUI)",
    excerpt: "Learn how IUI can increase chances of pregnancy for some couples.",
    image: iui,
  },
];
