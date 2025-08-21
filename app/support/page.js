'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="bg-gradient-to-br from-blue-950 to-gray-900 text-white min-h-screen py-20 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Need <span className="text-yellow-400">Support?</span>
        </h1>
        <p className="text-gray-300 text-lg">
          We're here to help. Reach out to us through the channels below or check our FAQs.
        </p>
      </motion.div>

      {/* Contact Options */}
      <section className="mt-16 grid gap-8 max-w-5xl mx-auto grid-cols-1 md:grid-cols-3">
        {[
          {
            title: 'Email Us',
            text: 'Reach us at support@getmeachai.com for personal help.',
            icon: '📧',
          },
          {
            title: 'Join Community',
            text: 'Hop into our Discord server to ask questions and chat.',
            icon: '💬',
          },
          {
            title: 'GitHub Issues',
            text: 'Found a bug? Create an issue on our GitHub repo.',
            icon: '🐞',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="mt-20 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-yellow-400 mb-6 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="font-bold text-white">❓ How fast is delivery?</h3>
            <p>Most chai deliveries are completed within 20&ndash;30 minutes depending on your location.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">❓ Do you offer refunds?</h3>
            <p>Yes! If you&apos;re not satisfied, we&apos;ll refund your order. No questions asked.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">❓ Where do you operate?</h3>
            <p>Currently available in major Indian cities &mdash; expanding soon!</p>
          </div>
        </div>
      </section>

      {/* Support Form CTA */}
      <section className="mt-20 max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-yellow-400 mb-4"
        >
          Still need help?
        </motion.h2>
        <p className="text-gray-300 mb-6">Fill out our support form and we&apos;ll get back ASAP.</p>
        <Link
          href="mailto:support@getmeachai.com"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-2xl transition duration-300 shadow-lg"
        >
          Contact Support
        </Link>
      </section>
    </main>
  );
}
