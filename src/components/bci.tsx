"use client";

import Links from "@/components/ui/links";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import DitheredObject from "@/components/canvasui/DitheredObject";
import { useEffect, useState } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export default function BCI() {
  const githubLink = "https://github.com/caelan-g/";
  const demoLink = "https://islands.study";
  const [yOffset, setYOffset] = useState(2);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setYOffset(query.matches ? -0.8 : -0.5);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-screen grid grid-cols-5 gap-8 px-8 lg:px-48  bg-white text-black lg:min-h-screen">
      <div className="w-full lg:flex-row flex-col flex items-start col-span-5 lg:col-span-2 py-12 lg:py-36">
        <div className="">
          <div className="text-sm text-neutral-500">2026</div>
          <div
            className={cn(
              `text-4xl lg:text-6xl font-bold tracking-[-.07em] animate-fade-in ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`,
            )}
          >
            External Brain-Computer Interface
          </div>
          <p className="text-md font-normal text-neutral-800 ">
            Currently working on an external brain computer interface using EEG
            sensors and an ESP32-CAM microcontroller to detect brain activity
            and feed it into a machine learning algorithm.
          </p>
          <div className="mt-2 hidden">
            <Links githubLink={githubLink} demoLink={demoLink} />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col flex-col col-span-full lg:col-span-3 gap-4 w-full">
        <DitheredObject
          src="/images/bci/humanhead.glb"
          className="w-md lg:w-full aspect-square lg:aspect-[4/3] absolute lg:min-h-screen mt-auto"
          method={"halftone"}
          roughness={0.2}
          scale={4}
          fov={20}
          dither={true}
          grayscale={true}
          floatSpeed={0}
          autoRotate={true}
          autoRotateSpeed={-0.5}
          floatIntensity={0.5}
          rotationIntensity={0}
          cameraDistance={10}
          invert={false}
          yOffset={yOffset}
        />
      </div>
    </section>
  );
}
