import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaReact, FaNodeJs, FaJs } from "react-icons/fa";

export default function Hero() {
  // Floating icons
  const floatingIcons = [
    { icon: <FaReact className="text-sky-400" />, top: "15%", left: "5%", size: 40 },
    { icon: <FaNodeJs className="text-green-500" />, top: "25%", left: "85%", size: 35 },
    { icon: <FaJs className="text-yellow-400" />, top: "70%", left: "15%", size: 38 },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 text-center overflow-hidden">
      
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute opacity-20"
          style={{ top: item.top, left: item.left, fontSize: item.size }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Hi, I’m Arun 👋
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
          MERN Stack Developer | Fresher with Hands-on Projects
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          View My Work
          <FaArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
