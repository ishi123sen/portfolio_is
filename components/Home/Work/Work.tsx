"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with Next.js and Tailwind CSS.",
    tech: "Next.js • Tailwind • Framer Motion",
    image: "/Images/portfolio.png",
  },
  {
    title: "E-Commerce clothing website",
    desc: "Full-stack shopping platform with cart and payment integration.",
    tech: "HTML • JS • Node.js • MongoDB",
    image: "/Images/ecommerce.png",
  },
  {
    title: "AI Diabetes Prediction System",
    desc: "Predicts diabetes using machine learning.",
    tech: "Python Flask • ML Model(Scikit-learn (Logistic Regression)) • HTML + CSS + JS",
    image: "/Images/diabetes.png",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-16"
      >
        My Work
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-zinc-900 border border-purple-500/20 rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <p className="text-white text-sm">View Project</p>
            </motion.div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
              <p className="text-purple-400 text-xs">{project.tech}</p>

              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="mt-4 h-[2px] bg-purple-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}