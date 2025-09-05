"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";
import MenuDropdown from "@/components/menu-dropdown";

export default function NavBar() {
  const navLinks = [
    { name: "Projects", href: "/#timeline" },
    { name: "Fun", href: "/#fun" },
    { name: "Info", href: "/info" },
    { name: "Resume", href: "/resume" },
  ];

  const [hamburger, setHamburger] = useState(false);

  function hamburgerClick() {
    setHamburger(!hamburger);
  }

  return (
    <>
      <div className="fixed md:relative flex flex-row w-full justify-between py-5 px-10 md:px-14 text-md z-20 backdrop-blur-sm bg-neutral-900/30">
        <Link className="transition-all hover:underline" href="/">
          Caelan Gray
        </Link>
        <div className="hidden md:flex gap-4 md:gap-16">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                /*className="transition-all underline-offset-4 no-underline hover:underline-offset-2 hover:underline"*/
                className="transition-all hover:underline"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex md:hidden gap-4 ml-auto text-right md:gap-16">
          <button onClick={hamburgerClick} className="relative z-30">
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  hamburger ? "rotate-45 translate-y-0.5" : "mb-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  hamburger ? "opacity-0" : "mb-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  hamburger ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              ></span>
            </div>
          </button>
          <MenuDropdown
            isOpen={hamburger}
            onClose={() => setHamburger(false)}
          />
        </div>
      </div>
    </>
  );
}
