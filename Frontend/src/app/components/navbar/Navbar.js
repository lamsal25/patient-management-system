"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#9ab3e6] to-[#4568d0]">
      <div className="container m-auto flex justify-between items-center text-white py-4 px-4 md:px-8">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="../logo.png" height={50} width={50} alt="Logo" />
          <div className="ml-3 text-center">
            <p className="text-sm md:text-base font-bold">Patient Management</p>
            <p className="text-sm md:text-base">System</p>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-10 uppercase mt-4 md:mt-0 text-center`}
        >
          <Link href="/" className="hover:scale-105 transition-all">
            Home
          </Link>
          <Link href="/about-us" className="hover:scale-105 transition-all">
            About Us
          </Link>
          <Link href="/appointment" className="hover:scale-105 transition-all">
            Appointment
          </Link>
          <Link href="/contact" className="hover:scale-105 transition-all">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <Link href="/login" className="hover:scale-105 transition-all">
            <Button
              title={"LogIn"}
              bgColor={"#1C2C4C"}
              padL={10}
              padT={5}
              color={"white"}
              borderRadius={"30px"}
            />
          </Link>
          <Link href="/register" className="hover:scale-105 transition-all">
            <Button
              title={"Register"}
              bgColor={"#1C2C4C"}
              padL={10}
              padT={5}
              color={"white"}
              borderRadius={"30px"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
