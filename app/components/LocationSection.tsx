"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LocationSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const mapScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);

    return (
        <section id="location" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center mb-14 md:mb-20">
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Find Us Here
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        VENUE
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
                    {/* Map */}
                    <motion.div
                        style={{ scale: mapScale }}
                        className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]"
                    >
                        {/* Embedded map (dark styled) */}
                        <div className="relative w-full aspect-[16/10] bg-[#0d0d0d]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0!2d80.3318!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38a4a0c3b5c9%3A0x7b8889a5e0ac7eeb!2sChhatrapati%20Shahu%20Ji%20Maharaj%20University%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin&maptype=roadmap"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kanpur University Location"
                                className="absolute inset-0"
                            />

                            {/* Blinking Pin Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <div className="relative">
                                    {/* Pulse rings */}
                                    <motion.div
                                        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#4167F2]/30"
                                    />
                                    <motion.div
                                        animate={{ scale: [1, 3, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#4167F2]/20"
                                    />
                                    {/* Pin */}
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative z-10"
                                    >
                                        <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
                                            <path
                                                d="M16 0C7.164 0 0 7.164 0 16c0 12 16 26 16 26s16-14 16-26C32 7.164 24.836 0 16 0z"
                                                fill="#4167F2"
                                            />
                                            <circle cx="16" cy="16" r="7" fill="white" />
                                            <circle cx="16" cy="16" r="4" fill="#4167F2" />
                                        </svg>
                                    </motion.div>
                                    {/* Shadow */}
                                    <motion.div
                                        animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-black/40 rounded-full blur-sm"
                                    />
                                </div>
                            </div>

                            {/* Blue overlay tint */}
                            <div className="absolute inset-0 bg-[#4167F2]/5 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Venue Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3
                                className="text-xl sm:text-2xl text-white mb-2"
                                style={{ fontFamily: "var(--font-michroma)" }}
                            >
                                Kanpur University
                            </h3>
                            <p
                                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur — the heart of tech innovation in UP.
                            </p>
                        </motion.div>

                        {/* Info cards */}
                        {[
                            { icon: "📍", label: "Address", value: "CSJMU Campus, Kalyanpur, Kanpur — 208024" },
                            { icon: "📅", label: "Date", value: "March 15–16, 2026" },
                            { icon: "🕐", label: "Time", value: "9:00 AM — 6:00 PM IST" },
                            { icon: "🅿️", label: "Parking", value: "Free parking available on campus" },
                        ].map((info, i) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#4167F2]/20 transition-colors duration-300"
                            >
                                <span className="text-lg sm:text-xl flex-shrink-0">{info.icon}</span>
                                <div>
                                    <p className="text-[10px] tracking-wider text-gray-500 uppercase mb-0.5" style={{ fontFamily: "var(--font-michroma)" }}>
                                        {info.label}
                                    </p>
                                    <p className="text-sm text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
                                        {info.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Directions CTA */}
                        <motion.a
                            href="https://maps.app.goo.gl/kanpur-university"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(65,103,242,0.4)]"
                            style={{
                                background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            Get Directions
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
