import React from "react";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="bg-gray-100 text-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Pitch Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Executive Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Executive Presentation
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-md shadow-lg"
                src="https://www.youtube.com/embed/4UW7_C9exwY"
                title="RepoMind Executive Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Elevator Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-2">Elevator Pitch</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-md shadow-lg"
                src="https://www.youtube.com/embed/yUjqyVwnqjU"
                title="RepoMind Elevator Pitch"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Third Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-2">
              Live Demo Walkthrough
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-md shadow-lg"
                src="https://www.youtube.com/embed/ZBlW7DN695Q"
                title="RepoMind Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
