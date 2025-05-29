import React from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Fast Project Onboarding",
    description:
      "New developers can understand codebases and start contributing within minutes using RepoMind’s contextual guidance.",
  },
  {
    title: "Effortless Refactoring",
    description:
      "Spot redundant code and restructure legacy systems with AI that understands your code’s logic and dependencies.",
  },
  {
    title: "Spec-to-Code in Seconds",
    description:
      "Drop in business requirements, and RepoMind turns them into working code, directly integrated into your architecture.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-gray-100 text-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          How Developers Use RepoMind
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
