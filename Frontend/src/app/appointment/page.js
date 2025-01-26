"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Appointment() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productCode = `TXN-${Date.now()}`;

      const res = await axios.post(
        "/api/initiatePayment",
        { amount, productCode },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Response from API:", res.data);

      if (!res.data.paymentUrl || !res.data.params) {
        throw new Error("Invalid payment response");
      }

      const { paymentUrl, params } = res.data;

      console.log("Payment URL:", paymentUrl);
      console.log("Payment Params:", params);
 
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
    <form onSubmit={handleSubmit} className="flex gap-5 m-10">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
        className="border-black border-2 rounded p-2"
      />

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Pay via eSewa
      </button>
    </form>
  );
}
