import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./globals.css";
import { ArrowRight,  Star, Baby, Heart, Stethoscope, Phone, Clock  } from "lucide-react";

export default function page() {
  return (
    <div className=" p-12  bg-green-50 rounded-lg shadow-lg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10 mt-20">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute top-20 -right-5 w-8 h-8 bg-pink-300 rounded-full opacity-40"></div>

              <h1 className="text-6xl md:text-6xl font-bold text-pink-600 mb-6">Fertility <span className="text-green-600">and</span> womens Clinic</h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The clinic specializes in infertility treatment, intrauterine insemination (IUI), antenatal care, and
                gynecological services.
              </p>

              <Link href="/appointments">
                <button className="bg-green-600 relative overflow-hidden text-white px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] rounded-full px-8 py-3 text-lg flex items-center mb-8">
                  Book An Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

              {/* Google Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-pink-500 font-semibold mr-2">Google Rating</span>
                  <span className="text-2xl font-bold text-gray-900">4.7</span>
                  <div className="flex ml-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-pink-500 text-sm">Based On Public Reviews</span>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              {/* Decorative icons */}
              <div className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center opacity-80">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Baby className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute bottom-32 left-5 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Stethoscope className="h-8 w-8 text-pink-500" />
              </div>
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>

              {/* Main Hero Image */}
              <div className="relative">
                <img src="image.png" alt="Mother and child" className="w-full h-auto rounded-lg" />

                {/* Doctor Profile Card */}
                <div className="absolute bottom-10 left-5 bg-white shadow-xl">
                  <div className="p-4 flex items-center space-x-3">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Dr. Sita Rai"
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-pink-500">Dr. Sita Rai</h3>
                      <p className="text-sm text-gray-600">Gynaecologist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Consult A Doctor */}
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Consult A Doctor</h3>
                <p className="text-pink-100">Call on : (+977) 970 905 5065</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Opening Hours</h3>
                <p className="text-pink-100">Sunday to Friday 07:00AM to 07:00PM</p>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="flex justify-center md:justify-end">
              <Link href="/appointments">
                <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 flex items-center">
                  Book An Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}