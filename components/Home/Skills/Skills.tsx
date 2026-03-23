"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", logo: "/Images/javascript logo.png" },
  { name: "Python", logo: "/Images/python logo.png" },
  { name: "Java", logo: "/Images/java logo.png" },
  { name: "HTML", logo: "/Images/html1.png" },
  { name: "CSS", logo: "/Images/css logo.jpg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      {/* Sliding Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate for infinite loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[100px]"
            >
            

<Image
  src={skill.logo}
  alt={skill.name}
  width={56}
  height={56}
/>
              <p className="text-xs mt-2 text-gray-400">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}