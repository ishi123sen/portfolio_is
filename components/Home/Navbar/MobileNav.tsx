"use client";

import { NavLinks } from "@/components/Home/Skills/constants/constants";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

// ✅ FIX for react-icons type issue
const CloseIcon = CgClose as unknown as React.FC<{
  className?: string;
  onClick?: () => void;
}>;

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black opacity-70 z-[100001]"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 text-white flex flex-col justify-center space-y-8 transform ${navOpen} transition-transform duration-500 z-[100002]`}
      >
        {/* Close Button */}
        <CloseIcon
          onClick={closeNav}
          className="absolute top-6 right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />

        {/* Nav Links */}
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-xl sm:text-[28px] ml-12 border-b border-white pb-1 w-fit hover:text-gray-300 transition">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MobileNav;