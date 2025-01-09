import React from 'react'

export default function Card() {
    return (
<div >
<p className=' pt-16 text-center font-mono text-4xl '>Our Services</p>
        <div className='flex flex-wrap container m-auto  justify-between  '>
            
            <div className=" mx-auto items-center md:w-80 lg:w-96 mt-16 p-8 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col ">
                <img src="/cat.jpg" className="shadow rounded-lg overflow-hidden border" />
                <div className="mt-8">
                    <h4 className="font-bold text-xl">Patient Record</h4>
                    <p className="mt-2 text-gray-600">
                        Create Exercises for any subject with the topics you and your students care about.
                    </p>
                    <div className="mt-5">
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                    </div>
                </div>
            </div>
            <div className=" mx-auto items-center md:w-80 lg:w-96 mt-16 p-8 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col ">
                <img src="/cat.jpg" className="shadow rounded-lg overflow-hidden border" />
                <div className="mt-8">
                    <h4 className="font-bold text-xl">Appointment Scheduling</h4>
                    <p className="mt-2 text-gray-600">
                        Create Exercises for any subject with the topics you and your students care about.
                    </p>
                    <div className="mt-5">
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                    </div>
                </div>
            </div>
            <div className=" mx-auto items-center md:w-80 mt-16 lg:w-96 p-8 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col">
                <img src="/haelthcare.jpg" className="shadow rounded-lg overflow-hidden border" />
                <div className="mt-8">
                    <h4 className="font-bold text-xl">Electronic Medical Records</h4>
                    <p className="mt-2 text-gray-600">
                        Create Exercises for any subject with the topics you and your students care about.
                    </p>
                    <div className="mt-5">
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}
