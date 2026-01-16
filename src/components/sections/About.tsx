"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const stats = [
    { label: "LinkedIn Experience", value: "2.5 Years" },
    { label: "Reach Per Post", value: "15k - 30k" },
    { label: "Total Interactions", value: "100k+" },
];

export function About() {
    return (
        <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl space-y-12"
            >
                <div className="space-y-6">
                    <h2 className="text-sm font-semibold tracking-widest text-purple-400 uppercase">
                        About Me
                    </h2>
                    <p className="text-3xl md:text-5xl font-medium text-white leading-tight">
                        I work with founders, startups, and products to turn ideas into content people actually read and trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <GlassCard key={index} className="flex flex-col items-center justify-center p-6">
                            <span className="text-3xl font-bold text-white mb-2">{stat.value}</span>
                            <span className="text-white/60 text-sm">{stat.label}</span>
                        </GlassCard>
                    ))}
                </div>

                <div className="pt-8">
                    <p className="text-xl md:text-2xl text-white/80 italic font-light">
                        "Clear thinking always beats loud marketing."
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
