import React, { useState } from "react";

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Give Feedback
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 max-w-2xl w-full shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4 text-black">
              We’d Love Your Feedback
            </h2>
            <iframe
              src="https://forms.gle/92zHgBxxdGwaSSnZ6"
              width="100%"
              height="500"
              frameBorder="0"
              title="Feedback Form"
              className="rounded"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}
