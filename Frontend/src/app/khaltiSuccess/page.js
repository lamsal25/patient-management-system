"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

export default function KhaltiSuccess() {
    const params = useSearchParams()
    useEffect(() => {
        const getData = async () => {
            const status = params.get('status')
            const transaction_id = params.get('transaction_id')
            console.log("status:", status, transaction_id)

            const id = localStorage.getItem("payment_id");
            try {
                const response = await axios.put("http://localhost:8080/api/paymentStatus", { id, status, transaction_id }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                console.log("payment details stored successfully")
            } catch (error) {
                console.log("status is not stored", error)
            }

        }

        getData()
    }, [params])

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="w-full max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700">
                            <svg className="h-12 w-12 text-green-600 dark:text-green-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </div>
                        <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400">Payment Successful!</h1>
                        <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
                            Thank you for Booking the appointment.
                        </p>

                        <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                            If you have any questions or need further assistance, feel free to contact us at:
                            <a href="http://localhost:3000/contact" className="font-medium text-indigo-600 dark:text-indigo-400 underline">
                                Click Here
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/"
                            className="inline-block px-6 py-2 text-lg font-medium text-white transition-transform rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
