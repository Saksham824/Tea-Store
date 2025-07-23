'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submit logic here (e.g. send to backend or email service)
    console.log(form);
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-br from-blue-950 to-gray-900 text-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Contact <span className="text-yellow-400">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          We’d love to hear from you — whether it's feedback, questions, partnership ideas, or just a friendly hello. ☕
        </motion.p>
      </div>

      <section className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gray-800/60 p-6 rounded-2xl shadow-xl space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <span>contact@getmeachai.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-yellow-400 text-xl" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <span>Delhi, India</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gray-800/60 p-6 rounded-2xl shadow-xl space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-sm text-center mt-2">
              Thank you! We'll get back to you soon.
            </p>
          )}
        </motion.form>
      </section>
    </main>
  );
}
