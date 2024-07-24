"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import Image from "next/image";
import { FlipWords } from "./components/ui/flip-words";

export default function Home() {
  const words = ["Hey,", "Salut", "Nǐ hǎo", "G'day,", "Hola", "Privet"];

  return (
    <>
      <div>
        <div className="pt-12">
          <div className="text-6xl font-bold leading-normal">
            <FlipWords words={words} /> <br />
            I'm Caelan
          </div>
          <div className="text-xl pt-3 text-neutral-400 w-3/6">
            Year 11 student based in Sydney, Australia. I enjoy learning and
            creating with the newest tech and software.
          </div>
          <div id="work" className="text-5xl pt-36 pb-72">
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
              </div>{" "}
              {/*could map these?*/}
              <div className="bento-container col-span-1"></div>
              <div className="bento-container row-span-2 col-span-1"></div>
              <div className="bento-container row-span-2 col-span-2"></div>
              <div className="bento-container row-span-2 col-span-3"></div>
              <div className="bento-container row-span-1 col-span-2"></div>
              <div className="bento-container row-span-1 col-span-1"></div>
              <div className="bento-container row-span-1 col-span-1"></div>
              <div className="bento-container row-span-1 col-span-3"></div>
              <div className="bento-container row-span-1 col-span-2"></div>
            </div>
          </div>
          <div id="fun" className="text-5xl pt-40 pb-72">
            Experiments here
          </div>
        </div>
      </div>
    </>
  );
}
