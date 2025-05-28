"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Heart, ArrowLeft, Phone, Clock, CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    service: "",
    time: "",
    message: "",
  })

  const services = [
    "Ovulation induction",
    "Intrauterine Insemination (IUI)",
    "In Vitro Fertilization (IVF)",
    "Antenatal Checkup",
    "Polycystic Ovary Syndrome (PCOD)",
    "Endometriosis Treatment",
    "Uterine Fibroids",
    "Adenomyosis",
    "Pelvic Inflammatory Disease (PID)",
    "Menstrual Irregularities",
    "Ovarian Cysts",
    "Vaginitis",
    "other",
  ]

  const timeSlots = [
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Appointment request submitted successfully! We will contact you shortly to confirm.")
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your consultation with our fertility and women's health specialists. We're here to support your journey to wellness.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 flex items-center space-x-4 rounded-md">
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Us Directly</h3>
              <p className="text-pink-100">+977 970 905 5065</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 flex items-center space-x-4 rounded-md">
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Clinic Hours</h3>
              <p className="text-green-100">Sunday to Friday: 07:00AM - 07:00PM</p>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="shadow-lg bg-white rounded-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Appointment Request Form</h2>
          <p className="text-gray-600 mb-6">
            Please fill out the form below and we'll contact you to confirm your appointment within 24 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="text-gray-700">First Name *</label>
                <input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-gray-700">Last Name *</label>
                <input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="text-gray-700">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-700">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="text-gray-700">Date of Birth *</label>
              <input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                required
                className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
              />
            </div>

            {/* Appointment Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700">Service Required *</label>
                  <select
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                    required
                  >
                    <option value="">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option> 
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-gray-700">Preferred Time *</label>
                  <select
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-gray-700">Preferred Date *</label>
                <div className="mt-1">
                  <button
                    type="button"
                    className="w-full p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 text-left"
                    onClick={() => setDate(new Date())} // Add your date picker logic here
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="text-gray-700">Additional Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please describe your concerns or any specific requirements"
                  className="mt-1 p-3 border border-gray-300 focus:border-pink-500 focus:ring-pink-500 w-full"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-3 rounded-full"
              >
                Submit Appointment Request
              </button>
            </div>
          </form>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-blue-50 p-6 rounded-md">
          <h3 className="text-blue-900 text-xl font-semibold">Important Information</h3>
          <ul className="space-y-2 text-sm text-blue-800 mt-4">
            <li>• Please arrive 15 minutes before your scheduled appointment.</li>
            <li>• Bring any previous medical records or test results related to your condition.</li>
            <li>• Our clinic is closed on Saturdays.</li>
            <li>• For urgent matters, please call us directly at +977 970 905 5065.</li>
            <li>• Appointment confirmations will be sent via SMS and email.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
