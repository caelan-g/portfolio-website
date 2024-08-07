"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { FlipWords } from "./components/ui/flip-words";
import ProjectCard from "@/app/components/ui/project-card";
import { AuroraBackground } from "@/app/components/ui/aurora-background";

export default function Home() {
  const words = ["Hey", "Salut", "Nǐ hǎo", "G'day", "Hola", "Privet"];
  const projects = [
    {
      title: "project1",
      client: "client1",
      created: "2024",
      href: "/projects/clipjiffy",
      src: "/",
    },
    {
      title: "project2",
      client: "client2",
      created: "2023",
      href: "/projects/",
      src: "/",
    },
  ];
  const experiments = [
    {
      title: "3d model",
      medium: "blender",
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
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative gap-4 justify-center px-4 text-left grid grid-cols-5"
        >
          <div className="col-start-1 col-span-3">
            <div className="text-3xl md:text-7xl font-bold text-white">
              <FlipWords words={words} /> <br />
              {`I'm Caelan`}
            </div>
            <div className="text-xl pt-3 text-neutral-400">
              Year 11 student based in{" "}
              <Link href="/" className="text-neutral-50">
                Sydney, Australia
              </Link>
              . <br></br> I enjoy learning and creating with the newest tech and
              software.
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <div className="pt-36 px-14">
        <div className="text-5xl py-10" id="work">
          Projects
        </div>
        <div className="grid grid-cols-2 gap-6">
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
      <div className="text-5xl pt-40 pb-72 px-14">
        <div className="text-5xl py-10" id="fun">
          Fun
        </div>
        <div className="grid grid-cols-2 gap-6">
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
