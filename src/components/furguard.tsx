import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function FurGuard() {
  const [mainOpen, setMainOpen] = useState(false);
  const handleMainClick = () => {
    setMainOpen(!mainOpen);
  };
  const [secondOpen, setSecondOpen] = useState(false);
  const handleSecondClick = () => {
    setSecondOpen(!secondOpen);
  };

  return (
    <section className="w-screen min-h-screen flex flex-col px-8 lg:px-48 py-36 bg-white text-black">
      <div className="w-full grid grid-cols-5 gap-8">
        <div className="lg:mr-[30rem] col-span-full lg:col-span-3 w-full">
          <div className="text-sm text-neutral-500">2023 - 2024</div>
          <div className="text-4xl lg:text-6xl tracking-tighter font-semibold furguardlogo mb-1">
            furguard
          </div>
          <p className="text-md font-normal text-neutral-800 ">
            Built furguard, a machine-learning powered mechatronic system,
            trained on my dogs&apos; faces to recognize and grant access via an
            electromagnet locking/unlocking system.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start mt-12">
            <div className="flex flex-col transition-all gap-12">
              <Image
                src="/images/furguard/mainsensor.png"
                alt="FurGuard Image"
                width={1920}
                height={1080}
                className="object-contain flex w-[35rem] hover:-translate-y-4 transition-all cursor-pointer"
                onClick={handleMainClick}
              />

              <Image
                src="/images/furguard/inards.png"
                alt="FurGuard Image"
                width={1920}
                height={1080}
                className={cn(
                  "object-contain lg:flex hidden  w-[35rem] hover:translate-y-4 transition-all cursor-pointer",
                  mainOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-36"
                )}
                onClick={handleMainClick}
              />
            </div>
            <div className="hidden lg:flex mx-auto lg:w-auto w-1/2 flex-col gap-12 relative">
              <Image
                src="/images/furguard/secondarysensor.png"
                alt="FurGuard Secondary Sensor Front View"
                width={1920}
                height={1080}
                className="object-contain flex w-[15rem] lg:top-12 relative hover:-translate-y-4 transition-all cursor-pointer"
                onClick={handleSecondClick}
              />

              <Image
                src="/images/furguard/secondarysensorside.png"
                alt="FurGuard Secondary Sensor Side View"
                width={1920}
                height={1080}
                className={cn(
                  "object-contain relative left-0 top-12 lg:flex hidden  w-[12rem] hover:translate-y-4 transition-all cursor-pointer",
                  secondOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-36"
                )}
                onClick={handleSecondClick}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 w-full flex gap-8 items-start">
          <div className="w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="mt-6 w-full rounded-lg max-h-[40rem] object-cover"
            >
              <source
                src="/images/furguard/furguarddemo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
