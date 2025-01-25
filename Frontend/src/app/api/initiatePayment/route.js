import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { amount, productCode } = await req.json();

    const transactionId = uuidv4();

    const merchantCode = process.env.ESEWA_MERCHANT_CODE;
    const secretKey = process.env.ESEWA_SECRET_KEY;

    // Signature Generation
    const dataString = `${amount}.${merchantCode}.${transactionId}.${secretKey}`;
    const hmac = crypto.createHmac("sha256", secretKey);
    const signature = hmac.update(dataString).digest("hex");

    const params = {
      amt: amount,
      psc: 0, // Product Service Charge
      pdc: 0, // Product Delivery Charge
      txAmt: 0, // Tax Amount
      tAmt: amount, // Total Amount
      pid: transactionId, // Transaction ID
      scd: merchantCode,
      su: process.env.ESEWA_SUCCESS_URL, // Success URL
      fu: process.env.ESEWA_FAILURE_URL, // Failure URL
      signature,
    };

    return NextResponse.json({
      paymentUrl: process.env.ESEWA_PAYMENT_URL,
      params,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
