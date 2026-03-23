"use client";

import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// ✅ FIX: force icon to behave as valid React component
const ArrowIcon = FaArrowRight as unknown as React.FC<{ className?: string }>;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Mouse tracking
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.closest("button, a")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="h-screen text-white flex items-center justify-center overflow-hidden relative cursor-none">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />

        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-20 top-40 left-1/2"
          animate={{ x: [0, -150, 150, 0], y: [0, 100, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* CURSOR */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-3 h-3 bg-purple-500 rounded-full z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      />

      {/* CONTENT */}
      <div className="z-10 grid md:grid-cols-2 items-center gap-10 px-6">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I&apos;m <span className="text-purple-500">Ishika</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-xl md:text-2xl text-gray-300"
          >
            <Typewriter
              words={["AI Developer", "Frontend Developer", "Tech Enthusiast"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 max-w-xl text-gray-400"
          >
            I build modern, interactive and AI-powered web applications with
            beautiful UI and smooth user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-8 flex gap-4 justify-center md:justify-start"
          >
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition flex items-center gap-2">
              <span>See my Work</span>
              <ArrowIcon className="text-white" />
            </button>

            <button className="px-6 py-3 border border-purple-500 hover:bg-purple-600 rounded-xl transition">
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-30 rounded-full"></div>

            <Image
              src="/Images/ishi.jpeg"
              alt="profile"
              width={300}
              height={300}
              className="rounded-full border-4 border-purple-500 object-cover relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;