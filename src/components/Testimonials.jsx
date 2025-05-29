import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "RepoMind felt like pairing with a senior dev who never gets tired.",
    name: "Jay Borse",
    role: "Frontend Engineer",
  },
  {
    quote:
      "We cut down feature dev time by 40% using RepoMind’s chat+code workflow.",
    name: "Gaurav Kondhare",
    role: "Tech Lead",
  },
  {
    quote: "It’s not just code generation. It knows what fits *my* system.",
    name: "Gaurav Verma",
    role: "Full Stack Developer",
  },
  {
    quote:
      "The onboarding experience was so smooth, even our interns shipped code on day 1.",
    name: "Ketan Sarda",
    role: "Engineering Manager",
  },
  {
    quote: "RepoMind slashed our bug rate by half during our last sprint.",
    name: "Sakshi Dhavalshankh",
    role: "QA Lead",
  },
  {
    quote:
      "Using RepoMind is like having a built-in system architect on standby.",
    name: "Samruddhi Sangale",
    role: "Staff Engineer",
  },
  {
    quote: "It adapts to your codebase like magic. Worth every second.",
    name: "Vedant Kayande",
    role: "Software Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-white">
        What Developers Are Saying
      </h2>
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex gap-6 px-2 sm:px-6 md:px-12 min-w-fit">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-left shadow-md min-w-[300px] max-w-sm flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <p className="italic mb-4 text-white/90">“{item.quote}”</p>
              <p className="text-sm font-semibold text-blue-300">{item.name}</p>
              <p className="text-xs text-white/60">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
