import React from "react";

export default function Quote() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-16 px-6 text-center">
      <blockquote className="italic text-lg max-w-3xl mx-auto">
        “RepoMind isn’t just a helper. It’s a partner that understands your code
        like a senior engineer would.”
      </blockquote>
      <p className="mt-4 text-sm text-white/70">— The RepoMind Team</p>
    </section>
  );
}
