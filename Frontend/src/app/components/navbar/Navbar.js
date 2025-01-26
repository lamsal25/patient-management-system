"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../button/Button";
import getSession from "@/helpers/getSession";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('')

  const router = useRouter()

  useEffect(()=>{
    const getToken = async()=>{
      const tokenValue = await getSession() // Get the cookie value
      console.log('Token:', tokenValue);
      setToken(tokenValue)
    }
    getToken()
  },[token])

  const handleLogout = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/logout', {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true // Ensure cookies are sent/cleared
        });
        console.log(response.data);
        setToken(''); // Clear local state
        router.push('/'); // Redirect to home
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

const handleAppointment = async()=>{
  const tokenValue = await getSession()
  if(!tokenValue){
    alert("please login for booking appointment")
  }
}

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
          className={`${isOpen ? "block" : "hidden"
            } md:flex space-y-4 md:space-y-0 md:space-x-10 uppercase mt-4 md:mt-0 text-center`}
        >
          <Link href="/" className="hover:scale-105 transition-all">
            Home
          </Link>
          <Link href="/about-us" className="hover:scale-105 transition-all">
            About Us
          </Link>
          <Link href="/appointment" className="hover:scale-105 transition-all" onClick={handleAppointment}>
            Appointment
          </Link>
          <Link href="/contact" className="hover:scale-105 transition-all">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          {!token ? (
            <div className="flex gap-x-4">
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
          ) : (
            <div>

              <button
                className="bg-[#1C2C4C] text-white px-4 py-2 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
