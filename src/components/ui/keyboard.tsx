import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const TILES = [
  {
    href: "https://www.linkedin.com/in/caelan-gray-720965229/",
    external: true,
    src: "/images/linkedtile.png",
    alt: "Linked",
    classes: "w-[12rem] left-[11.1rem] top-[.32rem]",
  },
  {
    href: "https://github.com/caelan-g",
    external: true,
    src: "/images/gittile.png",
    alt: "GitHub",
    classes: "w-[12.05rem] left-[20.8rem] top-[2.05rem]",
  },
  {
    href: "/resume",
    external: false,
    src: "/images/resumetile.png",
    alt: "Resume",
    classes: "w-[12.7rem] left-[6.7rem] top-[4.9rem]",
  },
  {
    href: "/#projects",
    external: false,
    src: "/images/projecttile.png",
    alt: "Project",
    classes: "w-[12.7rem] left-[16.8rem] top-[6.8rem]",
  },
] as const;

const TOTAL_IMAGES = TILES.length + 2; // tiles + backplate + frontplate

export default function Keyboard() {
  const [allLoaded, setAllLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [delaysActive, setDelaysActive] = useState(true);
  const loadedCount = useRef(0);

  const onImageLoad = useCallback(() => {
    loadedCount.current += 1;
    if (loadedCount.current >= TOTAL_IMAGES) setAllLoaded(true);
  }, []);

  const delaysMs = useMemo(
    () => TILES.map(() => Math.floor(Math.random() * 400)),
    [],
  );

  useEffect(() => {
    if (!allLoaded) return;
    const startT = setTimeout(() => setMounted(true), 150);

    const maxDelay = Math.max(...delaysMs, 0);
    const duration = 300;
    const clearT = setTimeout(
      () => setDelaysActive(false),
      50 + maxDelay + duration,
    );

    return () => {
      clearTimeout(startT);
      clearTimeout(clearT);
    };
  }, [allLoaded, delaysMs]);

  return (
    <div className={allLoaded ? "opacity-100" : "opacity-0"}>
      <div className="absolute my-auto w-[40rem]">
        <Image
          src="/images/backplate.png"
          alt="Caelan"
          className="rounded-lg z-[0] pointer-events-none"
          width={1920}
          height={1080}
          priority
          onLoad={onImageLoad}
        />
      </div>
      <div className="absolute my-auto w-[40rem] transition-all">
        <Image
          src="/images/frontplate.png"
          alt="Caelan"
          className="rounded-lg absolute z-[150] pointer-events-none"
          width={1920}
          height={1080}
          priority
          onLoad={onImageLoad}
        />

        {TILES.map((tile, i) => {
          const delay = delaysActive ? `${delaysMs[i]}ms` : "0ms";
          const translateClass = mounted ? "translate-y-0" : "translate-y-4";
          const base = `rounded-lg absolute ${translateClass} transition-transform duration-300 hover:translate-y-4 cursor-pointer ${tile.classes}`;

          return (
            <Link
              href={tile.href}
              key={tile.src}
              {...(tile.external ? { target: "_blank" } : {})}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                className={`${base} z-[${50 - i * 5}]`}
                width={1920}
                height={1080}
                priority
                style={{ transitionDelay: delay }}
                onLoad={onImageLoad}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
