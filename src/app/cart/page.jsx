'use client';

import BuyProduct from '@/components/razorpay/BuyProduct';
import { useCartStore } from '@/store/cartStore';

import React, { Suspense } from "react";
import Buy from '@/components/razorpay/Buy';
// import { useRouter } from 'next/navigation';
import Loading from "@/app/loading";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleQuantityChange = (id, delta) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    const newQty = Math.max(1, item.quantity + delta);
    updateQuantity(id, newQty);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert('Redirecting to payment gateway...');
  };

  // async function pay() {

  // }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} × {item.quantity || 1}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4">
              <p className="text-lg font-bold text-right">Total: ₹{totalAmount}</p>
            </div>

            <div className="mt-6 space-y-4">
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
              >
                Place Order
              </button>

            </div>
            <div>
              <Suspense fallback={<Loading />}>
                <Buy makePayment={makePayment} />
              </Suspense>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
