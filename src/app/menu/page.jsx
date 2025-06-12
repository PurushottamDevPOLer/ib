'use client';

import React from 'react';
import {
  theMenu
} from '@/data/mockdata';
import { useCartStore } from '@/store/cartStore';

const MenuPage = () => {
  const cart = useCartStore((state) => state.cart); // Get cart from Zustand store
  const addToCart = useCartStore((state) => state.addToCart);

  const renderSection = (title, menu, id) => (
    <div id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="bg-gradient-to-br from-amber-100 to-yellow-50 p-4 rounded-2xl shadow-inner">
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm hover:shadow-lg transition rounded-xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-36 w-full overflow-hidden">
                <img
                  src={item.image || "/profile.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <img
                className="profileImage"
                src={user.photoURL || "/profile.svg"}
                alt={user.email}
              /> */}


              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 mb-2">₹{item.price}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-sm text-white py-1.5 px-3 rounded-md mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Menu Sections */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderSection('Chicken', theMenu, 'chicken')}
       </main>

      {/* Footer */}
      <footer className="bg-yellow-50 py-6 mt-10 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2025 Indian Burger. All rights reserved.
        </div>
      </footer>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => window.location.href = '/cart'}
          className="fixed bottom-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
        >
          <span className="material-icons">🛒</span>
          <span>{cart.length} item{cart.length > 1 ? 's' : ''}</span>
        </button>
      )}
    </div>
  );
};

export default MenuPage;
