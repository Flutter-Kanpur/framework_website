'use client';

import React from 'react';

const CallForSpeakers = () => {
  return (
    <section
      id="CallForSpeakers"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #4167F2, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <span
            className="text-[10px] sm:text-xs tracking-[0.3em] text-[#4167F2] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            Share Your Knowledge
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-6xl text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            Call for Speakers 🎤
          </h2>

          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #4167F2, transparent)" }}
          />

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Have something exciting to share? Inspire the next generation of developers at Framework.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-zinc-700 to-transparent hover:from-blue-500 transition-all duration-500">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl h-full backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                Why Speak?
              </h4>

              <ul className="space-y-4">
                {[
                  "Build your personal brand",
                  "Share knowledge with developers",
                  "Network with tech community",
                  "Get featured as a speaker"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span className="mr-3 text-blue-500">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-zinc-700 to-transparent hover:from-blue-500 transition-all duration-500">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl h-full backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                Who Can Apply?
              </h4>

              <ul className="space-y-4">
                {[
                  "Developers (All levels)",
                  "Open source contributors",
                  "Designers & Tech Enthusiasts",
                  "Anyone with a unique idea 💡"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span className="mr-3 text-blue-500">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
                      <a
              href=" https://docs.google.com/forms/d/e/1FAIpQLSfDtrYkTZOBHuDNzwseNA4yBGP9O9LlHalp1lJtReXhABeMWA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 font-bold text-white bg-blue-600 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(65,103,242,0.5)]"
              style={{
                background: "linear-gradient(135deg, #4167F2, #6B8BF5)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Apply to Speak
            </a>
        </div>

      </div>
    </section>
  );
};

export default CallForSpeakers;