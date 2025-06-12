import React from "react";
// import { useRouter } from "next/navigation";

export default function OrderSuccess() {
  // const router = useRouter();
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <img
        src="/success.png"
        alt="Order Success"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-700 mb-4">Thank you for your order. We’re preparing it now 🍔</p>
      <div className="bg-gray-100 rounded-lg p-4 w-full max-w-sm text-left mb-6">
        <p className="text-sm text-gray-600">Order ID:</p>
        <p className="text-lg font-semibold text-gray-800">#{orderId}</p>
        <p className="mt-2 text-sm text-gray-600">Status:</p>
        <p className="text-lg font-semibold text-yellow-600">Preparing</p>
      </div>
      {/* <button
        onClick={() => router.push("/menu")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full"
      >
        Back to Menu
      </button> */}
    </div>
  );
}
