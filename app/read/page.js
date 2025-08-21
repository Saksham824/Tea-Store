'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function ReadMorePage() {
    const timeline = [
        { year: '2023', text: 'Launched first prototype' },
        { year: '2024', text: 'Reached 10K chai milestones' },
        { year: '2025', text: 'Community-driven open-source release' },
    ];

    const [sliderRef] = useKeenSlider({ loop: true });

    return (
        <main className="bg-gradient-to-br from-blue-950 to-gray-900 text-white min-h-screen py-20 px-6 md:px-20">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500"
                >
                    About <span className="text-yellow-400">Get Me A Chai</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 max-w-2xl mx-auto text-lg"
                >
                    Dive deeper into our story, mission, and why we&apos;re obsessed with helping creators grow — one chai at a time.
                </motion.p>
            </div>

            {/* Mission Content Blocks */}
            <section className="mt-16 max-w-3xl mx-auto space-y-8 text-gray-200 leading-relaxed">
                {[
                    {
                        title: 'Why Chai?',
                        content: `Chai isn't just a beverage — its a symbol of warmth, connection, and appreciation. Its what brings people together.`,
                    },
                    {
                        title: 'What We Do',
                        content: `We provide a platform where creators, developers, artists, and freelancers can receive support from their community.`,
                    },
                    {
                        title: 'Our Vision',
                        content: `We aim to become the go-to support link for creators across the world. A space where every chai counts.`,
                    },
                    {
                        title: 'How You Can Help',
                        content: `If you believe in supporting creators, contribute by sharing our platform, giving feedback, or grabbing us a chai.`,
                    },
                ].map((block, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.7 }}
                        className="bg-gray-800/60 p-6 rounded-2xl shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">{block.title}</h2>
                        <p>{block.content}</p>
                    </motion.div>
                ))}
            </section>

            {/* Image Gallery */}
            <section className="mt-20 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Snapshots from Our Journey</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {["/team1.jpg", "/chai2.jpg", "/event.jpg", "/chai-love.jpg", "/workshop.jpg", "/chai-group.jpg"].map((img, index) => (
                        <motion.img
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="rounded-2xl shadow-md w-full object-cover h-60 transition duration-300"
                        />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="mt-20 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-100">
                    {[
                        { title: 'Chai Shared', stat: '12,340+' },
                        { title: 'Supporters', stat: '8,500+' },
                        { title: 'Creators Helped', stat: '1,200+' },
                        { title: 'Countries Reached', stat: '38+' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                            className="bg-gray-800/50 rounded-xl py-6 px-4 shadow-xl"
                        >
                            <div className="text-3xl font-extrabold text-yellow-300">{item.stat}</div>
                            <p className="mt-2 text-sm font-medium text-gray-300">{item.title}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Carousel */}
            <section className="mt-20 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Journey</h2>
                <div ref={sliderRef} className="keen-slider">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="keen-slider__slide bg-gray-800/60 p-6 rounded-2xl shadow-xl mx-4">
                            <h3 className="text-xl font-bold text-yellow-300">{item.year}</h3>
                            <p className="text-gray-300 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Video Section */}
            <section className="mt-20 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Watch Our Story</h2>
                <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Intro Video"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
