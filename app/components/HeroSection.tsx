"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
// import FlutterMascott from "../../public/images/flutter-mascott.png";
import FlutterKanpurLogoV1 from "../../public/images/flutter-kanpur-logo.svg";
// import FrameworkLogo from "../../public/logo.svg";

/* ─── letter-by-letter stagger animation ─── */
function AnimatedLetters({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{
            fontFamily: "var(--font-outfit)",
            display: "inline-block",
            transformOrigin: "bottom",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── counting animation (0 → target) ─── */
function AnimatedCounter({
  value,
  suffix = "",
  delay = 0,
}: {
  value: string;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(eased * target).toString());
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 400); // stagger based on delay prop
    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);

  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* scroll progress for the section (0 → 1 as section scrolls out) */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* smooth the progress for buttery parallax */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  /* STRONGER parallax transforms */
  const titleY = useTransform(smoothProgress, [0, 1], [0, -280]);
  const titleScale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);
  const titleRotateX = useTransform(smoothProgress, [0, 0.6], [0, 8]);
  const subtitleY = useTransform(smoothProgress, [0, 1], [0, -160]);
  const subtitleBlur = useTransform(smoothProgress, [0.15, 0.5], [0, 12]);
  const ctaY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const statsY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);
  const shape1Y = useTransform(smoothProgress, [0, 1], [0, -350]);
  const shape1Rotate = useTransform(smoothProgress, [0, 1], [0, 45]);
  const shape2Y = useTransform(smoothProgress, [0, 1], [0, -250]);
  const shape2Scale = useTransform(smoothProgress, [0, 1], [1, 0.6]);
  const shape3Y = useTransform(smoothProgress, [0, 1], [0, -300]);
  const shape4X = useTransform(smoothProgress, [0, 1], [0, -120]);
  const shape4Y = useTransform(smoothProgress, [0, 1], [0, -80]);
  const glowScale = useTransform(smoothProgress, [0, 1], [1, 2]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5], [0.25, 0]);
  const lineScaleX = useTransform(smoothProgress, [0, 0.4], [1, 3]);
  const lineOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const badgeY = useTransform(smoothProgress, [0, 1], [0, -200]);

  /* 3D mascot parallax */
  const mascotY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const mascotRotate = useTransform(smoothProgress, [0, 0.5], [0, 15]);
  const mascotScale = useTransform(smoothProgress, [0, 0.6], [1, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:min-h-[120vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-0"
    >
      {/* ═══════ BACKGROUND LAYERS ═══════ */}

      {/* Grid pattern – parallax up on scroll */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(65,103,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(65,103,242,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Central radial glow – scales up & fades on scroll */}
      <motion.div
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, #4167F2 0%, rgba(65,103,242,0.3) 30%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Horizontal scan line */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
        className="absolute top-1/3 left-0 w-full h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(65,103,242,0.3), transparent)",
        }}
      />

      {/* ═══════ FLOATING SHAPES (parallax at different rates) ═══════ */}

      {/* Diamond – top-left */}
      <motion.div
        style={{ y: shape1Y, rotate: shape1Rotate }}
        className="absolute top-20 left-[12%] pointer-events-none hidden sm:block"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border border-[#4167F2]/20 rounded-lg"
        />
      </motion.div>

      {/* Circle – bottom-right */}
      <motion.div
        style={{ y: shape2Y, scale: shape2Scale }}
        className="absolute bottom-[20%] right-[15%] pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 border border-[#4167F2]/10 rounded-full"
        />
      </motion.div>

      {/* Dot cluster – mid-right */}
      <motion.div
        style={{ y: shape3Y }}
        className="absolute top-[35%] right-[8%] pointer-events-none hidden md:block"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-3"
        >
          {[6, 4, 8, 3].map((size, i) => (
            <div
              key={i}
              className="rounded-full bg-[#4167F2]"
              style={{ width: size, height: size, opacity: 0.3 - i * 0.05 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Blob – bottom-left */}
      <motion.div
        style={{ x: shape4X, y: shape4Y }}
        className="absolute bottom-[22%] left-[6%] pointer-events-none"
      >
        <motion.div
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 30% 70% / 60% 40% 60% 40%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-[#4167F2]/8 border border-[#4167F2]/10"
        />
      </motion.div>

      {/* Orbiting ring */}
      <motion.div
        style={{ y: shape1Y }}
        className="absolute top-[55%] left-[18%] pointer-events-none hidden md:block"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-dashed border-[#4167F2]/8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4167F2]/40"
          />
        </motion.div>
      </motion.div>

      {/* ═══════ 3D FLOATING MASCOT ═══════ */}
      <motion.div
        style={{
          y: mascotY,
          rotate: mascotRotate,
          scale: mascotScale,
          opacity: bgOpacity,
        }}
        className="absolute right-[8%] lg:right-[12%] top-[18%] z-20 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotateY: [-8, 8, -8],
            rotateZ: [-3, 3, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            perspective: "800px",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              rotateX: -10,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glow shadow underneath */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 rounded-full blur-xl"
              style={{ background: "rgba(65,103,242,0.25)" }}
            />
            {/* Mascot image with 3D depth */}
            {/* <Image
              src={FlutterMascott}
              alt="Framework Mascot"
              width={260}
              height={260}
              className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain drop-shadow-[0_20px_40px_rgba(65,103,242,0.3)] select-none"
              style={{ transform: "translateZ(40px)" }}
              priority
            /> */}
            {/* Floating sparkles around mascot */}
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              className="absolute top-2 right-0 w-2 h-2 rounded-full bg-[#4167F2]"
            />
            <motion.div
              animate={{ scale: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-4 left-0 w-1.5 h-1.5 rounded-full bg-[#6B8BF5]"
            />
            <motion.div
              animate={{ scale: [0.6, 1, 0.6], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute top-1/3 -left-3 w-1 h-1 rounded-full bg-white/60"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="relative z-10 text-center px-5 sm:px-6 md:px-8 max-w-6xl mx-auto"
      >
        {/* Eyebrow badge – slide in from top */}
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: badgeY }}
          className="mb-10"
        >
          {/* <span
            className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#4167F2] border border-[#4167F2]/30 uppercase"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#4167F2]"
            />
            Flutter Kanpur Presents
          </span> */}
          <Image
            src={FlutterKanpurLogoV1}
            alt="Framework Mascot"
            width={260}
            height={260}
            className="w-100% h-100% object-contain drop-shadow-[0_20px_40px_rgba(65,103,242,0.3)] select-none"
            style={{ transform: "translateZ(40px)", margin: "0 auto" }}
            priority
          />
        </motion.div>

        {/* ─── TITLE: letter-by-letter with parallax ─── */}
        <motion.div
          style={{ y: titleY, scale: titleScale, rotateX: titleRotateX }}
          className="mb-4 [perspective:1000px]"
        >
          <div
            className="flex items-baseline justify-center gap-2 md:gap-4 flex-wrap"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <AnimatedLetters
              text="FRAMEWORK"
              delay={0.4}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white  font-black"
            />
            {/* <AnimatedLetters
              text="WORK"
              delay={0.7}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white tracking-wider font-black"
            /> */}
            {/* Version with special pop-in */}
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.1,
                ease: [0.34, 1.56, 0.64, 1], // overshoot spring
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl gradient-text tracking-wider font-extrabold"
              style={{
                fontFamily: "var(--font-outfit)",
                display: "inline-block",
              }}
            >
              1.0
            </motion.span>
          </div>
        </motion.div>

        {/* Accent line – grows from center, parallax shrinks on scroll */}
        <motion.div
          style={{ scaleX: lineScaleX, opacity: lineOpacity }}
          className="origin-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="w-40 h-[2px] mx-auto mb-10 rounded-full origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #4167F2, #6B8BF5, #4167F2, transparent)",
            }}
          />
        </motion.div>

        {/* ─── SUBTITLE with parallax ─── */}
        <motion.div
          style={{
            y: subtitleY,
            filter: useTransform(subtitleBlur, (v) => `blur(${v}px)`),
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-2 font-medium"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Annual Hackathon & Tech Conference — Where developers converge to{" "}
            <span className="text-white font-bold">innovate</span>,{" "}
            <span className="text-white font-bold">learn</span>, and{" "}
            <span className="text-white font-bold">build the future</span>.
          </motion.p>
        </motion.div>

        {/* ─── CTAs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          style={{ y: ctaY }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary CTA */}
          <motion.a
            href="https://konfhub.com/framework"
            target="_blank"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 40px rgba(65,103,242,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base tracking-wide overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
              fontFamily: "var(--font-inter)",
            }}
          >
            {/* Shimmer sweep */}
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
            />
            <span className="relative z-10">Get Conference Pass →</span>
          </motion.a>

          {/* Secondary CTA */}
          {/* <motion.a
            href="https://konfhub.com/framework"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(65,103,242,0.5)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base tracking-wide border border-white/10 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get Conference Pass
          </motion.a> */}
        </motion.div>

        {/* ─── STATS BAR with parallax + staggered reveal ─── */}
        <motion.div style={{ y: statsY }} className="max-w-3xl mx-auto px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: "300", suffix: "+", label: "Attendees", delay: 1.8 },
              { value: "10", suffix: "+", label: "Speaker", delay: 2.0 },
              { value: "10", suffix: "+", label: "Track", delay: 2.2 },
              { value: "10", suffix: "hrs", label: "Hackathon", delay: 2.4 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="text-center group"
              >
                <p
                  className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-1 transition-colors group-hover:text-[#6B8BF5]"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={stat.delay}
                  />
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  {stat.label}
                </p>
                {/* Underline on hover */}
                <motion.div
                  className="mt-2 mx-auto h-px bg-[#4167F2]/0 group-hover:bg-[#4167F2]/40 transition-colors duration-300"
                  style={{ width: "40px" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════ SCROLL INDICATOR ═══════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        style={{ opacity: bgOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] tracking-[0.3em] text-gray-500 uppercase"
          style={{ fontFamily: "var(--font-michroma)" }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ height: [4, 12, 4], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 rounded-full bg-[#4167F2]"
          />
        </motion.div>
      </motion.div>

      {/* ═══════ BOTTOM GRADIENT FADE ═══════ */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
