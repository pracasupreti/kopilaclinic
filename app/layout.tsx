import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta name="description" content="A simple website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='bg-white text-gray-800 font-sans antialiased m-0 p-0'>
        <Header />        
        {children}
        <Footer />
      </body>
    </html>
  );
}