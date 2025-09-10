import React from "react";
import { motion } from "framer-motion";

export default function Certification() {
  const certifications = [
    {
      title: "Full Stack Development Course with AI Tools",
      issuer: "IIT-M Pravartak / GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/h6Z50MHkK4wm3C4a"
    },
    {
      title: "JS Basics",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/SPgex6rJXrPhmoFz"
    },
    {
      title: "HTML, CSS, Tailwind CSS",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/8u8eVpvGzUvDiivL"
    },
    {
      title: "Advanced JS",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/qQGVnLyFkzg6FJ8E"
    },
    {
      title: "ReactJS",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/tqpY15EiwD5fdOBF"
    },
    {
      title: "Database",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/BWSV8Y8Drzghc0aH"
    },
    {
      title: "Node.js",
      issuer: "GUVI Geek Network Private Limited",
      link: "https://v2.zenclass.in/certificateDownload/pjqE593T8URqJ5vX"
    },
    {
      title: "Typewriting English & Tamil",
      issuer: "Government of Tamil Nadu Department of Technical Education",
      // link: "#"
    }
  ];

  return (
    <section id="Certifications" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-10"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 font-medium hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
