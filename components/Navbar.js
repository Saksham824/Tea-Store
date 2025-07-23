'use client';
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const { data: session } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-b from-blue-950 to-gray-900 p-4 text-white shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center md:px-10">
                {/* Logo */}
                <div className="text-2xl font-extrabold flex items-center gap-2">
                    <span className="text-3xl">🍵</span>
                    <Link href="/" className="text-purple-400 hover:text-yellow-300 transition duration-300">
                        Get Me A Chai
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium">
                    <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-yellow-300 transition">About</Link></li>
                    <li><Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>

                    {/* Mid Section CTA - Only on md+ */}
                    <div className="hidden md:flex gap-6 items-center text-sm font-semibold">
                        <Link href="/shop" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition">
                            Buy Chai
                        </Link>
                        <Link href="/support" className="text-yellow-300 hover:underline hover:text-yellow-400 transition">
                            Support 💛
                        </Link>
                    </div>

                    {session && (
                        <div
                            className="relative"
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="flex items-center gap-2 border px-4 py-2 rounded-2xl bg-gray-800 hover:bg-gray-700 transition duration-200"
                            >
                                <img
                                    src={session.user.image || "/default-avatar.png"}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                <svg className="w-2.5 h-2.5" viewBox="0 0 10 6" fill="none">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <div className={`absolute right-0 mt-2 w-44 rounded-md shadow-md bg-white dark:bg-gray-700 ${showDropdown ? "block" : "hidden"}`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`/${session.user.name}`}
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Payment
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setShowDropdown(false);
                                                signOut();
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        >
                                            Sign out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {!session && (
                        <Link href="/login" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center">
                            Login
                        </Link>
                    )}
                </ul>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 text-center text-base font-medium space-y-3">
                    {session && (
                        <div className="flex flex-col items-center gap-2 pb-2">
                            <img
                                src={session.user.image || '/default-avatar.png'}
                                alt="Profile"
                                className="w-14 h-14 rounded-full border-2 border-white"
                            />
                            <p className="text-sm text-gray-300">{session.user.name}</p>
                        </div>
                    )}
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>

                        {session && (
                            <>
                                <li><Link href="/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
                                <li><Link href={`/${session.user.name}`} className="hover:text-yellow-300">Your Page</Link></li>
                                <li>
                                    <button onClick={() => signOut()} className="text-white bg-red-500 rounded px-4 py-2">Sign out</button>
                                </li>
                            </>
                        )}

                        {!session && (
                            <li><Link href="/login" className="text-white bg-blue-600 rounded px-4 py-2">Login</Link></li>
                        )}
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
