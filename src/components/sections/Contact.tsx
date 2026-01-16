"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <GlassCard className="py-20 px-8 flex flex-col items-center gap-8 bg-gradient-to-br from-white/[0.03] to-purple-500/10 border-white/10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                        If you want your work to be seen and understood, let’s talk.
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#" // Replace with actual booking link
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2"
                        >
                            <Calendar size={20} />
                            Book a Call
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:prisanssingh93@gmail.com" // Update as needed
                            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Email Me
                        </motion.a>
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
}
