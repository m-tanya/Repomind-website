import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "True Code Understanding",
    desc: "RepoMind comprehends code structure, dependencies, and relationships. It is beyond simple autocompletion.",
  },
  {
    title: "Zero-Setup Intelligence",
    desc: "Drop RepoMind into any project and start getting value instantly, without lengthy setup.",
  },
  {
    title: "Contextual Code Generation",
    desc: "RepoMind generates code tailored to your architecture and logic, not just templates.",
  },
  {
    title: "Integrated AI Agent",
    desc: "It doesn’t just suggest code. It applies changes intelligently into your codebase.",
  },
];

export default function Features() {
  return (
    <section className="bg-white text-black px-6 py-20 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What Makes RepoMind Different?
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-800">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
