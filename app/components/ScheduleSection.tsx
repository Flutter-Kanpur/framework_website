"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const days = [
  { label: "Day 1", date: "March 15, 2026" },
  { label: "Day 2", date: "March 16, 2026" },
];

const schedule: Record<string, { time: string; title: string; speaker: string; type: string }[]> = {
  "Day 1": [
    { time: "09:00", title: "Opening Ceremony & Keynote", speaker: "Ravi Sharma", type: "Keynote" },
    { time: "10:30", title: "Building Scalable Architecture", speaker: "Arjun Mehta", type: "Talk" },
    { time: "12:00", title: "Lunch & Networking", speaker: "", type: "Break" },
    { time: "13:00", title: "Hackathon Kickoff — Team Formation", speaker: "", type: "Hackathon" },
    { time: "14:30", title: "Design Systems & Material 3", speaker: "Ananya Joshi", type: "Workshop" },
    { time: "16:00", title: "State Management Deep Dive", speaker: "Priya Patel", type: "Talk" },
    { time: "17:30", title: "Day 1 Wrap & Evening Mixer", speaker: "", type: "Social" },
  ],
  "Day 2": [
    { time: "09:00", title: "AI/ML Integration Hands-on", speaker: "Sneha Gupta", type: "Workshop" },
    { time: "10:30", title: "Cross-Platform & Desktop Dev", speaker: "Vikram Singh", type: "Talk" },
    { time: "12:00", title: "Lunch Break", speaker: "", type: "Break" },
    { time: "13:00", title: "Hackathon — Final Sprint", speaker: "", type: "Hackathon" },
    { time: "15:00", title: "Project Demos & Judging", speaker: "", type: "Hackathon" },
    { time: "16:30", title: "Panel: Future of Tech in India", speaker: "All Speakers", type: "Panel" },
    { time: "17:30", title: "Awards Ceremony & Closing", speaker: "", type: "Keynote" },
  ],
};

const typeConfig: Record<string, { color: string; bg: string }> = {
  Keynote: { color: "#4167F2", bg: "rgba(65,103,242,0.1)" },
  Talk: { color: "#6B8BF5", bg: "rgba(107,139,245,0.1)" },
  Workshop: { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  Hackathon: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  Break: { color: "#6b7280", bg: "rgba(107,114,128,0.1)" },
  Social: { color: "#a855f7", bg: "rgba(168,85,247,0.1)" },
  Panel: { color: "#ec4899", bg: "rgba(236,72,153,0.1)" },
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("Day 1");
  const containerRef = useRef<HTMLDivElement>(null);
  const items = schedule[activeDay];

  // 1. Scroll Progress for the drawing animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
  });

  // 2. Build the S-Curve Path dynamically based on item count
  const ITEM_SPACING = 300; // Vertical distance between items
  const totalHeight = items.length * ITEM_SPACING;
  const width = 600; // SVG coordinate width
  
  let pathData = `M ${width / 2} 0`; // Start middle-top
  items.forEach((_, i) => {
    const yStart = i * ITEM_SPACING;
    const yEnd = (i + 1) * ITEM_SPACING;
    const isEven = i % 2 === 0;
    // C control1X control1Y, control2X control2Y, endX endY
    const cp1X = isEven ? width : 0;
    const cp2X = isEven ? width : 0;
    pathData += ` C ${cp1X} ${yStart + ITEM_SPACING / 2}, ${cp2X} ${yStart + ITEM_SPACING / 2}, ${width / 2} ${yEnd}`;
  });

  return (
    <section id="schedule" className="py-20 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: "var(--font-michroma)" }}>
            SCHEDULE
          </h2>
          
          {/* Day Tabs */}
          <div className="flex justify-center gap-4">
            {days.map((day) => (
              <button
                key={day.label}
                onClick={() => setActiveDay(day.label)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeDay === day.label 
                  ? "bg-[#4167F2] text-white shadow-[0_0_25px_rgba(65,103,242,0.4)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {day.label} <span className="block text-[10px] opacity-60 font-medium">{day.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div ref={containerRef} className="relative" style={{ height: totalHeight + 100 }}>
          
          {/* SVG Journey Path */}
          <svg
            viewBox={`0 0 ${width} ${totalHeight}`}
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          >
            <path d={pathData} stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.path
              d={pathData}
              stroke="#4167F2"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Schedule Items */}
          <div className="relative z-10">
            {items.map((item, i) => (
              <TimelineCard 
                key={`${activeDay}-${i}`} 
                item={item} 
                index={i} 
                spacing={ITEM_SPACING}
              />
            ))}
          </div>
          
          {/* End Card (Destination Reached) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm">
             <motion.div 
               style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }}
               className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[32px] text-center"
             >
                <h3 className="text-xl font-bold mb-2">Destination Reached</h3>
                <p className="text-gray-500 text-sm mb-6">Day {activeDay === "Day 1" ? '1' : '2'} itinerary completed.</p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-[#4167F2] text-white px-6 py-2 rounded-xl text-sm font-bold"
                >
                  Back to Top
                </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, index, spacing }: { item: any; index: number; spacing: number }) {
  const isRight = index % 2 === 0;
  const cfg = typeConfig[item.type] || typeConfig.Talk;

  return (
    <div 
      className={`flex w-full absolute left-0 ${isRight ? "justify-end pr-4 md:pr-10" : "justify-start pl-4 md:pl-10"}`}
      style={{ top: index * spacing + spacing / 2 }}
    >
      <motion.div 
        initial={{ opacity: 0, x: isRight ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-sm md:max-w-md bg-white/[0.03] border border-white/5 backdrop-blur-sm p-6 rounded-2xl group hover:border-[#4167F2]/30 transition-all duration-500"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[#4167F2] text-xs font-bold tracking-tighter" style={{ fontFamily: "var(--font-michroma)" }}>
            {item.time}
          </span>
          <span 
            className="text-[9px] uppercase font-black px-2 py-0.5 rounded-md border" 
            style={{ color: cfg.color, borderColor: `${cfg.color}30`, backgroundColor: cfg.bg }}
          >
            {item.type}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#4167F2] transition-colors">
          {item.title}
        </h3>
        
        {item.speaker && (
          <p className="text-sm text-gray-400 font-medium italic">with {item.speaker}</p>
        )}

        {/* The Animated Node Point on the line */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${isRight ? "-left-4" : "-right-4"} flex items-center justify-center`}>
           <div className="w-3 h-3 rounded-full bg-[#4167F2] shadow-[0_0_15px_#4167F2]" />
        </div>
      </motion.div>
    </div>
  );
}