"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const speakers = [
    {
        name: "Ravi Sharma",
        title: "Google Developer Expert",
        topic: "Flutter at Scale",
        initials: "RS",
        gradient: "from-[#4167F2] to-[#6B8BF5]",
    },
    {
        name: "Priya Patel",
        title: "Senior Engineer, Razorpay",
        topic: "State Management Deep Dive",
        initials: "PP",
        gradient: "from-[#6B8BF5] to-[#8BA5F7]",
    },
    {
        name: "Arjun Mehta",
        title: "CTO, TechStudio",
        topic: "Building Production Apps",
        initials: "AM",
        gradient: "from-[#4167F2] to-[#2A4AD0]",
    },
    {
        name: "Sneha Gupta",
        title: "Tech Lead, PhonePe",
        topic: "Mobile Fintech Architecture",
        initials: "SG",
        gradient: "from-[#6B8BF5] to-[#4167F2]",
    },
    {
        name: "Vikram Singh",
        title: "Open Source Maintainer",
        topic: "Contributing to Open Source",
        initials: "VS",
        gradient: "from-[#2A4AD0] to-[#4167F2]",
    },
    {
        name: "Ananya Joshi",
        title: "UX Engineer, Google",
        topic: "Design Systems & Material 3",
        initials: "AJ",
        gradient: "from-[#4167F2] to-[#8BA5F7]",
    },
];

export default function SpeakersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section
            id="speakers"
            ref={sectionRef}
            className="py-20 md:py-32 relative overflow-hidden"
        >
            {/* Background accents */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: "radial-gradient(circle, #4167F2, transparent 70%)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: "radial-gradient(circle, #6B8BF5, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header with scroll parallax */}
                <motion.div
                    style={{ y: headingY, opacity: headingOpacity }}
                    className="text-center mb-14 md:mb-20"
                >
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Meet the Visionaries
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        SPEAKERS
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                    <p
                        className="mt-6 text-gray-400 text-sm sm:text-base max-w-lg mx-auto"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Industry leaders sharing cutting-edge insights across Flutter, AI, Cloud, and DevOps.
                    </p>
                </motion.div>

                {/* Featured speaker (first) */}
                <AnimatedSection className="mb-8">
                    <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="group relative p-6 sm:p-8 rounded-2xl border border-[#4167F2]/20 bg-gradient-to-br from-[#4167F2]/[0.06] to-transparent overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4167F2]/60 to-transparent" />
                        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
                            <div
                                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${speakers[0].gradient} flex items-center justify-center text-white text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-[0_0_30px_rgba(65,103,242,0.3)]`}
                                style={{ fontFamily: "var(--font-michroma)" }}
                            >
                                {speakers[0].initials}
                            </div>
                            <div className="text-center sm:text-left">
                                <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-wider text-[#4167F2] border border-[#4167F2]/30 bg-[#4167F2]/5 uppercase mb-2">
                                    Keynote Speaker
                                </span>
                                <h3
                                    className="text-xl sm:text-2xl text-white font-semibold mb-1"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    {speakers[0].name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">{speakers[0].title}</p>
                                <p className="text-[#6B8BF5] text-sm font-medium">{speakers[0].topic}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatedSection>

                {/* Grid of remaining speakers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {speakers.slice(1).map((speaker, i) => (
                        <AnimatedSection key={speaker.name} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#4167F2]/30 transition-all duration-500 cursor-pointer overflow-hidden h-full"
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{ background: "radial-gradient(circle at center, rgba(65,103,242,0.08), transparent 70%)" }}
                                />
                                <div className="relative z-10 flex items-center gap-4">
                                    <div
                                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${speaker.gradient} flex items-center justify-center text-white text-base sm:text-lg font-bold flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(65,103,242,0.4)]`}
                                        style={{ fontFamily: "var(--font-michroma)" }}
                                    >
                                        {speaker.initials}
                                    </div>
                                    <div className="min-w-0">
                                        <h3
                                            className="text-white text-base sm:text-lg font-semibold mb-0.5 group-hover:text-[#6B8BF5] transition-colors truncate"
                                            style={{ fontFamily: "var(--font-inter)" }}
                                        >
                                            {speaker.name}
                                        </h3>
                                        <p className="text-gray-500 text-xs sm:text-sm mb-1.5 truncate">{speaker.title}</p>
                                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs text-[#4167F2] border border-[#4167F2]/20 bg-[#4167F2]/5">
                                            {speaker.topic}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
