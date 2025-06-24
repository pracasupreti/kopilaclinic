import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Kopila Fertility & Womens Clinic",
  description: "Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kopila Fertility & Womens Clinic</title>
        <meta name="description" content="A simple website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className='bg-white text-gray-800 font-sans antialiased m-0 p-0'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
