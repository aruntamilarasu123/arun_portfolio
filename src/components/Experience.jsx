import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "GUVI – MERN Stack Developer Training",
      period: "Training Period: 2025",
      description:
        "Completed a hands-on MERN Stack Developer course. Learned React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Tailwind CSS, Git & GitHub, REST APIs, and JWT Authentication. Received a course completion certificate upon successful completion.",
    },
    {
      title: "Velammal Bodhi Campus – Attur | Cashier",
      period: "Dec 2022 – Aug 2024",
      description:
        "Handled daily fee collection, daybook, admissions, and salary processing (EPF/ESI). Coordinated budgets and ensured compliance in financial operations.",
    },
    {
      title: "Dodla Dairy Limited – Thalaivasal | Store Assistant",
      period: "May 2021 – Feb 2022",
      description:
        "Maintained stock records, staff attendance, logistics, and weighing machine operations.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-10"
        >
          Experience & Training
        </motion.h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg mb-6 hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">{exp.period}</span>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
