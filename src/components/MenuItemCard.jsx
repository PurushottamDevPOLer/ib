'use client';

import { useCartStore } from '@/store/cartStore';

export default function MenuItemCard({ item }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition">
            <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-md object-cover mb-3"
            />
            <h3 className="font-semibold text-sm text-gray-900">{item.name}</h3>
            <p className="text-gray-700 text-sm mb-2">₹{item.price}</p>
            <button
                onClick={() => addToCart(item)}
                className="bg-[#FF4E4E] hover:bg-[#e04343] text-white text-sm py-1.5 px-4 rounded-full transition font-medium"
            >
                Add to Cart
            </button>
        </div>
    );
}