'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const BuyPage = () => {
    const { data: session } = useSession();
    const [currentUser, setCurrentUser] = useState({});
    const [payments, setPayments] = useState([])

    useEffect(() => {
        if (session) {
            getData();
        }
    }, [session]);


    const [form, setForm] = useState({
        name: '',
        message: '',
        amount: ''
    });

    const user = {
        username: session?.user?.name || 'chai_lover007',
        profileImg: session?.user?.image || 'https://i.pravatar.cc/100?img=12'
    };

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Support Submitted:", form);
        pay(form.amount);
    };

    const pay = async (amount) => {
        const payerName = form.name?.trim();
        const message = form.message?.trim() || "Supporter ❤️";
        const receiverUsername = currentUser?.username; // this is the real user

        if (!payerName || !amount || !receiverUsername) {
            return alert("Please enter all fields correctly");
        }

        console.log("Initiating payment for:", {
            amount,
            to_username: receiverUsername,
            paymentform: { name: payerName, message }
        });

        try {
            const order = await initiate(amount, receiverUsername, { name: payerName, message });
            const orderId = order.id;

            const options = {
                key: process.env.NEXT_PUBLIC_KEY_ID,
                amount: amount * 100,
                currency: "INR",
                name: "BuyMeAChai",
                description: "Support the creator",
                image: "/chai-logo.png",
                order_id: orderId,
                callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                prefill: {
                    name: payerName,
                    email: session?.user?.email || "guest@example.com",
                    contact: "+919876543210"
                },
                notes: {
                    address: "Support from BuyMeAChai"
                },
                theme: {
                    color: "#ec7014"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                alert("Payment failed: " + response.error.code);
            });
            rzp1.open();
        } catch (err) {
            console.error("Payment initiation failed:", err);
            alert("Something went wrong while initiating payment.");
        }
    };


    const getData = async () => {
        const username = session?.user?.name || "chai_lover007";
        const u = await fetchuser(username);
        if (u) {
            setCurrentUser(u);
            const dbpayments = await fetchpayments(username);
            setPayments(dbpayments);
            console.log("User + Payments:", u, dbpayments);
        } else {
            console.warn("User not found:", username);
        }
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div className="min-h-screen bg-gradient-to-br from-gray-900  text-white px-4 py-10 font-sans">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 drop-shadow-lg">☕ Buy Me A Chai</h1>
                    <p className="text-gray-300 mt-3 text-lg">Support my work with a warm cup 🧡</p>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center mb-10"
                >
                    <div className="relative">
                        <Image
                        width={96}
                        height={96}
                            src={user.profileImg}
                            alt="User Avatar"
                            className=" rounded-full border-4 border-orange-400 shadow-md hover:scale-105 transition-transform"
                        />
                        {/* <span className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-4 h-4 border-2 border-black"></span> */}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">@{user.username}</h3>
                    <p className="text-sm text-gray-400">chai enthusiast & web builder</p>
                </motion.div>

                {/* Support Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-800/90 max-w-lg mx-auto rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-300">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Say something nice..."
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1 text-gray-300">Amount (₹)</label>
                        <input
                            type="number"
                            name="amount"
                            required
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="e.g. 50"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200 w-full"
                    >
                        🧋 Buy Chai
                    </motion.button>
                </motion.form>

                {/* Recent Supporters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-14"
                >
                    <h2 className="text-2xl font-bold text-orange-400 mb-6 text-center">✨ Recent Supporters</h2>

                    <div className="space-y-4">
                        {payments.length === 0 ? (
                            <p className="text-center text-gray-400">No supporters yet ☕</p>
                        ) : (
                            payments.map((p, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-800/90 p-4 rounded-lg border border-gray-700 shadow-md transition relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-r from-orange-400 to-pink-400 pointer-events-none blur-md"></div>
                                    <p className="text-white font-semibold text-lg">{p.name}</p>
                                    <p className="text-sm text-gray-400 italic mt-1">"{p.message}"</p>
                                    <p className="text-sm text-green-400 font-medium mt-2">💸 ₹{p.amount}</p>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
};


export default BuyPage;       