"use client"

import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
const NewPatientForm = () => {
    const [patient, setPatient] = useState({
        name: '',
        email: '',
        age: '',
        sex: '',
        address: '',
    });

    const [medicalHistories, setMedicalHistories] = useState([
        { condition: '', medicines: '', date: '' },
    ]);

    const handlePatientChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleHistoryChange = (index, e) => {
        const { name, value } = e.target;
        const updatedHistories = [...medicalHistories];
        updatedHistories[index][name] = value;
        setMedicalHistories(updatedHistories);
    };

    const addHistory = () => {
        setMedicalHistories([...medicalHistories, { condition: '', medicines: '', date: '' }]);
    };

    const removeHistory = (index) => {
        const updatedHistories = medicalHistories.filter((_, i) => i !== index);
        setMedicalHistories(updatedHistories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/patients', { ...patient, medicalHistories }, {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(),
            });
            console.log(response)
            if (response.status === 200) {
                alert('Patient added successfully!');
                setPatient({ name: '', email: '', age: '', sex: '', address: '' });
                setMedicalHistories([{ condition: '', medicines: '', date: '' }]);
            } else {
                throw new Error('Failed to save patient data');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving the data.');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container mx-auto  textc p-6">
            <h1 className="text-3xl font-bold mb-4 "> Patient Form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4 border">
                {/* Patient Details */}
                <div>
                    <h2 className="text-xl font-semibold">Patient Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={patient.name}
                            onChange={handlePatientChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={patient.email}
                            onChange={handlePatientChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={patient.age}
                            onChange={handlePatientChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <select
                            name="sex"
                            value={patient.sex}
                            onChange={handlePatientChange}
                            className="border p-2 rounded w-full"
                            required
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={patient.address}
                            onChange={handlePatientChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                </div>

                {/* Medical Histories */}
                <div >
                    <h2 className="text-xl font-semibold">Medical History</h2>
                    {medicalHistories.map((history, index) => (
                        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 border-2 border-gray-400 p-3 ">
                            <input
                                type="text"
                                name="condition"
                                placeholder="Condition"
                                value={history.condition}
                                onChange={(e) => handleHistoryChange(index, e)}
                                className="border p-2 rounded w-full"
                                required
                            />
                            <input
                                type="text"
                                name="medicines"
                                placeholder="Medicines"
                                value={history.medicines}
                                onChange={(e) => handleHistoryChange(index, e)}
                                className="border p-2 rounded w-full"
                                required
                            />
                            <input
                                type="date"
                                name="date"
                                value={history.date}
                                onChange={(e) => handleHistoryChange(index, e)}
                                className="border p-2 rounded w-full"
                                required
                                max={new Date().toISOString().split("T")[0]}  // Restricts selection to today or earlier
                            />
                            <button
                                type="button"
                                onClick={() => removeHistory(index)}
                                className=" px-4 py-2 bg-red-500  text-white rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addHistory}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add Another History
                    </button>
                </div>

                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
        </>
    );
};

export default NewPatientForm;
