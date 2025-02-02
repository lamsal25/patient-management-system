"use client"

import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';

export default function ContactPage() {
    // Form state using useState hooks
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        communicationMethod: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to backend using the API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message)
                alert('Message sent successfully!');
            } else {
                // Handle error (e.g., show an error message)
                alert('Failed to send message.');
            }
        } catch (error) {
            // Handle network errors
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <>
        <Navbar/>
        <div >
            
            <div  >
                <section className="py-24 bg-gray-200">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <div className="lg:mb-0 mb-10">
                                <div className="group w-full h-full">
                                    <div className="relative h-full">
                                        <img
                                            src="https://pagedone.io/asset/uploads/1696488602.png"
                                            alt="ContactUs tailwind section"
                                            className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                                        />
                                        <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                                            Contact us
                                        </h1>
                                        <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                            <div className="bg-white rounded-lg p-6 block">
                                                <a
                                                    href="javascript:;"
                                                    className="flex items-center mb-6"
                                                >
                                                    <svg
                                                        width="30"
                                                        height="30"
                                                        viewBox="0 0 30 30"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                                                            stroke="#4F46E5"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                        01-4455997
                                                    </h5>
                                                </a>
                                                <a
                                                    href="https://veilmail.io/irish-geoff"
                                                    className="flex items-center mb-6"
                                                >
                                                    <svg
                                                        width="30"
                                                        height="30"
                                                        viewBox="0 0 30 30"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                                                            stroke="#4F46E5"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                        info@predictionsystem.com
                                                    </h5>
                                                </a>
                                                <a
                                                    href="javascript:;"
                                                    className="flex items-center"
                                                >
                                                    <svg
                                                        width="30"
                                                        height="30"
                                                        viewBox="0 0 30 30"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                                                            stroke="#4F46E5"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                        Jorpati, Kathmandu, Nepal
                                                    </h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pl-16 pl-6 border-2  border-black pr-10 rounded-lg">
                                <h1 className="font-manrope text-4xl font-bold leading-10 text-gray-900 mb-5">
                                    Send us a message
                                </h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6  mb-5"
                                >
                                    {/* Form Fields */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="communicationMethod"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Preferred communication method
                                        </label>
                                        <select
                                            id="communicationMethod"
                                            name="communicationMethod"
                                            className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                                            value={formData.communicationMethod}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Select a method
                                            </option>
                                            <option value="email">Email</option>
                                            <option value="phone">Phone</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Your message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 bg-indigo-700 text-white rounded-md hover:bg-indigo-600"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}
