"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* Existing sponsor logos (marquee) */
const existingSponsors = [
    "Google", "Flutter", "Firebase", "Razorpay", "PhonePe",
    "Jio", "Zomato", "Swiggy", "Paytm", "CRED",
    "Vercel", "GitHub", "Notion", "Figma", "AWS",
];

/* Sponsorship tier cards */
const tiers = [
    {
        name: "Platinum",
        price: "₹5,00,000",
        color: "#4167F2",
        glow: "rgba(65,103,242,0.4)",
        perks: [
            "Main stage branding",
            "Keynote slot (15 min)",
            "Premium booth (10×10)",
            "Logo on all materials",
            "50 VIP passes",
            "Social media feature",
        ],
        featured: true,
    },
    {
        name: "Gold",
        price: "₹3,00,000",
        color: "#f59e0b",
        glow: "rgba(245,158,11,0.3)",
        perks: [
            "Stage branding",
            "Workshop slot",
            "Standard booth (8×8)",
            "Logo on website & banners",
            "30 passes",
        ],
        featured: false,
    },
    {
        name: "Silver",
        price: "₹1,50,000",
        color: "#94a3b8",
        glow: "rgba(148,163,184,0.3)",
        perks: [
            "Banner placement",
            "Logo on website",
            "Small booth (6×6)",
            "15 passes",
        ],
        featured: false,
    },
    {
        name: "Bronze",
        price: "₹75,000",
        color: "#b45309",
        glow: "rgba(180,83,9,0.3)",
        perks: [
            "Logo on website",
            "Social media mention",
            "5 passes",
        ],
        featured: false,
    },
];

export default function SponsorsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    return (
        <section id="sponsors" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center mb-14 md:mb-20">
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Our Partners
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        SPONSORS
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                </motion.div>

                {/* ═══ EXISTING SPONSORS MARQUEE ═══ */}
                <AnimatedSection className="mb-16 md:mb-24">
                    <h3
                        className="text-center text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 uppercase mb-6"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Trusted By Leading Companies
                    </h3>
                    <div className="relative overflow-hidden">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

                        {/* Marquee track */}
                        <div className="flex animate-marquee whitespace-nowrap">
                            {[...existingSponsors, ...existingSponsors].map((sponsor, i) => (
                                <div
                                    key={i}
                                    className="mx-4 sm:mx-6 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center min-w-[120px] sm:min-w-[150px] hover:border-[#4167F2]/30 transition-all duration-300 group cursor-pointer"
                                >
                                    <span
                                        className="text-sm sm:text-base font-bold text-gray-600 group-hover:text-[#4167F2] transition-colors duration-300 tracking-wider"
                                        style={{ fontFamily: "var(--font-michroma)" }}
                                    >
                                        {sponsor}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* ═══ SPONSORSHIP TIER CARDS ═══ */}
                <AnimatedSection>
                    <h3
                        className="text-center text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 uppercase mb-8 md:mb-10"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Become a Sponsor
                    </h3>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {tiers.map((tier, i) => (
                        <AnimatedSection key={tier.name} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={`group relative h-full p-5 sm:p-6 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ${tier.featured
                                        ? "border-[#4167F2]/40 bg-gradient-to-b from-[#4167F2]/10 to-transparent"
                                        : "border-white/5 bg-white/[0.02] hover:border-white/10"
                                    }`}
                            >
                                {/* Featured badge */}
                                {tier.featured && (
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4167F2] to-transparent" />
                                )}

                                {/* Tier name & price */}
                                <div className="mb-5">
                                    <span
                                        className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                        style={{ color: tier.color, fontFamily: "var(--font-michroma)" }}
                                    >
                                        {tier.name}
                                    </span>
                                    <p
                                        className="text-2xl sm:text-3xl text-white mt-2 font-bold"
                                        style={{ fontFamily: "var(--font-inter)" }}
                                    >
                                        {tier.price}
                                    </p>
                                </div>

                                {/* Perks list */}
                                <ul className="space-y-2.5 mb-6">
                                    {tier.perks.map((perk) => (
                                        <li key={perk} className="flex items-start gap-2.5 text-sm text-gray-400">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tier.color }} />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="mailto:sponsors@flutterkanpur.dev"
                                    className="block w-full text-center py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
                                    style={{
                                        color: tier.featured ? "#fff" : tier.color,
                                        background: tier.featured
                                            ? `linear-gradient(135deg, ${tier.color}, ${tier.color}cc)`
                                            : "transparent",
                                        border: tier.featured ? "none" : `1px solid ${tier.color}40`,
                                        boxShadow: tier.featured ? `0 0 20px ${tier.glow}` : "none",
                                        fontFamily: "var(--font-inter)",
                                    }}
                                >
                                    Get in Touch
                                </a>

                                {/* Corner glow */}
                                <div
                                    className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-[0.08] transition-opacity"
                                    style={{ background: `radial-gradient(circle at bottom right, ${tier.color}, transparent 70%)` }}
                                />
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
