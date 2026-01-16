"use client";

import { Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative py-12 px-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-xl font-bold text-white tracking-tight">Prisans Singh</span>
                    <p className="text-white/40 text-sm">Building trust through content.</p>
                </div>

                <div className="flex items-center gap-8">
                    <a
                        href="https://linkedin.com/in/prisans" // Update with real link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:prisanssingh93@gmail.com" // Update with real email
                        className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-sm"
                    >
                        <Mail size={18} />
                        Email
                    </a>
                </div>

                <div className="text-white/20 text-xs">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
