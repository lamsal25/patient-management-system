"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // import useRouter
import Navbar from "../components/navbar/Navbar";

export default function Register() {
  const router = useRouter(); // initialize useRouter
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page refresh
    try {
      console.log("Sending data:", formData);
      const response = await axios.post("http://localhost:8080/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Server Response:", response.data);

      if (response.data.message === "Registered successfully") {
        alert(response.data.message);
        router.push("/login"); // Redirect to login page
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      if (err.response) {
        console.log("Error Response Data:", err.response.data); // Log error details
        alert(err.response.data.message); // Display error message to the user
      } else {
        console.log(err.message); // Log generic error
      }
    }
  };

  return (
    <>
    <Navbar/>
      <div className=" min-h-screen flex bg-neutral-900 items-center justify-center bg-cover bg-center relative">
        <img src="../background.jpg" className=" opacity-40 min-h-screen bg-cover bg-center md:bg-contain" />

        <div className="bg-white absolute shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-black mb-6">Register</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
              First Name:
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
