"use client";

import { motion } from "framer-motion";


const educationData = [
  {
    title: "Bachelor of Technology in Computer Science",
    place: "Sage University",
    year: "2024 - 2028",
    desc: "Focused on web development, AI, and software engineering."
  },
  {
    title: "Senior Secondary (12th)",
    place: "GB Convent School",
    year: "2012- 2024",
    desc: "Science stream with Computer Science."
  }
];

const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Company",
    duration: "2024",
    desc: "Built responsive UI using React and Tailwind. Improved UX performance by 30%."
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "2023 - Present",
    desc: "Developed modern portfolio and business websites for clients."
  }
];

export default function Resume() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Resume
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">
            Education
          </h3>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-900 border border-purple-500/30 rounded-2xl p-5"
              >
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.place}</p>
                <p className="text-sm text-purple-400">{item.year}</p>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">
            Experience
          </h3>

          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-900 border border-purple-500/30 rounded-2xl p-5"
              >
                <h4 className="text-lg font-bold">{item.role}</h4>
                <p className="text-sm text-gray-400">{item.company}</p>
                <p className="text-sm text-purple-400">{item.duration}</p>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}