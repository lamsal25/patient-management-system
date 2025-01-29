
import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(req) {
 
  try {
    
     const {amount, productCode} =await req.json();

   
      const paymentUrl = process.env.KHALTI_PAYMENT_URL;
       const payload = {
           return_url : process.env.SUCCESS_URL ,
           website_url : process.env.WEBSITE_URL,
           amount : amount * 100,
           purchase_order_id :productCode ,
           purchase_order_name : "Appointment",
           
       }

   //  console.log(paymentUrl,payload)

     return NextResponse.json({
        paymentUrl,
        payload,
        secret:process.env.KHALTI_SECRET_KEY,
    })

  } catch (error) {
    console.log(error)
  }
  

}
