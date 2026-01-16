"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import myImg from "../../assests/prisans.png";

export function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWork = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">

            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px]" />

            <div className="z-10 flex flex-col items-center gap-8 max-w-4xl">
                {/* Profile Image with Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-40 w-40 md:h-52 md:w-52 mb-4"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse" />
                    <div className="relative h-full w-full rounded-full border-2 border-white/20 bg-black/50 overflow-hidden backdrop-blur-sm flex items-center justify-center">
                        <img
                            src={myImg.src}
                            alt="Prisans Singh"
                            className="ml-2 h-full w-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white"
                    >
                        I'm <span className="text-gradient">Prisans</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-4xl font-medium text-white/90"
                    >
                        I help founders and brands grow with clear, high impact content.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/60"
                    >
                        LinkedIn content creator with 2.5 years of experience
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                    >
                        <button
                            onClick={scrollToWork}
                            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                        >
                            Let's Talk
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
