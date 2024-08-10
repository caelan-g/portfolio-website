"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-7 grid-rows-3 justify-between py-10 text-xl border-t-white border-t mx-4 md:mx-14 text-neutral-500">
        <Link
          className="transition-all hover:underline col-start-1 text-white"
          href="/"
        >
          Caelan Gray
        </Link>
        <p className="col-start-1 col-span-2 row-start-2">
          Updated 7th August 2024
        </p>
        <Link
          className="transition-all hover:underline col-start-7 text-right text-white"
          target="_blank"
          href="https://www.linkedin.com/in/caelan-gray-720965229/"
        >
          LinkedIn
        </Link>
        <p className="text-neutral-500 text-right col-start-6 col-span-2 row-start-2">
          © All Rights Reserved
        </p>
      </div>
    </>
  );
}
