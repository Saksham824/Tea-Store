'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord } from 'react-icons/fa';

const team = [
  {
    name: "Saksham Sharma",
    role: "Founder & Developer",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ananya Rao",
    role: "Designer",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Aman Verma",
    role: "Backend Engineer",
    img: "https://i.pravatar.cc/150?img=12",
  },
];

const stats = [
  { label: "Total Chai Shared", value: "12,500+" },
  { label: "Happy Supporters", value: "3,200+" },
  { label: "Creators Onboarded", value: "800+" },
];

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-blue-950 to-gray-900 text-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          About <span className="text-yellow-400">Get Me A Chai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          We built Get Me A Chai to help creators, freelancers, and indie developers
          receive small tips and support from their audience in the most fun and friendly way possible.
        </motion.p>
      </div>

      {/* Mission / Vision / Values */}
      <section className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Our Mission</h3>
          <p className="text-gray-300">
            To empower independent creators and help them monetize their passion in a simple, transparent, and delightful way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Our Vision</h3>
          <p className="text-gray-300">
            To become the most loved tipping platform that feels personal, warm, and rewarding — like sharing a chai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-2">What We Value</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Transparency</li>
            <li>Community-first design</li>
            <li>Zero complexity</li>
            <li>Creator ownership</li>
          </ul>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-gray-800/60 rounded-2xl shadow-xl p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
              />
              <h4 className="text-lg font-bold text-white">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Impact So Far</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="bg-gray-800/60 rounded-2xl p-6 shadow-xl"
            >
              <div className="text-3xl font-bold text-yellow-300 mb-2">{item.value}</div>
              <div className="text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Links */}
      <section className="mt-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Join Our Community</h2>
        <p className="text-gray-400 mb-6">
          We’re building this in the open. Come contribute, suggest, or chat over chai!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://discord.gg/your-server"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FaDiscord className="text-xl" />
            Discord
          </a>
        </div>
      </section>

      {/* Closing Note */}
      <div className="text-center mt-20 text-gray-500 text-sm">
        Made with 🍵 by creators, for creators.
      </div>
    </main>
  );
}
