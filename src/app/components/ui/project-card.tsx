"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  client,
  created,
  href,
}: {
  title: string;
  client: string;
  created: string;
  href: string;
}) {
  return (
    <div className="bg-neutral-700 pt-5 px-5 flex-col">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-xl">{client}</div>
      <div className="text-xl">{created}</div>
    </div>
  );
}
