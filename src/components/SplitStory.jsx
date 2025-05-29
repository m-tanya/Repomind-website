import React from "react";
import { motion } from "framer-motion";

export default function SplitStory() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#111827] to-[#1f2937] text-white px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase text-blue-400 tracking-wide mb-2">
            The Vision
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            From Developer Overload to Developer Flow
          </h2>
          <p className="text-white/80 mb-4">
            In a world where engineering time is scarce and complexity is
            rising, developers are expected to do more with less.
          </p>
          <p className="text-white/80 mb-6">
            RepoMind changes the game by deeply understanding your codebase and
            delivering agentic, chat-first workflows that speed up delivery,
            reduce context switching, and drive productivity.
          </p>
          <p className="text-sm text-blue-300 font-medium tracking-wide">
            Onboard. Refactor. Build. In Minutes.
          </p>
        </motion.div>

        {/* Visual / Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/demo-screenshot.jpeg"
            alt="RepoMind Logo"
            className="rounded-lg shadow-xl w-full border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
