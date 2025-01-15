"use client";

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Patient() {
  const params = useParams();
  const id = params.id;
  const [patient, setPatient] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        try {
          const response = await axios.post(
            `http://localhost:8080/api/read/${id}`
          );
          if (response.status === 200) {
            setPatient(response.data);
          } else {
            console.error('Failed to fetch patient data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchPatient();
    }
  }, [id]);

  const handleDelete = async (id) => {
    const option = confirm(`Do you really want to delete the data? (Record No. ${id})`);
    if (option) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/delete/${id}`, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response.data.message);  
        router.push("/patientRecord"); // Redirect to patient records page
      } catch (error) {
        console.log("Error Deleting Record:", error); 
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Patient Details
      </h1>

      {patient ? (
        <form className="bg-white shadow-lg rounded-lg p-8 border space-y-6">
          {/* Patient Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Patient Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={patient.name}
                readOnly
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Name"
              />
              <input
                type="email"
                value={patient.email}
                readOnly
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Email"
              />
              <input
                type="number"
                value={patient.age}
                readOnly
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Age"
              />
              <input
                type="text"
                value={patient.sex}
                readOnly
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Sex"
              />
              <input
                type="text"
                value={patient.address}
                readOnly
                className="border p-3 rounded w-full bg-gray-50"
                placeholder="Address"
              />
            </div>
          </div>

          {/* Medical History */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Medical History
            </h2>
            {patient.medicalHistory && patient.medicalHistory.length > 0 ? (
              <div className="space-y-4">
                {patient.medicalHistory.map((entry, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 border p-4 rounded bg-gray-50"
                  >
                    <input
                      type="text"
                      value={entry.condition}
                      readOnly
                      className="border p-3 rounded w-full bg-gray-50"
                      placeholder="Condition"
                    />
                    <input
                      type="text"
                      value={entry.medicines}
                      readOnly
                      className="border p-3 rounded w-full bg-gray-50"
                      placeholder="Medicines"
                    />
                    <input
                      type="text"
                      value={new Date(entry.date).toISOString().split('T')[0]}
                      readOnly
                      className="border p-3 rounded w-full bg-gray-50"
                      placeholder="Date"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No medical history available.</p>
            )}
          </div>

          {/* Delete Button */}
          <div  >
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent form submission
                handleDelete(patient.id); // Pass id here
              }}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete Record
            </button>
            
          </div>
        </form>
      ) : (
        <div className="text-center text-gray-600">
          Patient Information Does not exist
        </div>
      )}
    </div>
  );
}
