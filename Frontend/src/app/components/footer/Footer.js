import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (


        < div className="bg-gradient-to-r from-[#9ab3e6] to-[#4568d0]" >
            <footer className="text-white py-6 flex flex-col md:flex-row justify-between items-center w-full">
                <div className="container m-auto flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl px-4 space-y-6 md:space-y-0">

                    {/* Section 1: Contact Information */}
                    <div className="flex flex-col items-center md:items-start min-w-[150px] px-2 text-center md:text-left">
                        <div className="font-bold mb-4">
                            <img src="/logo.png" alt="Logo" height={100} width={100} />
                        </div>
                        <div className="mb-2">www.salesprediction.com</div>
                        <div>01-4455997</div>
                    </div>

                    {/* Section 2: Links */}
                    <div className="flex flex-col items-center md:items-start min-w-[150px] px-2 text-center md:text-left space-y-2">
                        <h1 className="text-2xl font-bold underline my-2 hover:no-underline cursor-pointer">Links</h1>
                        <Link href="/" className=' hover:scale-110'>Home</Link>
                        <Link href="/about-us" className=' hover:scale-110'>About Us</Link>
                        <Link href="/contact" className=' hover:scale-110'>Contact</Link>
                    </div>

                    <div className="flex flex-col items-center md:items-start min-w-[150px] px-2 text-center md:text-left space-y-2">
                        <h1 className="text-2xl font-bold underline my-2 hover:no-underline cursor-pointer">Connect with us</h1>
                        <Link href={'https://www.facebook.com'} className="flex items-center space-x-2  hover:scale-110">
                            <FaFacebook />
                            <span>Facebook</span>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/lamsal25'} className="flex items-center space-x-2 hover:scale-110">
                            <FaLinkedin />
                            <span >Linkedin</span>
                        </Link>
                        <Link href={'https://www.instagram.com'} className="flex items-center space-x-2 hover:scale-110">
                            <FaInstagram />
                            <span>Instagram</span>
                        </Link>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="bg-gradient-to-r from-[#222222] to-[#02081d] text-white py-2 text-center text-sm">
                © 2024 Sales Prediction. All rights reserved.
            </div>
        </div >

    );
}
