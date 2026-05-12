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
import Image from "next/image";
import { BentoPortfolio } from "@/components/ui/bento";
import { StepBlock } from "@/components/ui/step-block";

export default function Home() {
  const words = ["Hey,", "Salut,", "Nǐ hǎo,", "G'day,", "Hola,", "Privet,"];

  return (
    <>
      <AuroraBackground className="absolute hidden top-0">
        <div className="flex w-screen h-screen"></div>
      </AuroraBackground>
      <section className="relative gap-4 lg:w-full min-h-screen lg:grid lg:grid-cols-5 px-10 md:pt-48 pt-24 text-left flex flex-col">
        <div className="lg:col-start-2 lg:col-span-2">
          <div className="lg:text-7xl text-5xl font-semibold tracking-tighter text-white flex flex-col">
            <StepBlock delay={0.5}>
              <FlipWords words={words} />
            </StepBlock>
            <StepBlock delay={1.5}>{`I'm Caelan`}</StepBlock>
          </div>

          <div className="text-xl pt-3 text-neutral-400 flex flex-col">
            <StepBlock delay={2.5}>
              Incoming freshman at Harvard from{" "}
              <Link href="/" className="text-neutral-50">
                Sydney, Australia
              </Link>
              . <br /> Passion for building out side projects, UI/UX design, and
              surfing.
            </StepBlock>
          </div>
        </div>

        <div className="lg:col-start-3 lg:ml-48 w-screen scale-[.6] lg:right-auto right-[7rem] lg:scale-100 relative lg:absolute lg:w-[40rem] lg:mt-48 mt-12">
          <Keyboard />
        </div>

        {/* <div className="lg:col-start-4 lg:col-span-2 lg:block hidden">
          <Keyboard />
        </div> */}

        <div className="absolute bottom-5 lg:bottom-20 text-xs lg:w-full flex justify-center text-neutral-600 ">
          <StepBlock delay={2} className="flex">
            <ArrowDownIcon className="h-4 w-4 mr-1 animate-bounce" />
            Scroll for projects!
          </StepBlock>
        </div>
      </section>

      <section id="projects" className="w-screen">
        <Islands />
        <Edura />
        <FurGuard />
      </section>
      <section className="relative w-full overflow-clip" id="fun">
        <WIP />
      </section>
    </>
  );
}
