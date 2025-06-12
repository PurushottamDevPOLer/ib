"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {signInWithGoogle, signOut,onIdTokenChanged, } from "@/lib/firebase/auth";

// import { addFakeRestaurantsAndReviews } from "@/src/lib/firebase/firestore.js";
import { setCookie, deleteCookie } from "cookies-next";

function useUserSession(initialUser) {
    useEffect(() => {
        return onIdTokenChanged(async (user) => {
            if (user) {
                const idToken = await user.getIdToken();
                await setCookie("__session", idToken);
            } else {
                await deleteCookie("__session");
            }
            if (initialUser?.uid === user?.uid) {
                return;
            }
            window.location.reload();
        });
    }, [initialUser]);
    return initialUser;
}

export default function Header({ initialUser }) {
    const user = useUserSession(initialUser);

    const handleSignOut = (event) => {
        event.preventDefault();
        signOut();
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    };
    return (
        <header className="bg-white shadow-md sticky top-0 z-50 font-poppins">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                {/* Logo */}
                <h1 className="text-4xl font-extrabold tracking-tight text-[#D8232A] font-[Montserrat]">
                    Indian Burger | Vadapav
                </h1>

                {/* Nav Links */}
                <nav className="mt-4 flex justify-center gap-6 text-[#444] font-medium text-base sm:text-lg">
                    <Link href="/" className="hover:text-[#D8232A] transition">Home</Link>
                    <Link href="/menu" className="hover:text-[#D8232A] transition">Menu</Link>
                    <Link href="/cart" className="hover:text-[#D8232A] transition">Cart</Link>
                    {user ? (
                        <a href="#" onClick={handleSignOut}>
                            Sign Out
                        </a>
                    ) : (
                        <a href="#" onClick={handleSignIn}>
                            Login
                        </a>
                    )}
                </nav>
            </div>
        </header>
    );
}