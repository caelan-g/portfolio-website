"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import ProjectCard from "@/components/project-card";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  const words = ["Hey", "Salut", "Nǐ hǎo", "G'day", "Hola", "Privet"];
  const projects = [
    {
      title: "Edura",
      client: "Teacher-student study tracker",
      created: "2025",
      href: "/projects/edura",
      src: "/",
    },
    {
      title: "FurGuard",
      client: "AI Dog Door",
      created: "2024",
      href: "/projects/furguard",
      src: "/",
    },
    {
      title: "FTC Robotics",
      client: "Barker Greybacks",
      created: "2024",
      href: "/projects/robotics",
      src: "/",
    },
    {
      title: "Clipjiffy",
      client: "Short-form content creation",
      created: "2023",
      href: "/projects/clipjiffy",
      src: "/",
    },
  ];
  const experiments = [
    {
      title: "3d model",
      medium: "Blender",
      created: "2024",
      href: "/misc/",
      src: "/",
    },
    {
      title: "auto 2",
      client: "client2",
      medium: "IoT Device",
      created: "2024",
      href: "/misc/",
      src: "/",
    },
  ];

  return (
    <>
      <AuroraBackground>
        <div className="lg:col-start-1 lg:col-span-3">
          <div className="lg:text-7xl text-5xl font-bold text-white">
            <FlipWords words={words} /> <br />
            {`I'm Caelan`}
          </div>
          <div className="text-xl pt-3 text-neutral-400">
            Year 12 student based in{" "}
            <Link href="/" className="text-neutral-50">
              Sydney, Australia
            </Link>
            . <br></br> Passion for app development and UI/UX design
          </div>
        </div>
      </AuroraBackground>
      <div className="pt-36 lg:px-14 px-4">
        <div className="text-5xl py-10 lg:px-0 px-5 font-bold" id="projects">
          Projects
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                client={project.client}
                created={project.created}
                href={project.href}
                src={project.src}
              />
            );
          })}
        </div>
      </div>
      <div className="text-5xl pt-40 pb-72 px-4 lg:px-14">
        <div className="text-5xl py-10 px-5 lg:px-0 font-bold" id="fun">
          Fun
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6">
          {experiments.map((experiment) => {
            return (
              <ProjectCard /*Redo*/
                key={experiment.title}
                title={experiment.title}
                client={experiment.medium}
                created={experiment.created}
                href={experiment.href}
                src={experiment.src}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
