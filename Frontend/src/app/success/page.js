"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Success() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const verifyPayment = async () => {
      const oid = searchParams.get("oid");
      const amt = searchParams.get("amt");
      const refId = searchParams.get("refId");

      if (!oid || !amt || !refId) return;

      try {
        const res = await axios.post("/api/verifyPayment", { oid, amt, refId });
        console.log(res.data);
      } catch (error) {
        console.error("Payment verification failed", error);
      }
    };

    verifyPayment();
  }, [searchParams]);

  return <div className="text-green-600 text-xl font-bold">Payment Successful!</div>;
}
