"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// interface CTABannerProps {
//     variant?: "primary" | "gradient" | "outline";
//     heading: string;
//     subtext: string;
//     buttonText: string;
//     buttonHref?: string;
// }
interface CTABannerProps {
  variant?: "primary" | "gradient" | "outline";
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
  isDisabled?: boolean;
}

export default function CTABanner({
  variant = "primary",
  heading,
  subtext,
  buttonText,
  buttonHref = "#register",
  isDisabled = false,
}: CTABannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const styles = {
    primary: {
      bg: "bg-gradient-to-r from-[#4167F2] to-[#6B8BF5]",
      border: "",
      text: "text-white",
      sub: "text-white/70",
      btn: "bg-white text-[#4167F2] hover:bg-white/90",
    },
    gradient: {
      bg: "bg-gradient-to-br from-[#4167F2]/15 via-transparent to-[#6B8BF5]/10",
      border: "border border-[#4167F2]/20",
      text: "text-white",
      sub: "text-gray-400",
      btn: "bg-[#4167F2] text-white hover:shadow-[0_0_25px_rgba(65,103,242,0.5)]",
    },
    outline: {
      bg: "bg-transparent",
      border: "border border-white/10",
      text: "text-white",
      sub: "text-gray-400",
      btn: "bg-white/5 text-white border border-white/20 hover:bg-white/10",
    },
  }[variant];

  return (
    <div ref={ref} className="py-10 md:py-16 px-4 sm:px-6">
      <motion.div style={{ y }} className="max-w-5xl mx-auto">
        <div
          className={`relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 overflow-hidden ${styles.bg} ${styles.border}`}
        >
          {/* Decorative elements */}
          {variant === "primary" && (
            <>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            </>
          )}
          {variant === "gradient" && (
            <div
              className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, #4167F2, transparent 70%)",
              }}
            />
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${styles.text}`}
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {heading}
              </h3>
              <p
                className={`text-sm sm:text-base ${styles.sub}`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {subtext}
              </p>
            </div>
            {/* <motion.a
                            href={buttonHref}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${styles.btn}`}
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            {buttonText}
                        </motion.a> */}

            <motion.a
              href={isDisabled ? undefined : buttonHref}
              whileHover={isDisabled ? {} : { scale: 1.05 }}
              whileTap={isDisabled ? {} : { scale: 0.95 }}
              className={`px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${styles.btn} ${isDisabled ? "opacity-80 cursor-not-allowed pointer-events-none" : ""}`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {buttonText}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
