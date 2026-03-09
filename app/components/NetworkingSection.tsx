"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const networkingEvents = [
    {
        icon: "🎉",
        title: "Opening Night Mixer",
        time: "Day 1 — 6:00 PM",
        description: "Kick off the conference with drinks, food, and conversations with fellow tech enthusiasts.",
        spots: "200 spots",
    },
    {
        icon: "☕",
        title: "Coffee & Code",
        time: "Day 2 — 9:00 AM",
        description: "Start your morning with coffee and pair programming sessions in an informal setting.",
        spots: "50 spots",
    },
    {
        icon: "💼",
        title: "Hiring Hall",
        time: "Both Days",
        description: "Connect with top companies hiring developers. Bring your resume and portfolio!",
        spots: "Open to all",
    },
    {
        icon: "🎤",
        title: "Lightning Talks",
        time: "Day 1 — 4:30 PM",
        description: "5-minute rapid-fire talks by community members. Sign up on the spot and share your ideas.",
        spots: "15 speaker slots",
    },
    {
        icon: "🤝",
        title: "Mentor Sessions",
        time: "Both Days",
        description: "One-on-one mentorship sessions with experienced developers and industry experts.",
        spots: "30 slots/day",
    },
    {
        icon: "🏆",
        title: "After Party",
        time: "Day 2 — 7:00 PM",
        description: "Celebrate the hackathon winners and wrap up the conference with music and networking.",
        spots: "All attendees",
    },
];

export default function NetworkingSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    return (
        <section id="networking" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: "radial-gradient(circle, #4167F2, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center mb-14 md:mb-20">
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Connect & Collaborate
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        NETWORKING
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                    <p
                        className="mt-6 text-gray-400 text-sm sm:text-base max-w-lg mx-auto"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        More than just talks — build lasting connections with the tech community.
                    </p>
                </motion.div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {networkingEvents.map((event, i) => (
                        <AnimatedSection key={event.title} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.3 }}
                                className="group relative h-full p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#4167F2]/30 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "linear-gradient(180deg, rgba(65,103,242,0.05), transparent 50%)" }}
                                />
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-2xl sm:text-3xl">{event.icon}</span>
                                        <span className="text-[10px] text-gray-500 px-2.5 py-1 rounded-full border border-white/5">
                                            {event.time}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-base sm:text-lg text-white mb-2 group-hover:text-[#6B8BF5] transition-colors"
                                        style={{ fontFamily: "var(--font-michroma)" }}
                                    >
                                        {event.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                                        {event.description}
                                    </p>
                                    <span className="text-[10px] sm:text-xs text-[#4167F2] font-medium">{event.spots}</span>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
