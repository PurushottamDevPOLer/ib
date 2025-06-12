'use client';

import React from 'react';
import {
  chickenMenu,
  fishMenu,
  vegMenu,
  beveragesMenu,
  extraMenu,
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
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="text-3xl font-extrabold text-yellow-500">Burger Store</div>
          <nav className="mt-2 text-sm sm:text-base">
            <ul className="flex flex-wrap gap-5 text-gray-600 font-medium">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/menu" className="hover:text-yellow-500">Menu</a></li>
              <li><a href="/cart" className="hover:text-yellow-500">Cart</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="sticky top-[72px] z-40 bg-white py-3 px-4 shadow-md">
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
          <a href="#chicken" className="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition">Chicken</a>
          <a href="#fish" className="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition">Fish</a>
          <a href="#veg" className="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition">Veg</a>
          <a href="#beverages" className="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition">Beverages</a>
          <a href="#extras" className="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200 transition">Extras</a>
        </div>
      </div>

      {/* Menu Sections */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderSection('Chicken', chickenMenu, 'chicken')}
        {renderSection('Fish', fishMenu, 'fish')}
        {renderSection('Veg', vegMenu, 'veg')}
        {renderSection('Beverages', beveragesMenu, 'beverages')}
        {renderSection('Extras', extraMenu, 'extras')}
      </main>

      {/* Footer */}
      <footer className="bg-yellow-50 py-6 mt-10 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          © 2025 Burger Store. All rights reserved.
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
