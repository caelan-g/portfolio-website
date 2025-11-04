import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Keyboard() {
  const [mounted, setMounted] = useState(false);
  const [delaysActive, setDelaysActive] = useState(true);

  const tiles = [
    {
      href: "/#projects",
      src: "/images/projecttile.png",
      alt: "Project",
      classes: "w-[12.7rem] left-[16.8rem] top-[6.8rem]",
    },
    {
      href: "https://github.com/caelan-g",
      external: true,
      src: "/images/gittile.png",
      alt: "GitHub",
      classes: "w-[12.05rem] left-[20.8rem] top-[2.05rem]",
    },
    {
      href: "https://www.linkedin.com/in/caelan-gray-720965229/",
      external: true,
      src: "/images/resumetile.png",
      alt: "Resume",
      classes: "w-[12.7rem] left-[6.7rem] top-[4.9rem]",
    },
    {
      href: "/#projects",
      src: "/images/linkedtile.png",
      alt: "Linked",
      classes: "w-[12rem] left-[11.1rem] top-[.32rem]",
    },
  ];

  // random delays (ms) per tile, stable for the component lifetime
  const delaysMs = useMemo(
    () => tiles.map(() => Math.floor(Math.random() * 400)),
    []
  );

  useEffect(() => {
    // start the entrance animation shortly after mount so transitions run
    const startT = setTimeout(() => setMounted(true), 150);

    // clear the per-tile transition delays after the entrance animation finishes
    const maxDelay = Math.max(...delaysMs, 0);
    const duration = 300; // matches duration-300
    const clearT = setTimeout(
      () => setDelaysActive(false),
      50 + maxDelay + duration
    );

    return () => {
      clearTimeout(startT);
      clearTimeout(clearT);
    };
  }, [delaysMs]);

  return (
    <div>
      <div className="absolute my-auto w-[40rem] ">
        <Image
          src="/images/backplate.png"
          alt="Caelan"
          className="rounded-lg z-[0] pointer-events-none"
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
      <div className="absolute my-auto w-[40rem] transition-all">
        <Image
          src="/images/frontplate.png"
          alt="Caelan"
          className="rounded-lg absolute z-[150] pointer-events-none"
          width={1920}
          height={1080}
          priority={true}
        />

        {tiles.map((tile, i) => {
          const delay = delaysActive ? `${delaysMs[i]}ms` : "0ms";
          const translateClass = mounted ? "translate-y-0" : "translate-y-4";
          const base = `rounded-lg absolute ${translateClass} transition-transform duration-300 hover:translate-y-4 cursor-pointer ${tile.classes}`;

          // external links should open in a new tab
          if (tile.external) {
            return (
              <Link href={tile.href} key={tile.src} target="_blank">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  className={`${base} z-[${50 - i * 5}]`}
                  width={1920}
                  height={1080}
                  priority={true}
                  style={{ transitionDelay: delay }}
                />
              </Link>
            );
          }

          return (
            <Link href={tile.href} key={tile.src}>
              <Image
                src={tile.src}
                alt={tile.alt}
                className={`${base} z-[${50 - i * 5}]`}
                width={1920}
                height={1080}
                priority={true}
                style={{ transitionDelay: delay }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
