"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BarChart3, X } from "lucide-react";
import React, { useState } from "react";
import ss1 from "../../assests/ss1.png";
import ss2 from "../../assests/ss2.png";
import ss3 from "../../assests/ss3.png";

// Placeholder data for Proof/Work
const proofItems = [
    {
        title: "Engagement Spike",
        metric: "38k+ interactions",
        image: ss3
    },
    {
        title: "Viral Linkedin Post",
        metric: "12k impressions",
        image: ss1
    },
    {
        title: "High Performing Thread",
        metric: "9k impressions",
        image: ss2
    }

];

export function Work() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="work" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-pink-900/10 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Proof of Work
                </h2>
                <p className="text-xl text-white/60">Real reach. Real engagement. No fluff.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {proofItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard
                            className="flex flex-col h-full overflow-hidden p-0 group cursor-pointer"
                            onClick={() => setSelectedImage(item.image.src)}
                        >
                            {/* Screenshot Image */}
                            <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-white/5">
                                <img
                                    src={item.image.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="flex items-center gap-2 text-purple-300 font-semibold">
                                    <BarChart3 size={18} />
                                    <span>{item.metric}</span>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full perspective"
                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
