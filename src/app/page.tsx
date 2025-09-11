"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import React from "react";
import Islands from "@/components/islands";
import Edura from "@/components/edura";
import FurGuard from "@/components/furguard";
import Decode from "@/components/decode";
import { FlipWords } from "@/components/ui/flip-words";
import BentoCard from "@/components/ui/bentocard";
import Link from "next/link";
import Keyboard from "@/components/ui/keyboard";
import { experiments } from "@/data/projects";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import WIP from "@/components/ui/wip";

export default function Home() {
  const words = ["Hey,", "Salut,", "Nǐ hǎo,", "G'day,", "Hola,", "Privet,"];

  return (
    <>
      <AuroraBackground className="absolute top-0">
        <div className="flex w-screen h-screen"></div>
      </AuroraBackground>
      <section className="relative gap-4 lg:w-full h-screen lg:grid lg:grid-cols-5 px-10 pt-48 text-left flex flex-col">
        <div className="lg:col-start-2 lg:col-span-2">
          <div className="lg:text-7xl text-5xl font-semibold tracking-tighter text-white ">
            <FlipWords words={words} /> <br />
            {`I'm Caelan`}
          </div>
          <div className="text-xl pt-3 text-neutral-400">
            Year 12 student based in{" "}
            <Link href="/" className="text-neutral-50">
              Sydney, Australia
            </Link>
            . <br></br> Passion for app development, UI/UX design and surfing.
          </div>
        </div>
        {/* <div className="lg:col-start-4 lg:col-span-2 lg:block hidden">
          <Keyboard />
        </div> */}
        <div className="absolute bottom-20 text-xs lg:w-full flex justify-center text-neutral-600 ">
          <ArrowDownIcon className="h-4 w-4 mr-1 animate-bounce" />
          Scroll for projects!
        </div>
      </section>

      <section id="projects" className="w-screen overflow-x-hidden">
        <Islands />
        <Edura />
        <FurGuard />
        <Decode />
      </section>
      <div className="relative w-full overflow-clip px-24 py-48" id="fun">
        <WIP />
        {/*         
        <div className="text-5xl tracking-tight text-white pb-8 font-semibold">
          Fun
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {experiments.map((experiment) => (
            <BentoCard
              key={experiment.title}
              title={experiment.title}
              rowSpan={experiment.rowSpan}
              colSpan={experiment.colSpan}
              href={experiment.href}
              src={experiment.src}
            />
          ))}
        </div>
         */}
      </div>
    </>
  );
}
