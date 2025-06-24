import React from 'react';
import { Metadata } from 'next';
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'; // Example icons
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactCardProps {
  icon: React.ElementType; // Type for Heroicon components
  title: string;
  content: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-start space-y-3">
    <div className="bg-blue-50 text-blue-600 p-3 rounded-full">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <div className="text-gray-500 text-base">{content}</div>
  </div>
);

// Map Component - Placeholder (See Google Maps Embedding section below)
const MapComponent: React.FC = () => (
  <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '640px', width: '100%' }}>
    {/* This is where your Google Map iframe or library integration will go */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3565.61545835821!2d87.69899!3d26.660792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f57b9806635%3A0xe165b513be0335a6!2sKopila%20Fertility%20%26%20Womens%20Clinic!5e0!3m2!1sen!2snp!4v1750173597681!5m2!1sen!2snp"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false} // Change to true if desired
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Kopila Fertility & Womens Clinic Map"
    ></iframe>
  </div>
);


export const metadata: Metadata = {
  title: 'Contact Us - Kopila Fertility Clinic',
  description: 'Get in touch with Kopila Fertility Clinic for appointments and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
        <div className="text-center bg-green-50 mb-12 py-28">
      <h1 className="text-4xl md:text-5xl font-bold text-secondary">
        Contact <span className='text-primary'> Us</span>
      </h1>
      <p className="text-primary mt-4 text-sm md:text-base">
        Home <span className='text-secondary'> / </span>Contact Us
      </p>
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            
          <p className="text-sm text-secondary font-semibold mb-2"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
               CONTACT INFO</p>
            <h2 className="text-5xl font-bold text-secondary mb-4">Contact <span className='text-primary'>Kopila Fertility Clinic</span></h2>
            <p className="text-gray-600 text-base">For emergency care or to schedule an appointment &amp; visit our clinic.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 py-8">
              <ContactCard
                icon={MapPinIcon}
                title="visit us"
                content={
                  <>
                    <p>Jaycess Chowk, Damak 6,</p>
                    <p>Jhapa</p>
                  </>
                }
              />
              <ContactCard
                icon={PhoneIcon}
                title="contact us"
                content={
                  <>
                    <p>WhatsApp: <a href="https://wa.me/9779709055065" className="text-blue-600 hover:underline">9779709055065</a></p>
                    <p>Viber: <a href="viber://chat?number=%2B9779709055065" className="text-blue-600 hover:underline">9779709055065</a></p>
                  </>
                }
              />
              <ContactCard
                icon={ClockIcon}
                title="working hours"
                content={
                  <>
                    <p>Sun to Fri : 07:00AM To 07:00PM</p>
                    <p>Sat : 01:00PM To 3:00PM</p>
                  </>
                }
              />
              <ContactCard
                icon={EnvelopeIcon}
                title="email us"
                content={
                  <>
                    <p><a href="mailto:info@kopilaclinic.com.np" className="text-blue-600 hover:underline">info@kopilaclinic.com.np</a></p>
                    <p><a href="mailto:drsiita@kopilaclinic.com.np" className="text-blue-600 hover:underline">drsiita@kopilaclinic.com.np</a></p>
                  </>
                }
              />
            </div>
          </div>

          {/* Right Column: Google Map */}
          <div className="flex justify-center items-center">
            <MapComponent />
          </div>
        </div>
      </div>
      
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
}