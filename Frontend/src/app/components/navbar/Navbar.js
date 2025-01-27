"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../button/Button";
import getSession from "@/helpers/getSession";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getToken = async () => {
      const tokenValue = await getSession();
      setToken(tokenValue);
    };
    getToken();
  }, []); // Removed token from dependency to avoid unnecessary re-renders

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
      setToken(""); // Clear token state
      router.push("/"); // Redirect to home
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAppointment = async () => {
    const tokenValue = await getSession();
    if (!tokenValue) {
      alert("Please log in to book an appointment.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#9ab3e6] to-[#4568d0] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="../logo.png" height={50} width={50} alt="Logo" />
          <div className="ml-3 text-white">
            <p className="text-lg font-bold">Patient Management</p>
            <p className="text-sm">System</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white uppercase">
          <Link href="/" className="hover:scale-105 transition-all">Home</Link>
          <Link href="/about-us" className="hover:scale-105 transition-all">About Us</Link>
          <Link href="/appointment" className="hover:scale-105 transition-all" onClick={handleAppointment}>Appointment</Link>
          <Link href="/contact" className="hover:scale-105 transition-all">Contact</Link>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {!token ? (
            <>
              <Link href="/login">
                <Button title={"LogIn"} bgColor={"#1C2C4C"} padL={10} padT={5} color={"white"} borderRadius={"30px"} />
              </Link>
              <Link href="/register">
                <Button title={"Register"} bgColor={"#1C2C4C"} padL={10} padT={5} color={"white"} borderRadius={"30px"} />
              </Link>
            </>
          ) : (
            <button className="bg-[#1C2C4C] text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden z-[999] bg-slate-600 text-white text-center space-y-4 py-6 shadow-lg absolute w-full left-0">
          <Link href="/" className="block py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about-us" className="block py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/appointment" className="block py-2 hover:bg-gray-200" onClick={() => { handleAppointment(); setIsOpen(false); }}>Appointment</Link>
          <Link href="/contact" className="block py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Buttons (Mobile) */}
          <div className="flex flex-col space-y-4">
            {!token ? (
              <>
                <Link href="/login" className="w-full">
                  <Button title={"LogIn"} bgColor={"#1C2C4C"} padL={10} padT={5} color={"white"} borderRadius={"30px"} />
                </Link>
                <Link href="/register" className="w-full">
                  <Button title={"Register"} bgColor={"#1C2C4C"} padL={10} padT={5} color={"white"} borderRadius={"30px"} />
                </Link>
              </>
            ) : (
              <button className="bg-[#1C2C4C] text-white px-4 py-2 rounded-lg w-full" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
