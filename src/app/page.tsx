"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./components/ui/flip-words";
import { AuroraBackground } from "@/app/components/ui/aurora-background";

export default function Home() {
  const words = ["Hey", "Salut", "Nǐ hǎo", "G'day", "Hola", "Privet"];
  const projects = [];

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
              I'm Caelan
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
      <div className="pt-12">
        <div className="text-6xl font-bold leading-normal"></div>

        <div id="work" className="text-5xl pt-36 pb-72">
          {/* 
            <div
              id="custom-bento"
              className="grid grid-cols-6 grid-rows-4 w-ful h-[100vh] gap-3"
            >
              <div className="bento-container col-span-2">
                <Image
                  src="/images/CJlogocompany.png"
                  alt="Clipjiffy logo"
                  width="100"
                  height="100"
                />
              </div>
              <div className="bento-container col-span-1"></div>
              <div className="bento-container row-span-2 col-span-1"></div>
              <div className="bento-container row-span-2 col-span-2"></div>
              <div className="bento-container row-span-2 col-span-3"></div>
              <div className="bento-container row-span-1 col-span-2"></div>
              <div className="bento-container row-span-1 col-span-1"></div>
              <div className="bento-container row-span-1 col-span-1"></div>
              <div className="bento-container row-span-1 col-span-3"></div>
              <div className="bento-container row-span-1 col-span-2"></div>
            </div>*/}
        </div>
        <div id="fun" className="text-5xl pt-40 pb-72">
          Experiments here
        </div>
      </div>
    </>
  );
}
