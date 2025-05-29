import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-blue-700 py-20 px-6 text-center text-white">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Ready to Code with RepoMind?
      </motion.h2>
      <p className="mb-8 text-white/90 max-w-xl mx-auto">
        Join developers transforming their workflows with agentic, AI-native
        tools. Get access to the RepoMind beta today.
      </p>
      <a
        href="https://www.repomind.dev"
        className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-full hover:bg-gray-100 transition"
      >
        Join the Beta
      </a>
    </section>
  );
}
