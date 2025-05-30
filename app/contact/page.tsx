'use client';

import Map from '@/components/Map';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="px-4 py-12 bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="text-green-700">Contact</span>{' '}
          <span className="text-pink-600">Kopila Fertility Clinic</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          For emergency care or to schedule an appointment & visit our clinic.
        </p>
      </div>

      {/* Main Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Contact Info Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Template */}
          {[
            {
              icon: <MapPin className="w-5 h-5 text-green-700" />,
              title: 'Visit us',
              lines: ['Jaycees Chowk, Damak-6, Jhapa'],
            },
            {
              icon: <Phone className="w-5 h-5 text-green-700" />,
              title: 'Contact us',
              lines: [
                <a
                  key="wa"
                  href="https://wa.me/9779709055065"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  WhatsApp: 9709055065
                </a>,
                <a
                  key="viber"
                  href="viber://chat?number=9779709055065"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Viber: 9709055065
                </a>,
              ],
            },
            {
              icon: <Clock className="w-5 h-5 text-green-700" />,
              title: 'Working hours',
              lines: ['Sun to Fri: 07:00AM – 07:00PM', 'Sat: 01:00PM – 03:00PM'],
            },
            {
              icon: <Mail className="w-5 h-5 text-green-700" />,
              title: 'Email us',
              lines: [
                <a
                  key="info"
                  href="mailto:info@kopilaclinic.com.np"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  info@kopilaclinic.com.np
                </a>,
                <a
                  key="drsita"
                  href="mailto:drsita@kopilaclinic.com.np"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  drsita@kopilaclinic.com.np
                </a>,
              ],
            },
          ].map(({ icon, title, lines }, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
              <div className="bg-[#EFF8FF] rounded-full w-10 h-10 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pink-600">{title}</h3>
              <div className="space-y-1 text-sm">
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Map */}
        <div className="flex-1 min-h-[400px]">
          <Map />
        </div>
      </div>
    </div>
  );
}
