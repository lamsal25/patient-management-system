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
    amount: 800,
  });

  const [buttonName, setButtonName] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonName(e.nativeEvent.submitter.name)

    try {

      const productCode = `TXN-${Date.now()}`;

      if (buttonName == 'esewa') {
        const res = await axios.post(
          "/api/initiatePayment",
          { amount: formData.amount, productCode },
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
      }

      else if (buttonName == 'khalti') {

        const response = await axios.post(
          "/api/khaltiPayment",
          { amount: formData.amount, productCode },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("Backend Response:", response.data); // Debugging

        const { paymentUrl, payload, secret } = await response.data || {};

        if (!paymentUrl || !payload || !secret) {
          throw new Error("Missing payment details from backend");
        }

        console.log("Initiating Khalti Payment:", paymentUrl, payload);

        const khaltiResponse = await axios.post(paymentUrl, payload, {
          headers: {
            Authorization: `Key ${secret}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Khalti Response:", khaltiResponse.data);

        if (khaltiResponse.data.payment_url) {
          window.location.href = khaltiResponse.data.payment_url; // Redirects user
        } else {
          console.error("Khalti response did not contain a payment URL.");
        }
        try {
          const storeDetail = await axios.post("http://localhost:8080/api/payment", formData, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        
          console.log("Response from server:", storeDetail);
        
          // Correct way to access the ID from the response
          const id = storeDetail.data.id;  // ✅ storeDetail.data.id, not storeDetail.id
        
          console.log("Stored Payment ID:", id);
        
          // Save the ID in localStorage
          localStorage.setItem("payment_id", id);
        } catch (error) {
          console.error("Appointment details cannot be saved", error);
        }
        

      }
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
              value={formData.amount}
              required
              readOnly
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex  gap-5">
            {/* Submit Button */}
            <button
              type="submit" name="esewa" id="esewa"
              className="bg-green-500 text-white px-4 py-3 rounded w-full hover:bg-green-600 transition"
            >
              Pay via esewa
            </button>
            <button
              type="submit" name="khalti"
              className="bg-purple-800 text-white px-4 py-3 rounded w-full hover:bg-purple-600 transition"
            >
              Pay via Khalti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
