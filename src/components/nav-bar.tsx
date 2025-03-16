"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";
import MenuDropdown from "@/components/menu-dropdown";

export default function NavBar() {
  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Misc", href: "/#fun" },
    { name: "Info", href: "/info" },
    { name: "Resume", href: "/resume" },
  ];

  const [hamburger, setHamburger] = useState(false);

  function hamburgerClick() {
    setHamburger(!hamburger);
  }

  return (
    <>
      <div className="fixed md:absolute flex flex-row w-full justify-between py-5 px-10 md:px-14 text-xl z-20">
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
        <div className="flex md:hidden gap-4 md:gap-16">
          <Bars3Icon className="size-6" onClick={hamburgerClick} />
          {hamburger && <MenuDropdown isOpen={hamburger} />}
        </div>
      </div>
    </>
  );
}
