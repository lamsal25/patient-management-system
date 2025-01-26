import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { oid, amt, refId } = await req.json();

    const formData = new URLSearchParams();
    formData.append("amt", amt);
    formData.append("scd", process.env.ESEWA_MERCHANT_CODE);
    formData.append("pid", oid);
    formData.append("rid", refId);

    const response = await axios.post(process.env.ESEWA_STATUS_CHECK_URL, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data.includes("Success")) {
      return NextResponse.json({ success: true, message: "Payment Verified" });
    } else {
      return NextResponse.json(
        { success: false, message: "Payment Verification Failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
