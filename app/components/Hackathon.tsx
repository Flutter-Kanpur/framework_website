// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type Hackathon = {
//   title: string;
//   tagline: string;
//   date: string;
//   duration: string;
//   location: string;
//   prize: string;
//   themes: string[];
//   image?: string;
// };

// type Props = {
//   hackathon: Hackathon;
// };

// const HackathonSection: React.FC<Props> = ({ hackathon }) => {
//   const ref = useRef<HTMLElement | null>(null);

//   // ✅ Scroll animation (fixed)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

//   return (
//     <section
//       ref={ref} // ✅ IMPORTANT FIX
//       className="w-full py-16 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           style={{ y: headingY, opacity: headingOpacity }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <span
//             className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
//             style={{ fontFamily: "var(--font-michroma)" }}
//           >
//             Hackathon
//           </span>

//           <h2
//             className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
//             style={{ fontFamily: "var(--font-michroma)" }}
//           >
//             {hackathon.title}
//           </h2>

//           <div
//             className="w-20 h-1 mx-auto rounded-full"
//             style={{
//               background:
//                 "linear-gradient(90deg, transparent, #4167F2, transparent)",
//             }}
//           />

//           <p
//             className="mt-6 text-gray-400 text-sm sm:text-base max-w-lg mx-auto"
//             style={{ fontFamily: "var(--font-inter)" }}
//           >
//             {hackathon.tagline}
//           </p>
//         </motion.div>

//         {/* Card */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           {/* Left Image */}
//           {hackathon.image && (
//             <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
//               <Image
//                 width={600}
//                 height={400}
//                 src={hackathon.image}
//                 alt="hackathon"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           )}

//           {/* Right Content */}
//           <div className="space-y-6">

//             {/* Info */}
//             <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
//               <div>
//                 <p className="text-gray-400">📅 Date</p>
//                 <p className="font-semibold">{hackathon.date}</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">⏱ Duration</p>
//                 <p className="font-semibold">{hackathon.duration}</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">📍 Location</p>
//                 <p className="font-semibold">{hackathon.location}</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">🏆 Prize Pool</p>
//                 <p className="font-semibold">{hackathon.prize}</p>
//               </div>
//             </div>

//             {/* Themes */}
//             <div>
//               <p className="text-gray-400 mb-2">Themes</p>
//               <div className="flex flex-wrap gap-2">
//                 {hackathon.themes.map((theme, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
//                   >
//                     {theme}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4 mt-6">
//               <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition">
//                 Register Now 🚀
//               </button>
//               <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-xl font-medium transition">
//                 View Details
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HackathonSection;

// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type Hackathon = {
//   title: string;
//   tagline: string;
//   description: string; 
//   date: string;
//   duration: string;
//   location: string;
//   prize: string;
//   themes: string[];
//   image?: string;
// };

// type Props = {
//   hackathon: Hackathon;
// };

// const HackathonSection: React.FC<Props> = ({ hackathon }) => {
//   const ref = useRef<HTMLElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
//   const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

//   const primaryTheme = hackathon.themes[0] || "theme";

//   return (
//     <section
//       ref={ref}
//       className="w-full py-20 px-6 md:px-12 bg-[#030303] text-white relative overflow-hidden"
//     >
//       {/* Subtle Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* --- HEADING (Preserved as requested) --- */}
//         <motion.div
//           style={{ y: headingY, opacity: headingOpacity }}
//           className="text-center mb-16 md:mb-24"
//         >
//           <span
//             className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block font-semibold"
//             style={{ fontFamily: "var(--font-michroma, sans-serif)" }}
//           >
//             Hackathon
//           </span>

//           <h2
//             className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide font-bold"
//             style={{ fontFamily: "var(--font-michroma, sans-serif)" }}
//           >
//             {hackathon.title}
//           </h2>

//           <div
//             className="w-24 h-[2px] mx-auto rounded-full shadow-[0_0_15px_#4167F2]"
//             style={{
//               background: "linear-gradient(90deg, transparent, #4167F2, transparent)",
//             }}
//           />

//           <p
//             className="mt-6 text-gray-400 text-sm sm:text-lg max-w-lg mx-auto tracking-wide"
//             style={{ fontFamily: "var(--font-inter, sans-serif)" }}
//           >
//             {hackathon.tagline}
//           </p>
//         </motion.div>

//         {/* --- MAIN CONTENT LAYOUT --- */}
//         <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left: Image Container */}
//           <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden group border border-white/10 bg-white/5 flex items-center justify-center">
//             {hackathon.image ? (
//               <Image
//                 src={hackathon.image}
//                 alt={hackathon.title}
//                 fill
//                 className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
//               />
//             ) : (
//               // Fallback if image doesn't load
//               <div className="text-gray-500 font-mono text-sm tracking-widest flex flex-col items-center gap-3">
//                 <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//                 [ IMAGE PLACEHOLDER ]
//               </div>
//             )}
//             {/* Inner Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
//           </div>

