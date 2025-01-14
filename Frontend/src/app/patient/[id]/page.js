"use client";

import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PatientDetail() {
  const { id } = useParams(); // Get `id` from the URL
  const [patient, setPatient] = useState(null);
console.log("the id is:" , id)
  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/api/read/${id}`);
          if (response.status === 200) {
            const data = await response.json();
            setPatient(data);
          } else {
            console.error('Failed to fetch patient data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchPatient();
    }
  }, [id]); // Re-run when `id` changes

  if (!id) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Patient Details</h1>
      {patient ? (
        <div className="bg-white shadow-lg rounded-lg p-6 border">
          <p>
            <strong>Name:</strong> {patient.name}
          </p>
          <p>
            <strong>Email:</strong> {patient.email}
          </p>
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Sex:</strong> {patient.sex}
          </p>
          <p>
            <strong>Address:</strong> {patient.address}
          </p>
        </div>
      ) : (
        <div>Loading patient information...</div>
      )}
    </div>
  );
}
