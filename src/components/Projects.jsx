import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full MERN app with buyer & seller roles, cart, wishlist, Razorpay integration, reviews & filtering.",
      link: "https://e-commerce-frontend-1oqq.onrender.com/",
      github: "https://github.com/aruntamilarasu123/E-Commerce-Frontend",
    },
    {
      title: "E-Commerce Backend",
      description: "Complete Backend for E-Commerce.",
      link: "https://e-commerce-backend-getc.onrender.com/",
      github: "https://github.com/aruntamilarasu123/E-Commerce-Backend",
    },
    {
      title: "Invoice Generator",
      description:
        "React app to create, edit & print invoices with real-time calculations.",
      link: "https://invoice-builder-v1.netlify.app/",
      github: "https://github.com/aruntamilarasu123/Invoice-Builder.git",
    },
    {
      title: "Kanban Board",
      description:
        "Task management app with drag-and-drop workflow using React.",
      link: "https://kanban-board-app-0.netlify.app/",
      github: "https://github.com/aruntamilarasu123/kanban-board-app.git",
    },
    {
      title: "Recipes CRUD API",
      description:
        "A robust RESTful API for managing recipes, built with Node.js, Express.js, MongoDB, and Mongoose, following the MVC architecture for clean, scalable code.",
      link: "https://tn-recipe-api.onrender.com/",
      github: "https://github.com/aruntamilarasu123/TN_RecipeApp",
    },
    {
      title: "Income Expense Tracker (Node.js)",
      description:
        "A simple Node.js-based financial tracking application that helps users manage their income and expenses. It uses Express.js for handling routes, MongoDB (via Mongoose) for storing transactions, and follows a modular structure for scalability.",
      github: "https://github.com/aruntamilarasu123/IncomeExpenseTrackerNode",
    },
    {
      title: "Movie Search Application",
      description:
        "Movie Search Application is a modern, React-based project powered by Vite. It lets users search for movies, browse paginated results, view detailed movie info, and manage a list of favorites—all within a responsive UI enhanced by Tailwind CSS.",
      link: "https://m-ovie-search.netlify.app/",
      github: "https://github.com/aruntamilarasu123/Movie-Search-App",
    },
    {
      title: "Shopping Cart Application",
      description:
        "A React-based shopping cart application that enables users to browse products, add and remove items from the cart, adjust quantities, and benefit from a built-in 10% discount on the total price.",
      link: "https://shopping-cart-app0.netlify.app/",
      github: "https://github.com/aruntamilarasu123/Shoppin-Cart-App",
    },
    {
      title: "Shopping Cart",
      description:
        "A simple shopping cart web application built with React.js. This project demonstrates how to manage products, add/remove items to a cart, update quantities, and calculate totals in real time.",
      link: "https://newshoppingcart.netlify.app/",
      github: "https://github.com/aruntamilarasu123/Shopping-Cart",
    },
  ];

  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSwipe = (event, info) => {
    const swipeThreshold = 100; // pixels
    if (info.offset.x < -swipeThreshold) goToPage(currentPage + 1); // swipe left
    else if (info.offset.x > swipeThreshold) goToPage(currentPage - 1); // swipe right
  };

  return (
    <section
      id="projects"
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
          Projects
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
            className="grid md:grid-cols-2 gap-8 cursor-grab active:cursor-grabbing"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-500 font-medium hover:underline"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800 dark:text-gray-200 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Buttons */}
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
