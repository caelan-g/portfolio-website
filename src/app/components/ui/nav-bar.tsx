"use client";
import React from "react";
import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    { name: "Projects", href: "/#work" },
    { name: "Misc", href: "/#fun" },
    { name: "Info", href: "/info" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <>
      <div className="flex flex-row justify-between py-5 px-14 text-xl">
        <Link className="transition-all hover:underline" href="/">
          Caelan Gray
        </Link>
        <div className="flex gap-16">
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
      </div>
    </>
  );
}
