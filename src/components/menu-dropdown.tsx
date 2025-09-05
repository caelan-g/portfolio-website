"use client";
import React from "react";
import Link from "next/link";

export default function MenuDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Misc", href: "/#fun" },
    { name: "Info", href: "/info" },
    { name: "Resume", href: "/resume" },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-out z-20`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`${
          isOpen
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-full opacity-0"
        } fixed top-0 right-0 h-screen w-full bg-neutral-900 backdrop-blur-xl border-l border-neutral-700 transition-all duration-300 ease-out z-20 shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="flex-1 p-12">
            <nav className="space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block text-lg text-neutral-300 hover:text-white transition-all duration-200 hover:translate-x-2 py-3 px-4 rounded-lg hover:bg-neutral-800/50 group`}
                  style={{
                    animationDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <span className="flex items-center justify-between">
                    {link.name}
                    <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-neutral-700">
            <p className="text-sm text-neutral-500">© 2024 Caelan Gray</p>
          </div>
        </div>
      </div>
    </>
  );
}
