"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { NavLinks } from "@/components/Home/Skills/constants/constants";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

// ✅ FIX all icons
const CodeIcon = FaCode as unknown as React.FC<{ className?: string }>;
const DownloadIcon = BiDownload as unknown as React.FC<{ className?: string }>;
const MenuIcon = HiBars3BottomRight as unknown as React.FC<{
  className?: string;
  onClick?: () => void;
}>;

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-[10000] transition-all duration-300
      ${navBg ? "bg-[#0f142ed9] shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">

        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <CodeIcon className="w-5 h-5 text-white" />
          </div>

          <h1 className="text-xl font-bold text-white">Ishika</h1>
        </div>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white text-[15px] font-medium hover:text-cyan-400 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Download Button */}
        <button className="px-6 py-2.5 text-sm rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center gap-2">
          <DownloadIcon className="w-5 h-5" />
          <span>Download CV</span>
        </button>

        {/* Burger Menu */}
        <MenuIcon
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />

      </div>
    </div>
  );
};

export default Nav;