import { motion } from "framer-motion";
import FeedbackModal from "./FeedbackModal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <motion.h1
        className="text-5xl md:text-6xl font-bold leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-400">Repo</span>
        <span className="text-white">Mind</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Build faster. Think less. Code more.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <FeedbackModal />
      </motion.div>
    </section>
  );
}
