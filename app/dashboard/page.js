'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { fetchuser, updateProfile } from '@/actions/useractions';

const Page = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    picture: '',
    razorpayId: '',
    razorpaySecret: ''
  });

  const getData = async () => {
    if (!session?.user?.name) return;
    const u = await fetchuser(session.user.name);
    setForm({
      email: u?.email || '',
      username: u?.username || '',
      // razorpayId: u?.razorpayId || '',
      // razorpaySecret: u?.razorpaySecret || ''
    });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (status === "authenticated") {
      getData();
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-white p-10 text-center">Loading...</div>;
  }

  if (!session) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value ?? ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await update(); 
    await updateProfile(form, session.user.name);
    alert("Profile Updated");
  };

  return (
    <div className="min-h-screen mt-10 rounded-2xl mb-10 bg-gradient-to-br from-blue-950 via-black to-gray-900 text-white px-6 py-10 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          ☕ User Dashboard
        </h1>
        <p className="text-gray-300 mt-2">Manage your chai orders, profile, and settings here.</p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="bg-gray-800 max-w-2xl mx-auto rounded-xl shadow-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">🔐 Account Info</h2>

        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Username", name: "username", type: "text" },
          { label: "Profile Picture URL", name: "picture", type: "text", placeholder: "https://example.com/profile.jpg" },
          { label: "Razorpay Key ID", name: "razorpayId", type: "text" },
          { label: "Razorpay Secret", name: "razorpaySecret", type: "password" }
        ].map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label className="block text-sm mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name] ?? ''}
              onChange={handleChange}
              placeholder={placeholder}
              required={name !== "picture" && name !== "razorpayId" && name !== "razorpaySecret"}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Save Info
        </button>
      </motion.form>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-gray-400 text-sm">
          Thank you for being a loyal chai lover. Every sip supports our mission. 🙌
        </p>
        <Link
          href="/"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