//           {/* Right: Content & Details */}
//           <div className="space-y-8">
            
//             {/* Description Area */}
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-white">About the Event</h3>
//               <p className="text-gray-400 leading-relaxed text-sm md:text-base">
//                 {hackathon.description}
//               </p>
//             </div>

//             <hr className="border-white/10" />

//             {/* Grid Info */}
//             <div className="grid grid-cols-2 gap-y-6 gap-x-4">
//               <DetailItem icon={<CalendarIcon />} label="Date" value={hackathon.date} />
//               <DetailItem icon={<ClockIcon />} label="Duration" value={hackathon.duration} />
//               <DetailItem icon={<LocationIcon />} label="Location" value={hackathon.location} />
//               <DetailItem icon={<TrophyIcon />} label="Prize Pool" value={hackathon.prize} />
//             </div>

//             {/* Themes */}
//             <div className="space-y-3">
//               <p className="text-gray-400 text-sm font-medium">Themes</p>
//               <div className="flex flex-wrap gap-3">
//                 {hackathon.themes.map((theme, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 text-sm text-gray-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
//                   >
//                     {theme}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2">
//                 Register Now
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//               {/* <button className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 rounded-full font-medium transition-all">
//                 View Details
//               </button> */}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- HELPER COMPONENT FOR GRID ITEMS ---
// const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
//   <div className="flex items-start gap-3">
//     <div className="mt-0.5 text-[#4167F2]">{icon}</div>
//     <div>
//       <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
//       <p className="font-semibold text-gray-100">{value}</p>
//     </div>
//   </div>
// );

// // --- CLEAN SVG ICONS ---
// const CalendarIcon = () => (
//   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   </svg>
// );
// const ClockIcon = () => (
//   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );
// const LocationIcon = () => (
//   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );
// const TrophyIcon = () => (
//   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//   </svg>
// );

// export default HackathonSection;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Hackathon = {
  title: string;
  tagline: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  prize: string;
  themes: string[];
  image?: string;
};

type Props = {
  hackathon: Hackathon;
};

const HackathonSection: React.FC<Props> = ({ hackathon }) => {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const primaryTheme = hackathon.themes[0] || "Open Theme";

  return (
    <section
      ref={ref}
      className="w-full py-20 px-6 md:px-12 bg-[#030303] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADING --- */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block font-semibold"
            style={{ fontFamily: "var(--font-michroma, sans-serif)" }}
          >
            Hackathon
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide font-bold"
            style={{ fontFamily: "var(--font-michroma, sans-serif)" }}
          >
            {hackathon.title}
          </h2>

          <div
            className="w-24 h-[2px] mx-auto rounded-full shadow-[0_0_15px_#4167F2]"
            style={{
              background: "linear-gradient(90deg, transparent, #4167F2, transparent)",
            }}
          />

          <p
            className="mt-6 text-gray-400 text-sm sm:text-lg max-w-lg mx-auto tracking-wide"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            {hackathon.tagline}
          </p>
        </motion.div>

        {/* --- MAIN CONTENT CARD --- */}
        <div className="bg-[#0a0a0a]/80 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl flex flex-col gap-10">
          
          {/* Top Section: Image (Left) + About (Right) */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Image Box */}
            <div className="relative w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden group border border-white/5 bg-white/5">
              {hackathon.image ? (
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-mono text-sm tracking-widest">
                  [ IMAGE PLACEHOLDER ]
                </div>
              )}
            </div>

            {/* About Box */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Featured Theme: {primaryTheme}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">About the Event</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                {hackathon.description}
              </p>
            </div>
          </div>

          <hr className="border-white/10 w-full" />

          {/* Bottom Section: Details + Buttons */}
          <div className="space-y-10">
            
            {/* Details Grid (4 columns on Desktop, 2 on Mobile) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <DetailItem icon={<CalendarIcon />} label="Date" value={hackathon.date} />
              <DetailItem icon={<ClockIcon />} label="Duration" value={hackathon.duration} />
              <DetailItem icon={<LocationIcon />} label="Location" value={hackathon.location} />
              <DetailItem icon={<TrophyIcon />} label="Prize Pool" value={hackathon.prize} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/RM9bP4abFMBjLJTd8"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-20 py-5 text-m font-medium text-white rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(65,103,242,0.5)]"
              style={{
                background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Register Now
            </a>
              {/* <button className="px-10 py-4 border border-white/20 text-white hover:bg-white/5 rounded-xl font-medium transition-all flex items-center justify-center">
                View Details
              </button> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPER COMPONENT FOR GRID ITEMS ---
const DetailItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
    <div className="mb-3 p-3 rounded-full bg-blue-600/10 text-[#4167F2] inline-flex">
      {icon}
    </div>
    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5">{label}</p>
    <p className="font-semibold text-gray-100 text-sm sm:text-base">{value}</p>
  </div>
);

// --- CLEAN SVG ICONS ---
const CalendarIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const LocationIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const TrophyIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default HackathonSection;