"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function PatientDetails() {
  const [patient, setPatient] = useState(null); // Stores patient data
  const [showDetails, setShowDetails] = useState(false); // Toggle detailed info
  const router = useRouter(); // Access router for navigation

  // Fetch patient data
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/read/1', {
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
          console.log('Patient data:', response.data);
          setPatient(response.data); // Store the patient data
        } else {
          throw new Error('Failed to fetch patient data');
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatient();
  }, []);

  // Navigate to detailed info page when "View Details" button is clicked
  const handleViewClick = () => {
    router.push(`/patient/${patient.id}`); // Redirect to detailed info page with patient id
    console.log(patient.id )
  };

  return (
    <div className="container mx-auto textc p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Information</h1>
      {patient ? (
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border">
          {/* Basic Info */} 
          <div>
            <h2 className="text-xl font-semibold">Basic Info</h2>
            <div className='flex items-center gap-x-4 border p-4 mt-4 justify-between'>
              <div className='flex items-center gap-x-4'>
                <p className="flex items-center">
                  <strong>Name:</strong> {patient.name}
                </p>
                <p className="flex items-center">
                  <strong>Email:</strong> {patient.email}
                </p>
              </div>
              {/* View Details Button */}
              <button
                onClick={handleViewClick}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading patient information...</p>
      )}
    </div>
  );
}
