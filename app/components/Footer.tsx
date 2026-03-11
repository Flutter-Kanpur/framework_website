"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Event",
    links: [
      // { name: "Speakers", href: "/#speakers" },
      { name: "Tracks", href: "/#tracks" },
      // { name: "Schedule", href: "/#schedule" },
      { name: "Sponsors", href: "/#sponsors" },
      { name: "Partner", href: "/#partner" },
      { name: "About", href: "/#about" },
      { name: "Hackathon", href: "/#hackathon" },
    ],
  },
  // {
  //   title: "Community",
  //   links: [
  //     { name: "Flutter Kanpur", href: "#" },
  //     // { name: "GDG Kanpur", href: "#" },
  //     { name: "Code of Conduct", href: "#" },
  //     { name: "FAQ", href: "#" },
  //   ],
  // },
  {
    title: "Connect",
    links: [
      { name: "Twitter / X", href: "https://x.com/FlutterKanpur" },
      { name: "Instagram", href: "https://www.instagram.com/flutterkanpur" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/flutterkanpur/" },
      { name: "Discord", href: "https://discord.gg/KwNDvGzQ" },
      { name: "Reddit", href: "https://www.reddit.com/user/flutterkanpur/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Large Brand Text (Griflan-style) */}
      <div className="relative py-20 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, #4167F2, transparent 70%)",
          }}
        />

        <AnimatedSection className="text-center">
          <h2
            className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-white/[0.03] tracking-wider leading-none select-none"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            FRAMEWORK
          </h2>
          <div className="mt-[-2rem] md:mt-[-4rem] relative z-10">
            <p
              className="text-2xl md:text-4xl text-white tracking-wider"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              FRAMEWORK <span className="gradient-text">1.0</span>
            </p>
            <p
              className="mt-3 text-gray-400 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A Flutter Kanpur Initiative
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Framework Logo"
                width={32}
                height={32}
              />
              <span
                className="text-white text-sm tracking-widest"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                FRAMEWORK
              </span>
            </div>
            <p
              className="text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Flutter Kanpur&apos;s annual hackathon and tech conference
              bringing developers together.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="text-xs tracking-[0.15em] text-gray-400 uppercase mb-4"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#4167F2] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-gray-600"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2026 Flutter Kanpur. All rights reserved.
          </p>
          <p
            className="text-xs text-gray-600"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Made with 💙 by the Flutter Kanpur Community
          </p>
        </div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#4167F2 1px, transparent 1px), linear-gradient(90deg, #4167F2 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </footer>
  );
}
