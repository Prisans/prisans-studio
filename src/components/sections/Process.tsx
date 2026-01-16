"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search, PenTool, Layout, Send } from "lucide-react";

const steps = [
    {
        icon: <Search className="h-6 w-6 text-purple-400" />,
        title: "1. Understand",
        description: "Understand your product or story deeply to find the core message."
    },
    {
        icon: <Layout className="h-6 w-6 text-pink-400" />,
        title: "2. Strategy",
        description: "Pick the right angle and format that resonates with your target audience."
    },
    {
        icon: <PenTool className="h-6 w-6 text-blue-400" />,
        title: "3. Create",
        description: "Create and refine high-impact content that builds trust and authority."
    },
    {
        icon: <Send className="h-6 w-6 text-purple-400" />,
        title: "4. Deliver",
        description: "Publish and observe the response to ensure long-term visibility."
    }
];

export function Process() {
    return (
        <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    The Process
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="h-full flex flex-col gap-4 p-6 border-white/5 bg-white/[0.02]">
                            <div className="p-3 bg-white/5 w-fit rounded-lg border border-white/5 text-purple-300">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center space-y-8"
            >
                <div className="flex flex-col items-center gap-4">
                    <p className="text-xl text-white/80 font-medium">
                        Want to see how exactly I work?
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Content-Proposal-Plan.pdf"
                        target="_blank"
                        className="px-8 py-4 bg-purple-600/20 text-purple-200 border border-purple-500/30 rounded-full font-semibold hover:bg-purple-600/30 transition-all flex items-center gap-2"
                    >
                        <PenTool size={18} />
                        View Working Proposal
                    </motion.a>
                </div>

                <p className="text-lg text-white/40 font-medium">
                    Simple, focused, and easy to work with.
                </p>
            </motion.div>
        </section>
    );
}
