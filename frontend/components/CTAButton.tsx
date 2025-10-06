"use client";

import { motion } from "framer-motion";

export default function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-medium shadow-lg shadow-fuchsia-600/20"
    >
      {children}
    </motion.button>
  );
}
