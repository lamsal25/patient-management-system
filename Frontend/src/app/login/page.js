"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/login', {

                email,
                password,
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data)
            // const token = Cookies.get('token'); // Get the cookie value
            //  console.log('Token:', token);

            if (response.data.message === "login success") {
                alert(response.data.message);
                router.push('/')
            }
            else {
                setError(response.data.message)
            }

        } catch (err) {
            if (err.response) {
                console.log('Error Response:', err.response.data);
                setError(err.response.data.message || 'Login failed. Please try again.');
            } else {
                setError('An error occurred during login.');
            }
        }
    };

    return (
        <>
            <div className=" min-h-screen flex bg-neutral-900 items-center justify-center bg-cover bg-center relative">
                <img src="../background.jpg" className=" opacity-40 min-h-screen bg-cover bg-center md:bg-contain rotate-180" />

                <div className="absolute min-h-screen flex  items-center">
                    <div className="card px-8  rounded-3xl bg-[#ffffff] w-72 mx-auto shadow-2xl shadow-black">
                        <div className='flex py-10 justify-center'>
                            <div className='relative h-5 w-5'>
                                <div className='h-full w-full bg-[#3737c7] [border:3px solid black] [border-radius:50%] mt-2 absolute animate-ping right-1'></div>
                                <div className='h-5 w-5 bg-[#4423e9] [border:3px solid black] [border-radius:50%] mt-2 absolute right-1'></div>
                            </div>
                            <h1 className="text-center font-bold text-3xl text-[#4423e9] ml-3"><u>Login</u></h1>
                        </div>

                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                            Email:
                        </label>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="p-2 mb-4 rounded w-[100%] focus:outline-blue-600 border-gray-500 border-2"
                                placeholder="example@gmail.com"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <label className=" mt-6 block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
                                Password:
                            </label>
                            <input
                                className="p-2 mb-4 rounded w-[100%] focus:outline-blue-600 border-gray-500 border-2"
                                placeholder="example@123"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-[#247e43] my-7 text-white font-semibold p-2 mt-3 rounded-2xl w-[100%]"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
