import Footer from '@/components/footer';
import './globals.css'
import Header from '@/components/header';

export default function layout({ children }: { children: React.ReactNode }) {



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