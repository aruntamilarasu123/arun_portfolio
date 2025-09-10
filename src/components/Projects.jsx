import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full MERN app with buyer & seller roles, cart, wishlist, Razorpay integration, reviews & filtering.",
      link: "https://e-commerce-frontend-1oqq.onrender.com/",
      github: "https://github.com/aruntamilarasu123/E-Commerce-Frontend"
    },
        {
      title: "E-Commerce Backend",
      description: "Complete Backend for E-Commerce.",
      link: "https://e-commerce-backend-getc.onrender.com/",
      github: "https://github.com/aruntamilarasu123/E-Commerce-Backend"
    },
    {
      title: "Invoice Generator",
      description: "React app to create, edit & print invoices with real-time calculations.",
      link: "https://invoice-builder-v1.netlify.app/",
      github: "https://github.com/aruntamilarasu123/Invoice-Builder.git"
    },
    {
      title: "Kanban Board",
      description: "Task management app with drag-and-drop workflow using React.",
      link: "https://kanban-board-app-0.netlify.app/",
      github: "https://github.com/aruntamilarasu123/kanban-board-app.git"
    },
    // {
    //   title: "User Profile Management",
    //   description: "Role-based profiles with Cloudinary image upload and update features.",
    //   github: "https://github.com/aruntamilarasu123"
    // }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="space-x-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-500 font-medium hover:underline">
                    Live
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
