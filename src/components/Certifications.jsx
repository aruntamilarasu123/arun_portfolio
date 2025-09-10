import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      issuer: "Government of Tamil Nadu Department of Technical Education"
    }
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCertifications = certifications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSwipe = (event, info) => {
    const swipeThreshold = 100;
    if (info.offset.x < -swipeThreshold) {
      goToPage(currentPage + 1);
    } else if (info.offset.x > swipeThreshold) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <section
      id="Certifications"
      className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-grab active:cursor-grabbing"
          >
            {currentCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
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
          </motion.div>
        </AnimatePresence>

        {/* Pagination Buttons like Projects */}
        <div className="flex justify-center items-center mt-10 space-x-3">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers only on md+ */}
          <div className="hidden md:flex space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Mobile hint only */}
        <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 block md:hidden">
          Swipe left/right to change pages
        </p>
      </div>
    </section>
  );
}
