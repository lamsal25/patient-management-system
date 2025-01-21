
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto'

export async function POST(req) {
   try {
   // console.log("request is : ",req )
        const {amount, productCode} =await req.json()
        console.log("amount:",amount,"  ", "product code", productCode)

        const transactionId = uuidv4();
//console.log("tid",transactionId)

const merchantCode = process.env.ESEWA_MERCHANT_CODE;
const secretKey = process.env.ESEWA_SECRET_KEY; // You should add this to .env


        const data = `${amount}.${merchantCode}.${transactionId}.${secretKey}`;
       console.log("data", data)
        const hmac = crypto.createHmac('sha256', secretKey);
        const signature = hmac.update(data).digest('base64').toString();
      
        console.log("sign", signature)
        const params = {
            amt : amount,
            psc: 0,     // product service charge
            pdc: 0,     // product delivery charge
            txAmt : 0,  // tax amount
            tAmt : amount, // total amount
            pid: transactionId,  // transcation UUID
            scd: process.env.ESEWA_MERCHANT_CODE,
            su: process.env.ESEWA_SUCCESS_URL,
            fu: process.env.ESEWA_FAILURE_URL,
            signature,

        }
       const  paymentUrl = process.env.ESEWA_PAYMENT_URL
        return NextResponse.json({paymentUrl, params})

   } catch (error) {
    return NextResponse.json({error: "internal server error"}, {status: 500})
   }
}
