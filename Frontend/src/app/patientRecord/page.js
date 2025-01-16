"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function PatientRecord() {
    const [patients, setPatients] = useState([]); // Renamed to 'patients' for clarity
    const router = useRouter();

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:8080/api/allRecord',
                    {}, // Empty body
                    { headers: { 'Content-Type': 'application/json' } }
                );

                if (response.status === 200) {
                    setPatients(response.data); // Assuming response.data is an array
                } else {
                    throw new Error('Failed to fetch patient data');
                }
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPatients();
    }, []);

    const handleViewClick = (id) => {
        router.push(`/patient/${id}`); // Dynamically pass the patient's id
    };

    const handleDelete = async (id) => {

        const option = window.confirm(`Do you really want to delete the data ? (Record No. ${id})`)
        console.log(option)
        if (option) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/delete/${id}`, {
                    headers: { 'Content-Type': 'application/json' },
                }); // Dynamically pass the patient's id
                console.log(response.data.message)
            } catch (Error) {
                console.log("Error Deleteting Record ")
            }
        };
    }
    const handleEdit = (id) => {
        router.push(`/editData/${id}`); // Dynamically pass the patient's id
    };
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Patient Records</h1>

            {patients.length > 0 ? (
                <div className="space-y-6">
                    {patients.map((patient) => (
                        <div
                            key={patient.id}
                            className="bg-white shadow-lg rounded-lg p-6 space-y-4 border"
                        >
                            <div>
                                <h2 className="text-xl font-semibold">Basic Info</h2>
                                <div className="flex flex-wrap items-center gap-x-4 border p-4 mt-4 justify-between ">
                                    <div className="flex flex-col">
                                        <p>
                                            <strong>Name:</strong> {patient.name}
                                        </p>
                                        <p>
                                            <strong>Email:</strong> {patient.email}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleViewClick(patient.id)} // Pass id here
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleEdit(patient.id)} // Pass id here
                                        className="px-4 py-2 bg-green-500 text-white rounded"
                                    >
                                       Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(patient.id)} // Pass id here
                                        className="px-4 py-2 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No any patient information...</p>
            )}
        </div>
    );
}
