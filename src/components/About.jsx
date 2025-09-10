import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/Arun_T_Resume.pdf"; 

export default function About() {
  const floatingIcons = [
    { icon: <FaReact className="text-sky-400" />, top: "10%", left: "5%", size: 30 },
    { icon: <FaNodeJs className="text-green-500" />, top: "25%", left: "85%", size: 35 },
    { icon: <FaJs className="text-yellow-400" />, top: "70%", left: "15%", size: 30 },
    { icon: <FaDatabase className="text-gray-500" />, top: "60%", left: "75%", size: 32 },
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, 10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute opacity-20"
          style={{ top: item.top, left: item.left, fontSize: item.size }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-indigo-500 dark:border-indigo-400"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
            />
          </motion.div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              MERN Stack Developer
            </span>{" "}
            certified by{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              GUVI (IIT-M Pravartak)
            </span>
            . I specialize in building scalable, responsive, and user-friendly web applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
            With a background in{" "}
            <span className="font-semibold">B.A. Tamil Literature</span>, I
            transitioned into tech, gaining hands-on experience. Highlights include{" "}
            <span className="font-semibold">problem-solving</span>,{" "}
            <span className="font-semibold">adaptability</span>, and a{" "}
            <span className="font-semibold">quick learning mindset</span>.
          </p>

          <motion.a
            href={resumePDF}
            download="Arun_Tamilarasu_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
