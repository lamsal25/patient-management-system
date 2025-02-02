import React from "react";

export default function Testimonials() {
    const reviews = [
        { 
            name: "Dr. Sarah Lee", 
            feedback: "This system has streamlined our patient management effortlessly!", 
            role: "Doctor", 
            image: "/patient1.jpeg" 
        },
        { 
            name: "John Doe", 
            feedback: "Booking appointments and accessing my medical history has never been this easier!", 
            role: "Patient", 
            image: "/patient2.jpeg" 
        },
        { 
            name: "Emma Watson", 
            feedback: "A game-changer for digital medical records!", 
            role: "Healthcare Provider", 
            image: "/patient3.jpeg" 
        }
    ];

    return (
        <div className="py-16 bg-gray-100">
            <h2 className="text-center text-4xl font-mono font-bold text-gray-800">What Our Users Say</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-16">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-xl max-w-xs text-center transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mx-auto border-4 border-blue-500" />
                        <p className="mt-4 text-gray-600 italic">{review.feedback}</p>
                        <h4 className="mt-4 font-bold text-lg text-gray-800">{review.name}</h4>
                        <p className="text-sm text-blue-500 font-semibold">{review.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
