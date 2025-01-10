import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className=" bg-gradient-to-r from-[#9ab3e6] to-[#4568d0]">
            <footer className=" text-white py-6 flex flex-col md:flex-row justify-between items-center w-full">
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
                        <h1 className="text-2xl font-bold underline my-2">Links</h1>
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <div className="bg-gradient-to-r from-[#222222] to-[#02081d] text-white py-2 text-center text-sm">
                © 2024 Sales Prediction. All rights reserved.
            </div>
        </div>
    );
}
