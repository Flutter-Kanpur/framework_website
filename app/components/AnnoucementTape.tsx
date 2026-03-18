// "use client";

// import React from "react";
// import { SunIcon } from "@radix-ui/react-icons";

// const Tape = () => {
//   return (
//     // OPTIMIZATION: 'overflow-hidden' prevents the tilted tape from causing horizontal scrollbars
//     <div className="w-full overflow-hidden pb-32 py-20 lg:py-10 bg-black ">

//       {/* OPTIMIZATION:
//         1. translate3d(0,0,0) forces Hardware Acceleration on the animation.
//         2. Removed mask-image styles from here and used Tailwind classes instead.
//       */}
//       <style jsx>{`
//         @keyframes move-left {
//           0%   { transform: translate3d(0, 0, 0); }
//           100% { transform: translate3d(-50%, 0, 0); }
//         }

//         @keyframes move-right {
//           0%   { transform: translate3d(-50%, 0, 0); }
//           100% { transform: translate3d(0, 0, 0); }
//         }

//         .animate-tape-left {
//           animation: move-left 30s linear infinite;
//           will-change: transform;
//         }

//         .animate-tape-right {
//           animation: move-right 25s linear infinite;
//           will-change: transform;
//         }
//       `}</style>

//       <div className="relative flex h-48 items-center justify-center">

//         {/* -------- TAPE 1 -------- */}
//         {/* Changed width to 110% (smaller) and centered it explicitly to prevent layout shift */}
//         <div className="absolute w-[110%] left-1/2 -translate-x-1/2 -rotate-12 lg:-rotate-4 ">
//           <div className="bg-[#ffe327] shadow-xl">
//             {/* OPTIMIZATION: 'md:[mask-image:...]' -> Only applies expensive mask on Desktop */}
//             <div className="flex overflow-hidden md:mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
//               <div className="flex flex-none gap-6 py-3 animate-tape-left transform-gpu">
//                 {[...new Array(2)].fill(words1).flat().map((word, i) => (
//                   <div key={i} className="inline-flex items-center gap-4">
//                     <span className="text-lg text-gray-900 font-gilroy  whitespace-nowrap">
//                       {word}
//                     </span>
//                     <SunIcon className="size-5 -rotate-12 text-yellow-500 shrink-0" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* -------- TAPE 2 -------- */}
//         <div className="absolute w-[110%] left-1/2 -translate-x-1/2 rotate-3 lg:rotate-1">
//           <div className="bg-[#ffe327] shadow-xl">
//              {/* OPTIMIZATION: Mask is hidden on mobile */}
//             <div className="flex overflow-hidden md:mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
//               <div className="flex flex-none gap-6 py-3 animate-tape-right transform-gpu">
//                 {[...new Array(2)].fill(words2).flat().map((word, i) => (
//                   <div key={i} className="inline-flex items-center gap-4">
//                     <span className="text-lg text-gray-900 font-gilroy  whitespace-nowrap">
//                       {word}
//                     </span>
//                     <SunIcon className="size-5 -rotate-12 text-yellow-500 shrink-0" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// // Data extracted for cleanliness
// const words1 = [
//   "Creator Growth",
//   "Brand Scaling",
//   "2× Faster Reach",
//   "Account Management",
//   "Smart Analytics",
//   "Brand Deals",
//   "Revenue Boost",
//   "Viral Content",
//   "Audience Building",
//   "Engagement Spike",
//   "Performance Editing",
//   "Social Media Systems",
// ];

// const words2 = [
//   "Brands growth",
//   "2x growth",
//   "Analytics",
//   "Creators growth",
//   "Account managing",
//   "Brands deals",
//   "Creators growth",
//   "Brands growth",
//   "2x growth",
//   "Account managing",
//   "Analytics",
//   "Brands deals",
// ];

// export default Tape;

"use client";

import React from "react";
import Image from "next/image";

const Tape = () => {
  return (
    // OPTIMIZATION: 'overflow-hidden' prevents the tilted tape from causing horizontal scrollbars
    <div className="w-full overflow-hidden pb-32 py-20 lg:py-10 bg-[#00000]">
      {/* OPTIMIZATION: 
        1. translate3d(0,0,0) forces Hardware Acceleration on the animation.
        2. Removed mask-image styles from here and used Tailwind classes instead.
      */}
      <style jsx>{`
        @keyframes move-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes move-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-tape-left {
          animation: move-left 30s linear infinite;
          will-change: transform;
        }

        .animate-tape-right {
          animation: move-right 25s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="relative flex h-48 items-center justify-center">
        {/* -------- TAPE 1 -------- */}
        <div className="absolute w-[110%] left-1/2 -translate-x-1/2 -rotate-12 lg:-rotate-4 ">
          {/* Using a vibrant Flutter-style Blue */}
          <div className="bg-[#4167F2] shadow-xl">
            <div className="flex overflow-hidden md:mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
              <div className="flex flex-none gap-8 py-3 animate-tape-left transform-gpu">
                {[...new Array(3)]
                  .fill(promoWords1)
                  .flat()
                  .map((word, i) => (
                    <div key={i} className="inline-flex items-center gap-6">
                      <span className="text-xl font-bold uppercase tracking-widest text-white whitespace-nowrap">
                        {word}
                      </span>
                      {/* Using your specific logo.png */}
                      <Image
                        src="/Frame 28.svg"
                        alt="Framework Logo"
                        // className="h-8 w-auto object-contain shrink-0"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* -------- TAPE 2 -------- */}
        <div className="absolute w-[110%] left-1/2 -translate-x-1/2 rotate-3 lg:rotate-1">
          {/* Using a slightly lighter contrasting Flutter Blue/Cyan */}
          <div className="bg-[#4167F2] shadow-xl">
            <div className="flex overflow-hidden md:mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
              <div className="flex flex-none gap-8 py-3 animate-tape-right transform-gpu">
                {[...new Array(3)]
                  .fill(promoWords2)
                  .flat()
                  .map((word, i) => (
                    <div key={i} className="inline-flex items-center gap-6">
                      <span className="text-xl font-bold uppercase tracking-widest text-white whitespace-nowrap">
                        {word}
                      </span>
                      {/* Using your specific logo.png */}
                      <Image
                        src="/Frame 28.svg"
                        alt="Framework Logo"
                        // className="h-8 w-auto object-contain shrink-0"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Data specific to Framework & Flutter Kanpur
const promoWords1 = [
  "Tickets Are Live",
  "Flutter Kanpur",
  "Registrations Open",
  "Call for Speakers 🔊",
  "Framework 2026",
  "Grab Your Spot",
  "Join The Community",
];

const promoWords2 = [
  "Register Now",
  "Framework by Flutter Kanpur",
  "Call for Speakers 🔊",
  "Limited Seats Available",
  // "Build With Flutter",
  "Tickets Are Live",
  "Tech & Innovation",
];

export default Tape;
