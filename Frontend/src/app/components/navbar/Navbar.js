"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../button/Button';

export default function Navbar() {
 
  return (
    <div className="bg-gradient-to-r from-[#9ab3e6] to-[#4568d0]">
      <div className="container m-auto flex justify-between items-center text-white py-4">
     <div className='flex'>
     <img src='../logo.png' height={50} width={50}></img>
    
    <div className=' ml-3 text-center'> 
     <p>Patient Management</p> 
     <p>System</p>
     </div>
     </div>
        <div className="space-x-10 uppercase">
          <Link href="/" className="hover:scale-105 transition-all">Home</Link>
          <Link href="/about-us" className="hover:scale-105 transition-all">About Us</Link>
          <Link href="/appointment" className="hover:scale-105 transition-all" >Appointment</Link>
          <Link href="/contact" className="hover:scale-105 transition-all" >Contact</Link>
          
        </div>

       
          <div className="flex space-x-6">
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
                title={"register"}
                bgColor={"#1C2C4C"}
                padL={10}
                padT={5}
                color={"white"}
                borderRadius={"30px"}
              />
            </Link>
          </div>
        
          {/* <div className="space-x-6">
            <button
              className="bg-[#1C2C4C] text-white px-4 py-2 rounded-lg"
              
            >
           Logout
            </button>
          </div> */}
        
      </div>
    </div>
  );
}
