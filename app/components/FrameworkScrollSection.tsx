"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FrameworkScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Panel starts small on the right, scales to fill screen */
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["24px", "0px"]);
  const x = useTransform(scrollYProgress, [0, 0.4], ["15%", "0%"]);
  const y = useTransform(scrollYProgress, [0, 0.4], ["5%", "0%"]);
  const panelWidth = useTransform(scrollYProgress, [0, 0.5], ["70vw", "100vw"]);
  const panelHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["50vh", "100vh"],
  );

  /* Hero text fades out as panel grows */
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  /* Info bar appears after panel fills screen */
  const infoOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const infoY = useTransform(scrollYProgress, [0.6, 0.85], [30, 0]);

  /* Overlay gradient fades in */
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 0.7]);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh]"
      style={{ background: "#000" }}
    >
      {/* Sticky wrapper keeps everything pinned while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Hero text – left side, fades on scroll */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute z-20 left-4 sm:left-6 md:left-16 top-1/2 -translate-y-1/2 pointer-events-none max-w-[200px] sm:max-w-sm md:max-w-lg"
        >
          <h2
            className="text-[#4167F2] font-black text-3xl sm:text-5xl md:text-[7vw] uppercase leading-[0.9] tracking-tighter"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            FRAME
            <br />
            WORK
          </h2>
          <p
            className="text-gray-400 text-xs sm:text-base md:text-lg mt-3 sm:mt-5 leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Expanding the boundaries of Flutter development.
          </p>
          <div className="mt-4 sm:mt-6 flex items-center gap-3 hidden sm:flex">
            <span className="w-8 h-px bg-[#4167F2]" />
            <span
              className="text-[10px] tracking-[0.3em] text-[#4167F2] uppercase"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              Scroll to explore
            </span>
          </div>
        </motion.div>

        {/* Scaling panel – starts small right-aligned, fills whole screen */}
        <motion.div
          style={{
            scale,
            borderRadius,
            x,
            y,
            width: panelWidth,
            height: panelHeight,
          }}
          className="relative bg-[#4167F2] overflow-hidden shadow-[0_0_60px_rgba(65,103,242,0.3)]"
        >
          {/* Background video / image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Framework Logo"
              width={300}
              height={300}
              className="opacity-[0.08] select-none"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Gradient overlay */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-br from-[#4167F2]/60 via-[#2A4AD0]/40 to-black/70"
          />

          {/* Corner badge */}
          <div className="absolute top-6 right-6 z-10">
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-white/80 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              Live Demo
            </span>
          </div>

          {/* Center play indicator (appears when panel is large) */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
            }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom info bar – fades in after panel fills screen */}
        <motion.div
          style={{ opacity: infoOpacity, y: infoY }}
          className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 z-30 px-4"
        >
          {["Kanpur, IN", "March 2026", "Flutter Kanpur", "2 Days"].map(
            (item) => (
              <span
                key={item}
                className="text-white/50 uppercase text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {item}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </div>
  );
}
