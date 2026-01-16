"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { User, Package, TrendingUp } from "lucide-react";

const services = [
    {
        icon: <User className="h-8 w-8 text-purple-400" />,
        title: "Founder Personal Branding",
        description: "Helping founders share their thinking and story clearly."
    },
    {
        icon: <Package className="h-8 w-8 text-pink-400" />,
        title: "Product Content",
        description: "Explaining products so people understand and care."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
        title: "Growth Content",
        description: "Content that builds trust, reach, and long term visibility."
    }
];

export function Services() {
    return (
        <section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="absolute top-0 right-0 h-96 w-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    What I Do
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="h-full flex flex-col gap-6 p-8">
                            <div className="p-3 bg-white/5 w-fit rounded-xl border border-white/5">
                                {service.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
