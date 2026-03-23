"use client";

import React from "react";
import Hero from "./Hero/Hero";
import ResumeSection from "./Resume/Resume";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Chatbot from "./Chatbot/Chatbot";







const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <ResumeSection/>
      <Work/>
      <Skills/>
      <Contact/>
      <Chatbot />
      
    </div>
  );
};

export default Home;