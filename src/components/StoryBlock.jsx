import React from "react";

export default function StoryBlock() {
  return (
    <section className="bg-white text-black px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FOR IMMEDIATE RELEASE</h2>
      <p className="mb-4">
        A team of forward-thinking developers has launched RepoMind, an
        AI-powered coding assistant designed to change the way software
        engineers interact with their code. With an intelligent blend of deep
        code understanding and contextual generation, RepoMind is poised to
        become a game-changer for developers drowning in complexity and
        time-consuming tasks.
      </p>
      <p className="mb-4">
        At a time when developers are expected to do more with less, RepoMind
        introduces a new paradigm: agentic coding. By deeply understanding a
        codebase, RepoMind allows developers to go from idea to implementation
        with unprecedented speed and confidence.
      </p>
      <p className="mb-4">
        Whether you're onboarding a new project, refactoring legacy code, or
        generating features from business requirements, RepoMind cuts hours,
        sometimes days, from the development cycle. Developers can simply chat
        with RepoMind inside Visual Studio Code, upload business requirement
        files, and watch as the assistant analyzes, suggests, and even applies
        changes directly into the codebase.
      </p>
      <p className="text-blue-800 font-semibold">🔍 Available Now</p>
      <p className="mt-2">
        RepoMind is available in public beta for Visual Studio Code.
      </p>
      <p className="mt-2">📩 media@repomind.dev</p>
      <p>🌐 www.repomind.dev</p>
    </section>
  );
}
