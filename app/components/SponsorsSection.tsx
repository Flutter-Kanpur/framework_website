"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* Categorized Sponsor Data */
const sponsorTiers = [
  {
    tierName: "Platinum Sponsors",
    // Swapped gridClass for layoutClass to control max width
    layoutClass: "max-w-4xl",
    // Added specific widths so cards don't stretch awkwardly in flex
    cardClass: "w-full sm:w-[380px] py-10 md:py-14 min-h-[160px] text-xl md:text-3xl",
    hoverEffect: "hover:border-[#E5E4E2] hover:shadow-[0_0_30px_rgba(229,228,226,0.15)] text-gray-400 hover:text-[#E5E4E2]",
    sponsors: [
      { name: "Google", logo: "/logo/google.svg", width: 48, height: 48 },
      { name: "Flutter", logo: "/logo/flutter.svg", width: 48, height: 48 },
    ],
  },
  {
    tierName: "Gold Sponsors",
    layoutClass: "max-w-5xl",
    cardClass: "w-full sm:w-[320px] py-8 md:py-10 min-h-[120px] text-lg md:text-2xl",
    hoverEffect: "hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] text-gray-500 hover:text-[#FFD700]",
    sponsors: [
      { name: "Shorebird", logo: "/logo/shorebird.svg", width: 40, height: 40 },
    ],
  },
  {
    tierName: "Community Partners",
    layoutClass: "max-w-6xl",
    // 2-up on mobile, fixed width on desktop
    cardClass: "w-[calc(50%-0.5rem)] sm:w-[240px] py-6 md:py-8 min-h-[100px] text-base md:text-xl",
    hoverEffect: "hover:border-[#C0C0C0] hover:shadow-[0_0_20px_rgba(192,192,192,0.15)] text-gray-500 hover:text-[#C0C0C0]",
    sponsors: [
      { name: "AI Jalander", logo: "/logo/jalandhar.png", width: 32, height: 32 },
      // { name: "Zomato", logo: "/logos/zomato.svg", width: 32, height: 32 },
      // { name: "Swiggy", logo: "/logos/swiggy.svg", width: 32, height: 32 },
      // { name: "Jio", logo: "/logos/jio.svg", width: 32, height: 32 },
    ],
  },
];

/* Marquee Sponsors for lower tier/community partners */
// const communityPartners = [
//   { name: "Flutter", logo: "/logos/flutter.svg", width: 28, height: 28 },
//   // { name: "GitHub", logo: "/logos/github.svg", width: 28, height: 28 },
//   // { name: "Notion", logo: "/logos/notion.svg", width: 28, height: 28 },
//   // { name: "Figma", logo: "/logos/figma.svg" , width: 28, height: 28 },
//   // { name: "Paytm", logo: "/logos/paytm.svg", width: 28, height: 28 },
//   // { name: "CRED", logo: "/logos/cred.svg", width: 28, height: 28 },
// ];

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center w-full"
        >
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            Our Partners
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            SPONSORS
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #4167F2, transparent)",
            }}
          />
        </motion.div>

        {/* ═══ TIERED SPONSORS (FLEX LAYOUT) ═══ */}
        <div className="flex flex-col items-center justify-center gap-16 md:gap-24 mb-20 md:mb-32 w-full">
          {sponsorTiers.map((tier, index) => (
            <AnimatedSection key={index} className="flex flex-col items-center justify-center w-full">
              <h3
                className="text-center text-[10px] sm:text-xs tracking-[0.2em] text-[#4167F2] uppercase mb-8 md:mb-12"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {tier.tierName}
              </h3>
              
              {/* Changed from Grid to Flexbox for absolute centering */}
              <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full mx-auto ${tier.layoutClass}`}>
                {tier.sponsors.map((sponsor, i) => (
                  <div
                    key={i}
                    className={`
                      border border-white/5 bg-white/[0.02] rounded-xl 
                      flex items-center justify-center
                      transition-all duration-500 group cursor-pointer
                      ${tier.cardClass} ${tier.hoverEffect}
                    `}
                  >
                    {/* Flex row for Image + Text */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 w-full">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        width={sponsor.width}
                        height={sponsor.height}
                        className="object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                      <span
                        className="font-bold tracking-wider transition-colors duration-300"
                        style={{ fontFamily: "var(--font-michroma)" }}
                      >
                        {sponsor.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
        </div>
        </section>
  );
}

//         <AnimatedSection className="w-full">
//           <h3
//             className="text-center text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 uppercase mb-8"
//             style={{ fontFamily: "var(--font-michroma)" }}
//           >
//             Community Partners
//           </h3>
//           <div className="relative overflow-hidden w-full">
//             {/* Fade edges */}
//             <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

//             {/* Marquee track */}
//             <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
//               {[...communityPartners, ...communityPartners].map((sponsor, i) => (
//                 <div
//                   key={i}
//                   className="mx-4 sm:mx-6 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center min-w-[160px] sm:min-w-[200px] hover:border-[#4167F2]/40 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_15px_rgba(65,103,242,0.15)]"
//                 >
//                   {/* Flex row for Marquee Image + Text */}
//                   <div className="flex items-center justify-center gap-3">
//                     <Image
//                       src={sponsor.logo}
//                       alt={`${sponsor.name} Logo`}
//                       width={sponsor.width}
//                       height={sponsor.height}
//                       className="object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
//                     />
//                     <span
//                       className="text-sm sm:text-base font-bold text-gray-500 group-hover:text-[#4167F2] transition-colors duration-300 tracking-wider"
//                       style={{ fontFamily: "var(--font-michroma)" }}
//                     >
//                       {sponsor.name}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>

//       </div>
//     </section>
//   );
// }