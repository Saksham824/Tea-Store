'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LearnPage() {
  const topics = [
    {
      title: 'Next.js Framework',
      desc: 'Learn how we built fast, scalable web apps using Next.js routing, SSR, and API routes.',
      icon: '⚡',
    },
    {
      title: 'Tailwind CSS',
      desc: 'Understand our design system powered by Tailwind’s utility-first classes.',
      icon: '🎨',
    },
    {
      title: 'Vercel Deployment',
      desc: 'Explore our CI/CD pipeline to deploy instantly with zero config using Vercel.',
      icon: '🚀',
    },
    {
      title: 'Open Source & Community',
      desc: 'We believe in transparency — contribute to our GitHub repo or join our Discord!',
      icon: '🤝',
    },
  ];

  return (
    <main className="bg-gradient-to-br from-blue-950 to-gray-900 text-white min-h-screen py-20 px-6 md:px-20">
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Learn with <span className="text-yellow-400">Get Me A Chai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Go behind the scenes to see how we built this platform — while sipping chai ☕
        </motion.p>
      </div>

      {/* Learning Cards */}
      <section className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {topics.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-20 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Start Contributing</h2>
        <p className="text-gray-300 mb-6">
          Ready to join our chai-fueled journey? Contribute on GitHub or join our community chat.
        </p>
        <Link
          href="https://github.com/Saksham824"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-2xl transition duration-300 shadow-lg"
        >
          Visit GitHub
        </Link>
      </motion.div>
    </main>
  );
}
