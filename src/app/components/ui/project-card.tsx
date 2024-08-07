"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  client,
  created,
  href,
  src,
}: {
  title: string;
  client: string;
  created: string;
  href: string;
  src: string;
}) {
  return (
    <Link
      href={href}
      className="bg-neutral-700 py-10 px-10 flex flex-col w-full h-[80vh] justify-end transition-all hover:-translate-y-1 bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="text-4xl">{title}</div>
      <div className="flex justify-between">
        <div className="text-2xl">{client}</div>
        <div className="text-2xl">{created}</div>
      </div>
    </Link>
  );
}
