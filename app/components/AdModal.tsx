"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const STORAGE_KEY = "framework_ad_closed_at";
const INTERVAL_MS = 1 * 60 * 1000; // 45 minutes
const SECTION_BLUE = "#66B2FF";

export default function AdModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const shouldShowModal = useCallback(() => {
    if (typeof window === "undefined") return false;
    const closedAt = localStorage.getItem(STORAGE_KEY);
    if (!closedAt) return true;
    const elapsed = Date.now() - parseInt(closedAt, 10);
    return elapsed >= INTERVAL_MS;
  }, []);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    const now = Date.now();
    localStorage.setItem(STORAGE_KEY, String(now));
    setTimeout(openModal, INTERVAL_MS);
  }, [openModal]);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setTimeout(() => {
      if (shouldShowModal()) openModal();
    }, 0);
    return () => clearTimeout(id);
  }, [mounted, shouldShowModal, openModal]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ad-modal-title"
            className="fixed left-1/2 top-1/2 z-[101] flex max-h-[90vh] w-[min(40vw,560px)] min-w-[min(90vw,320px)] -translate-x-1/2 -translate-y-1/2 flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[90vh] flex-col overflow-hidden bg-black shadow-2xl outline outline-1 outline-white/5 rounded-[10px]">
              {/* <button
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 z-20 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#66B2FF]"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}

<div className="relative flex flex-1 flex-col overflow-y-auto p-8 sm:p-10">

  <div className="relative w-full mb-6">
    <Image
      src="/hackathon1.svg"
      alt="Hackathon Banner"
      width={1200}
      height={400}
      className="w-full h-auto object-contain rounded-xl"
      priority
    />
  </div>



                {/* ABOUT FRAMEWORK — small label with blue line */}
                {/* <div
                  className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: SECTION_BLUE,
                  }}
                >
                  <span
                    className="h-px w-6 shrink-0"
                    style={{ backgroundColor: SECTION_BLUE }}
                  />
                  About Framework
                </div> */}


                <h2
                  id="ad-modal-title"
                  className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  Hackathon is {" "}
                  <span style={{ color: SECTION_BLUE }}>Live</span>
                 {/* of Innovators */}
                </h2>
                <div className="h-2" />

                <p
                  className="mb-4 text-base leading-relaxed text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                 The Framework 1.0 Hackathon is a high-energy, 10-hour offline coding event designed to bring together passionate student developers, designers, and innovators. Participants will work in teams to build impactful solutions to real-world problems within a limited time frame.
                 
                 {/* This hackathon is completely free and open to all students, featuring a prize pool of 20K+. Participants will receive mentorship, collaborate with peers, and present their projects to experienced judges.
                Whether you're a beginner or an experienced developer, the hackathon is the perfect place to learn, build, and showcase your skills. */}
                {/* </p> */}
                {/* {/* <p
                  className="mb-4 text-base leading-relaxed text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                > */}
                  {" "}
                  {/* <span className="font-semibold text-white">
                    Framework 1.0, Flutter Kanpur’s. 
                  </span> */}
                  </p>
                  <p>

                 This hackathon is completely free and open to all students, featuring a prize pool of 20K+. Participants will receive mentorship, collaborate with peers, and present their projects to experienced judges.
                Whether you're a beginner or an experienced developer, the hackathon is the perfect place to learn, build, and showcase your skills.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-between">
                  <a
                    href="https://framework.devfolio.co/overview"
                    target="_blank"
                    onClick={closeModal}
                    className="rounded-lg px-5 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                      fontFamily: "var(--font-inter)",
                      backgroundColor: SECTION_BLUE,
                    }}
                  >
                    Register Now
                  </a>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-lg border border-white/30 bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
