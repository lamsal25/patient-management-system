import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export async function POST(req) {
  try {
    // Parse JSON from request
    const { amount, productCode } = await req.json();

    // Generate Unique Transaction ID
    const transactionId = uuidv4();
    console.log("Transaction ID:", transactionId);

    // Environment Variables
    const merchantCode = process.env.ESEWA_MERCHANT_CODE;
    const secretKey = process.env.ESEWA_SECRET_KEY;
    const successUrl = process.env.ESEWA_SUCCESS_URL;
    const failureUrl = process.env.ESEWA_FAILURE_URL;

    // ✅ Signature Generation
    const dataString = `${amount}.${transactionId}.${productCode}`;
    const hmac = crypto.createHmac("sha256", secretKey);
    const signature = hmac.update(dataString).digest("base64");

    // ✅ Correct Parameter Structure
    const params = {
      amt: amount, // Amount
      psc: 0, // Product Service Charge
      pdc: 0, // Product Delivery Charge
      txAmt: 0, // Tax Amount
      tAmt: amount, // Total Amount
      pid: transactionId, // Transaction ID
      scd: merchantCode, // Merchant Code
      su: successUrl, // Success URL
      fu: failureUrl, // Failure URL
      signature, // Signature
    };

    return NextResponse.json({
      paymentUrl: process.env.ESEWA_PAYMENT_URL,
      params,
    });
  } catch (error) {
    console.error("Payment API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
