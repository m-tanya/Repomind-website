import React from "react";
import demoVideo from "./demo.mp4";

export default function DemoVideo() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
      <h2 className="text-3xl font-semibold mb-6">Watch RepoMind in Action</h2>
      <div
        className="relative w-full max-w-sm" // smaller width
        style={{ paddingTop: "56.25%" }} // maintains 16:9 aspect ratio
      >
        <video
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
          src={demoVideo}
          autoPlay
          loop
          muted
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
