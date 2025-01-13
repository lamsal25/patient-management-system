"use client"

import axios from 'axios'
import { Input } from 'postcss'
import React from 'react'

const handleClick = async ()=>{
    try {
        const response = await axios.post("http://localhost:8080/api/read/1")
        console.log(response.data)
    } catch (error) {
        console.log("error", error)
    }
}
export default function page() {
  return (
    <div  onClick={handleClick}> 
        <button type='submit' name='submit' > submit</button>
    </div>
  )
}
