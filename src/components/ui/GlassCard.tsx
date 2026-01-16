"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "glass-panel rounded-2xl p-6 transition-colors duration-300",
                "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
