"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";
import MenuDropdown from "@/components/menu-dropdown";

export default function NavBar() {
  const navLinks = [
    { name: "Projects", href: "/#projects" },
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
      <div className="fixed md:relative flex flex-row w-full justify-between py-5 px-10 md:px-14 text-md z-20 backdrop-blur-sm bg-neutral-900/30 lg:bg-transparent lg:backdrop-blur-none">
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
            <div className="w-4 h-4 flex flex-col justify-center items-center">
              <span
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                  hamburger ? "rotate-45 translate-y-0.5" : "mb-[3.5px]"
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
                  hamburger ? "opacity-0" : "mb-[3.5px]"
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-white transition-all duration-300 ${
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
