import React from 'react';
import { FaUserPlus, FaCalendarCheck, FaFileMedical } from 'react-icons/fa';

export default function HowItWorks() {
    const steps = [
        { icon: <FaUserPlus className="text-blue-500 text-4xl" />, title: "Register", description: "Sign up and create your patient profile securely." },
        { icon: <FaCalendarCheck className="text-green-500 text-4xl" />, title: "Book Appointment", description: "Schedule appointments with doctors instantly." },
        { icon: <FaFileMedical className="text-red-500 text-4xl" />, title: "View Records", description: "Access your medical history anytime, anywhere." },
    ];

    return (
        <div className="py-16 bg-white">
            <h2 className="text-center text-4xl font-mono">How the System Works </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-20">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center max-w-xs text-center">
                        {step.icon}
                        <h4 className="mt-4 font-bold text-xl">{step.title}</h4>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
