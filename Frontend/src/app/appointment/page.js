"use client";

import React, { useState } from "react";
import axios from "axios";


export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    address: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productCode = `TXN-${Date.now()}`;

      const res = await axios.post(
        "/api/initiatePayment",
        { amt: formData.amount, productCode },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.data.paymentUrl || !res.data.params) {
        throw new Error("Invalid payment response");
      }

      const { paymentUrl, params } = res.data;

      // Redirect using a form submission
      const form = document.createElement("form");
      form.method = "POST";
      form.action = paymentUrl;

      Object.keys(params).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed! Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block font-semibold">Patient Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Enter age"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="accent-green-500"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="accent-green-500"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                  className="accent-green-500"
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter address"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          {/* Amount */}
          <div>
            <label className="block font-semibold">Appointment Fee</label>
            <input
              type="number"
              name="amount"
              value={800}
              required
              readOnly
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-3 rounded w-full hover:bg-green-600 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>


    </div>
  );
}
