"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { signInWithGoogle, signOut, onIdTokenChanged, } from "@/lib/firebase/auth";
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
        <>
          
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center text-center space-y-3">
                    {/* Brand */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-yellow-500 tracking-wider whitespace-nowrap">
                            🍔 Burger Store
                        </h1>
                    </div>

                    {/* Nav Bar */}
                    <nav>
                        <Link href="/" className="logo">
                            <img src="/vercel.svg" alt="Indian Burger | Vadapav" />
                            Indian Burger | Vadapav
                        </Link>
                        {user ? (
                            <>
                                <div className="profile">
                                    <p>
                                        <img
                                            className="profileImage"
                                            src={user.photoURL || "/profile.svg"}
                                            alt={user.email}
                                        />
                                        {user.displayName}
                                    </p>

                                    <div className="menu">
                                        ...
                                        <ul>
                                            <li>{user.displayName}</li>

                                            <li>
                                                <a href="#">Add sample rest</a>
                                                {/* <a href="#" onClick={addFakeRestaurantsAndReviews}>
                                            Add sample restaurants
                                        </a> */}
                                            </li>

                                            <li>
                                                <a href="#" onClick={handleSignOut}>
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="profile">
                                <a href="#" onClick={handleSignIn}>
                                    <img src="/profile.svg" alt="A placeholder user image" />
                                    Sign In with Google
                                </a>
                            </div>
                        )}
                    </nav>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['Home', 'Menu', 'Cart'].map((text) => (
                            <a
                                key={text}
                                href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                                className="text-gray-700 text-lg font-semibold hover:text-yellow-500 transition relative"
                            >
                                {text}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    );
};