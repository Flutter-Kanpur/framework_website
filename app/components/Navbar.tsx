"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const leftLinks = [
  // { name: "Speaker", href: "/#speakers" },
  { name: "About", href: "/#about" },
  { name: "Track", href: "/#tracks" },
  { name: "Sponsor", href: "/#sponsors" },

  // { name: "Schedule", href: "/#schedule" },
];

const rightLinks = [
  // { name: "Sponsor", href: "/#sponsors" },
  { name: "Partner", href: "/#partners" },
  { name: "Hackathon", href: "/#hackathon" },
  // { name: "Support Us", href: "/#supportus" },
  //   { name: "Networking", href: "/#networking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-xl py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4167F2] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <Image
              src="/logo.svg"
              alt="Framework Logo"
              width={32}
              height={32}
              className="group-hover:drop-shadow-[0_0_12px_rgba(65,103,242,0.6)] transition-all duration-300 w-7 h-7 sm:w-8 sm:h-8"
            />
            <span
              className="text-white text-sm sm:text-base tracking-widest"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              FRAMEWORK
            </span>
          </Link>

          {/* Right Links + CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4167F2] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="https://forms.gle/RM9bP4abFMBjLJTd8"
              className="ml-2 px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(65,103,242,0.5)]"
              style={{
                background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {allLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl sm:text-2xl text-white tracking-widest hover:text-[#4167F2] transition-colors"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="https://forms.gle/RM9bP4abFMBjLJTd8"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 text-white rounded-full font-medium text-sm"
                style={{
                  background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
                }}
              >
                Support Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
