import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDatabase, FaUser } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNetlify, SiPostman } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

export default function Skills() {
  // Inside your categories array, just update the icon with colors
  const categories = [
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-sky-500" />, hoverText: "Component-based UI, State Management" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, hoverText: "Server-side JavaScript, Backend APIs" },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" />, hoverText: "REST API Routing & Middleware" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, hoverText: "CRUD Operations, Schema Design" },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, hoverText: "Semantic markup, Forms" },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, hoverText: "Responsive Design, Flex/Grid" },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-500" />, hoverText: "Modern JS features, DOM manipulation" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="text-gray-800" />, hoverText: "Version control, Branching & Merging" },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500" />, hoverText: "Deployment & Hosting" },
        { name: "Postman", icon: <SiPostman className="text-orange-600" />, hoverText: "API testing & Debugging" },
        { name: "REST APIs", icon: <AiOutlineApi className="text-indigo-500" />, hoverText: "Data transfer & CRUD operations" },
        { name: "VS Code", icon: <FaDatabase className="text-purple-500" />, hoverText: "Code editing & debugging" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL Queries", icon: <FaDatabase className="text-red-500" />, hoverText: "Data retrieval & manipulation" },
        { name: "MongoDB CRUD", icon: <SiMongodb className="text-green-500" />, hoverText: "Insert, Update, Delete, Read" },
        { name: "Schema Design", icon: <FaDatabase className="text-purple-500" />, hoverText: "Database structure & modeling" },
      ],
    },
    {
      title: "Typing Skills",
      skills: [
        { name: "English Typing", icon: <FaUser className="text-teal-500" />, hoverText: "Accurate & fast typing" },
        { name: "Tamil Typing", icon: <FaUser className="text-teal-500" />, hoverText: "Accurate & fast typing" },
      ],
    },
    {
      title: "Soft Skills & Reporting",
      skills: [
        { name: "Problem-Solving", icon: <FaUser className="text-pink-500" />, hoverText: "Analyze & solve issues" },
        { name: "Teamwork", icon: <FaUser className="text-pink-500" />, hoverText: "Collaboration & communication" },
        { name: "Communication", icon: <FaUser className="text-pink-500" />, hoverText: "Clear & effective expression" },
        { name: "Time Management", icon: <FaUser className="text-pink-500" />, hoverText: "Prioritize & meet deadlines" },
        { name: "Quick Learner", icon: <FaUser className="text-pink-500" />, hoverText: "Adapt to new tech fast" },
        { name: "Adaptable", icon: <FaUser className="text-pink-500" />, hoverText: "Flexible & resourceful" },
      ],
    },
  ];


  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        {/* Category Titles */}
        <div className="flex flex-wrap justify-center mb-10 gap-4">
          {categories.map((category, idx) => (
            <motion.button
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 ${activeCategory === idx ? "bg-indigo-600 dark:bg-indigo-400" : "bg-indigo-400 dark:bg-indigo-600"
                }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 p-5 shadow-md rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition relative cursor-pointer group"
              >
                {/* Icon */}
                <motion.div className="text-4xl mb-2 text-gray-800 dark:text-gray-200" whileHover={{ scale: 1.3 }}>
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <span className="font-medium text-gray-800 dark:text-gray-200 text-center text-sm sm:text-base">
                  {skill.name}
                </span>

                {/* Tooltip on hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full mb-2 px-3 py-1 rounded bg-indigo-600 text-white text-xs text-center shadow-lg whitespace-nowrap z-10"
                  >
                    {skill.hoverText}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
