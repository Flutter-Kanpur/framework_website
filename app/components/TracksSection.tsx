"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tracks = [
    {
        icon: "📱",
        title: "Mobile Dev",
        description: "Build cutting-edge mobile apps with Flutter, React Native, and Kotlin Multiplatform.",
        difficulty: "Intermediate",
        tags: ["Flutter", "React Native", "KMP"],
    },
    {
        icon: "🤖",
        title: "AI & ML",
        description: "Integrate AI, LLMs, and computer vision into real-world applications.",
        difficulty: "Advanced",
        tags: ["TensorFlow", "LLMs", "OpenAI"],
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        description: "Design beautiful interfaces, build design systems, and master Material 3.",
        difficulty: "Beginner",
        tags: ["Figma", "Material 3", "Motion"],
    },
    {
        icon: "☁️",
        title: "Cloud & DevOps",
        description: "Deploy at scale with Firebase, AWS, Docker, and CI/CD pipelines.",
        difficulty: "Intermediate",
        tags: ["Firebase", "AWS", "Docker"],
    },
    {
        icon: "🌐",
        title: "Web & Desktop",
        description: "Go beyond mobile — build for web, Windows, macOS, and Linux.",
        difficulty: "Intermediate",
        tags: ["Next.js", "Flutter Web", "Electron"],
    },
    {
        icon: "🔒",
        title: "Security & Web3",
        description: "Learn app security, blockchain basics, and smart contract integration.",
        difficulty: "Advanced",
        tags: ["Web3", "Smart Contracts", "Security"],
    },
];

const difficultyColors: Record<string, string> = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
};

export default function TracksSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    return (
        <section id="tracks" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: "radial-gradient(circle, #4167F2, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center mb-14 md:mb-20">
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Choose Your Path
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        TRACKS
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                    <p
                        className="mt-6 text-gray-400 text-sm sm:text-base max-w-lg mx-auto"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Six specialized tracks covering the full spectrum of modern tech.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {tracks.map((track, i) => (
                        <AnimatedSection key={track.title} delay={i * 0.08} className={i % 3 === 1 ? "lg:mt-6" : ""}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative h-full p-6 sm:p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#4167F2]/30 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4167F2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="text-3xl sm:text-4xl mb-4">{track.icon}</div>

                                <h3
                                    className="text-lg sm:text-xl text-white mb-2 tracking-wide group-hover:text-[#6B8BF5] transition-colors"
                                    style={{ fontFamily: "var(--font-michroma)" }}
                                >
                                    {track.title}
                                </h3>

                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                                    {track.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {track.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 rounded-md text-[10px] text-gray-400 bg-white/5 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Difficulty */}
                                <span
                                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium"
                                    style={{
                                        color: difficultyColors[track.difficulty],
                                        background: `${difficultyColors[track.difficulty]}15`,
                                        border: `1px solid ${difficultyColors[track.difficulty]}30`,
                                    }}
                                >
                                    {track.difficulty}
                                </span>

                                <div
                                    className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-[0.06] transition-opacity"
                                    style={{ background: "radial-gradient(circle at bottom right, #4167F2, transparent 70%)" }}
                                />
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
