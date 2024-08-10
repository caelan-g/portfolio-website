"use client";
import React from "react";
import Link from "next/link";

export default function MenuDropdown({ isOpen }: { isOpen: boolean }) {
  const navLinks = [
    { name: "Projects", href: "/#work" },
    { name: "Misc", href: "/#fun" },
    { name: "Info", href: "/info" },
    { name: "Resume", href: "/resume" },
  ];
  return (
    <>
      <div
        className={`${
          isOpen
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-20 opacity-0"
        } transition-all ease-out origin-top-right bg-neutral-600 h-[50vh] absolute w-full left-0 top-0 -z-10 py-16 px-10`}
      >
        <div className="flex flex-col gap-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.href} className="hover:underline text-4xl">
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
