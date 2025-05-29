import Hero from "./components/Hero";
import DemoVideo from "./components/DemoVideo";
import Features from "./components/Features";
import Quote from "./components/Quote";
import StoryBlock from "./components/StoryBlock";
import Footer from "./components/Footer";
import SplitStory from "./components/SplitStory";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import VideoShowcase from "./components/VideoShowcase";

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Hero />
      <DemoVideo /> {/* ← No props, cleaner and uses updated smaller size */}
      <Features />
      <Quote />
      <SplitStory />
      <UseCases />
      <VideoShowcase />
      <Testimonials />
      <FinalCTA />
      {/* Press Release Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
            For Immediate Release
          </p>
          <h2 className="text-3xl font-bold mb-4">
            RepoMind: The AI Coding Assistant Revolutionizing How Developers
            Build Software
          </h2>
          <p className="text-md font-medium text-gray-800 mb-6">
            Irvine, CA — May 12, 2025
          </p>
          <div className="space-y-5 text-gray-800 leading-relaxed">
            <p>
              RepoMind is an AI-powered coding assistant that transforms the way
              developers work. It goes far beyond autocomplete by understanding
              code deeply and generating context-aware solutions.
            </p>
            <p className="italic font-semibold text-blue-800">
              RepoMind doesn’t just assist — it thinks.
            </p>
            <p>
              Whether you're onboarding a new engineer, refactoring legacy
              systems, or building new features from business specs, RepoMind
              shortens development cycles and accelerates team velocity.
            </p>
            <p>
              Built directly into Visual Studio Code, RepoMind lets you go from
              idea to implementation faster than ever.
            </p>
            <div className="pt-6 border-t border-gray-300">
              <p className="text-blue-900 font-semibold">Available Now</p>
              <p>Public beta for Visual Studio Code</p>
              <p className="mt-1">media@repomind.dev</p>
              <p>www.repomind.dev</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
