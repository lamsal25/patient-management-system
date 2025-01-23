"use client"

import React from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function Appointment() {

    const [amount, setAmount] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const productCode = `TXN-${Date.now()}`;

            const res = await axios.post("/api/initiatePayment", { amount, productCode }, {
                headers: { 'Content-Type': 'application/json' }
            })
console.log(res)
            const { paymentUrl, params } = await res.data
            console.log("payment url", paymentUrl, params)
            const form = document.createElement("form");
            form.method = "Post";
            form.action = paymentUrl;

            Object.keys(params).forEach((key) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = params[key];
                form.appendChild(input);
            });

            document.body.appendChild(form)
            form.submit()


        } catch (error) {
            console.log("payment initiation failed: ", error)
        }

    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-5 m-10' >
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter amount' required
                className=' border-black border-2 rounded' />

            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>Pay via esewa</button>

        </form>
    )
}