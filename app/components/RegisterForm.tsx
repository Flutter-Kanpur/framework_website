"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RegisterForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        track: "",
        experience: "",
        github: "",
        agree: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitting(false);
        setSubmitted(true);
    };

    const inputClasses =
        "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#4167F2]/50 focus:ring-1 focus:ring-[#4167F2]/30 transition-all duration-300";
    const labelClasses =
        "block text-[10px] tracking-wider text-gray-400 uppercase mb-1.5";

    return (
        <section id="register" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: "radial-gradient(circle, #4167F2, transparent 70%)" }}
            />

            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div style={{ y: headingY, opacity: headingOpacity }} className="text-center mb-12 md:mb-16">
                    <span
                        className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        Secure Your Spot
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-wide"
                        style={{ fontFamily: "var(--font-michroma)" }}
                    >
                        REGISTER
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
                    />
                    <p
                        className="mt-6 text-gray-400 text-sm sm:text-base max-w-md mx-auto"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Fill in your details to register for FrameWork 1.0. It&apos;s completely free!
                    </p>
                </motion.div>

                {submitted ? (
                    /* ═══ SUCCESS STATE ═══ */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center p-10 sm:p-14 rounded-2xl border border-[#4167F2]/30 bg-[#4167F2]/[0.06]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.2 }}
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#4167F2]/20 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10 text-[#4167F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <h3
                            className="text-2xl text-white mb-2"
                            style={{ fontFamily: "var(--font-michroma)" }}
                        >
                            You&apos;re In!
                        </h3>
                        <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "var(--font-inter)" }}>
                            Check your email ({form.email}) for your confirmation ticket.
                        </p>
                        <p className="text-gray-500 text-xs">
                            March 15–16, 2026 • Kanpur University
                        </p>
                    </motion.div>
                ) : (
                    /* ═══ FORM ═══ */
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] space-y-5"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        {/* Name & Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="name" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        {/* Phone & Role */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="phone" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    I am a *
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    value={form.role}
                                    onChange={handleChange}
                                    className={`${inputClasses} appearance-none cursor-pointer`}
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em 1.25em" }}
                                >
                                    <option value="" className="bg-[#111]">Select role...</option>
                                    <option value="student" className="bg-[#111]">Student</option>
                                    <option value="professional" className="bg-[#111]">Professional Developer</option>
                                    <option value="designer" className="bg-[#111]">Designer</option>
                                    <option value="startup" className="bg-[#111]">Startup Founder</option>
                                    <option value="other" className="bg-[#111]">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Track & Experience */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="track" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    Preferred Track *
                                </label>
                                <select
                                    id="track"
                                    name="track"
                                    required
                                    value={form.track}
                                    onChange={handleChange}
                                    className={`${inputClasses} appearance-none cursor-pointer`}
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em 1.25em" }}
                                >
                                    <option value="" className="bg-[#111]">Select track...</option>
                                    <option value="mobile" className="bg-[#111]">Mobile Dev</option>
                                    <option value="ai" className="bg-[#111]">AI & ML</option>
                                    <option value="uiux" className="bg-[#111]">UI/UX Design</option>
                                    <option value="cloud" className="bg-[#111]">Cloud & DevOps</option>
                                    <option value="web" className="bg-[#111]">Web & Desktop</option>
                                    <option value="security" className="bg-[#111]">Security & Web3</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="experience" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                    Experience Level
                                </label>
                                <select
                                    id="experience"
                                    name="experience"
                                    value={form.experience}
                                    onChange={handleChange}
                                    className={`${inputClasses} appearance-none cursor-pointer`}
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em 1.25em" }}
                                >
                                    <option value="" className="bg-[#111]">Select level...</option>
                                    <option value="beginner" className="bg-[#111]">Beginner (0-1 yr)</option>
                                    <option value="intermediate" className="bg-[#111]">Intermediate (1-3 yrs)</option>
                                    <option value="advanced" className="bg-[#111]">Advanced (3+ yrs)</option>
                                </select>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div>
                            <label htmlFor="github" className={labelClasses} style={{ fontFamily: "var(--font-michroma)" }}>
                                GitHub / Portfolio URL
                            </label>
                            <input
                                id="github"
                                name="github"
                                type="url"
                                placeholder="https://github.com/username"
                                value={form.github}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>

                        {/* Agree checkbox */}
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                name="agree"
                                required
                                checked={form.agree}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#4167F2] focus:ring-[#4167F2] focus:ring-offset-0 cursor-pointer accent-[#4167F2]"
                            />
                            <span className="text-xs text-gray-400 leading-relaxed">
                                I agree to the{" "}
                                <span className="text-[#4167F2] hover:underline">Code of Conduct</span>{" "}
                                and{" "}
                                <span className="text-[#4167F2] hover:underline">Privacy Policy</span>
                                . I understand this is a free event. *
                            </span>
                        </label>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={submitting}
                            whileHover={{ scale: submitting ? 1 : 1.02, boxShadow: submitting ? "" : "0 0 30px rgba(65,103,242,0.4)" }}
                            whileTap={{ scale: submitting ? 1 : 0.98 }}
                            className={`w-full py-3.5 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 ${submitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            style={{ background: "linear-gradient(135deg, #4167F2, #6B8BF5)" }}
                        >
                            {submitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                    />
                                    Registering...
                                </span>
                            ) : (
                                "Register for Free →"
                            )}
                        </motion.button>

                        <p className="text-center text-[10px] text-gray-600 mt-2">
                            🔒 Your information is safe and will only be used for event communication.
                        </p>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
