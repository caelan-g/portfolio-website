"use client";
import React from "react";
import Link from "next/link";

export default function ProjectCard({
  title,
  client,
  created,
}: {
  title: string[];
  client: string[];
  created: string[];
}) {
  return (
    <div className="">
      <div className="text-2xl">{title}</div>
    </div>
  );
}
