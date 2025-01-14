"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientForm() {
  const [patient, setPatient] = useState({
    name: '',
    email: '',
    age: '',
    sex: '',
    address: '',
  });

  const [medicalHistories, setMedicalHistories] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/read/1', {
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
          console.log('Data received:', response.data);
          setPatient({
            name: response.data.name,
            email: response.data.email,
            age: response.data.age,
            sex: response.data.sex,
            address: response.data.address,
          });
          setMedicalHistories(response.data.medicalHistory || []);
        } else {
          throw new Error('Failed to fetch patient data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log('Submitting form:', { patient, medicalHistories });
  //     // Add form submission logic here
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  return (
    <div className="container mx-auto textc p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Form</h1>
      <form
       // onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4 border"
      >
        {/* Patient Details */}
        <div>
          <h2 className="text-xl font-semibold">Patient Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={patient.name}
              readOnly
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={patient.email}
              readOnly
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={patient.age}
              readOnly
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              value={patient.sex}
              readOnly
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={patient.address}
              readOnly
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </div>

        {/* Medical Histories */}
        <div>
          <h2 className="text-xl font-semibold">Medical History</h2>
          {medicalHistories.map((history, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 border-2 border-gray-400 p-3"
            >
              <input
                type="text"
                name="condition"
                placeholder="Condition"
                value={history.condition}
                readOnly
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="medicines"
                placeholder="Medicines"
                value={history.medicines}
                readOnly
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="date"
                value={new Date(history.date).toISOString().split('T')[0]} // Format to YYYY-MM-DD
                readOnly
                className="border p-2 rounded w-full"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
