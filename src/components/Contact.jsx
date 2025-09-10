import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "aruntamil087@gmail.com",
      link: "mailto:your-email@example.com",
      icon: <FaEnvelope className="h-6 w-6 text-indigo-500" />
    },
    {
      label: "GitHub",
      value: "github.com/aruntamilarasu123",
      link: "https://github.com/aruntamilarasu123",
      icon: <FaGithub className="h-6 w-6 text-gray-800 dark:text-gray-200" />
    },
    // {
    //   label: "Portfolio",
    //   value: "aruntamil.netlify.app",
    //   link: "https://aruntamil.netlify.app/",
    //   icon: <FaGlobe className="h-6 w-6 text-green-500" />
    // },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aruntamilarasu",
      link: "https://linkedin.com",
      icon: <FaLinkedin className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10"
        >
          Contact Me
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {contacts.map((c, index) => (
            <motion.a
              key={index}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl">{c.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{c.label}</h3>
                <p className="text-gray-500 dark:text-gray-300">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
