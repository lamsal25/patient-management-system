import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-b from-[#E3F2FD] to-white">
      <header className="bg-blue-300 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide exceptional healthcare services with a focus on availability, reliability, and support.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold text-gray-900">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold text-gray-900">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E3F2FD] text-gray-900 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900">Our Healthcare Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:bg-[#DCEBFB] transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Cardiology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:bg-[#DCEBFB] transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Neurology</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:bg-[#DCEBFB] transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Pediatrics</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:bg-[#DCEBFB] transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Oncology</h3>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900">State-Of-The-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Advanced Diagnostics</h3>
            <p className="text-gray-700 mt-2">We utilize the latest technology for accurate diagnostics.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#E3F2FD] hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Telemedicine</h3>
            <p className="text-gray-700 mt-2">Consult with our specialists from the comfort of your home.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E3F2FD] text-center py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-900">Committed To Your Health And Happiness</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className=" cursor-pointer p-4 shadow-lg rounded-lg bg-white hover:bg-[#6eacef] transition-colors">
          <Link href={'/appointment'}>  <h3 className="text-xl font-bold text-gray-900">Book Appointment</h3></Link>
            
          </div>
           
        </div>
      </section>
 
    </div>
    </>
  )
}
