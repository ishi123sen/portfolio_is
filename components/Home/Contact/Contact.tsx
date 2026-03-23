"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

type FormType = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Correct TypeScript type
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Correct TypeScript type
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! 🚀");
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-purple-500/20 space-y-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-purple-500 outline-none"
          required
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-6 mt-10"
      >
        <a href="#" className="hover:text-purple-400">
          LinkedIn
        </a>
        <a href="#" className="hover:text-purple-400">
          GitHub
        </a>
        <a href="#" className="hover:text-purple-400">
          Email
        </a>
      </motion.div>
    </section>
  );
}