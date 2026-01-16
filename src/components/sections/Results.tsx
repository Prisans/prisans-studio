"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const results = [
    "Helped early stage founders improve visibility and authority.",
    "Worked with tools across AI, SaaS, and productivity niches.",
    "Built content systems that drive consistent organic reach.",
    "Successfully turned complex technical ideas into readable stories."
];

export function Results() {
    return (
        <section className="relative py-20 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-purple-600/5 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Results & Impact
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <CheckCircle2 className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                            <p className="text-white/70 text-lg leading-snug">
                                {result}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
