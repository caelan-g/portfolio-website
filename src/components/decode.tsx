import Image from "next/image";
import Links from "@/components/ui/links";

export default function Decode() {
  const githubLink = "https://github.com/kevinnhou/decode";
  const demoLink = "https://github.com/kevinnhou/decode";
  return (
    <section className="w-screen h-screen flex flex-col px-8 lg:px-48  py-36 bg-gray-50 text-black">
      <div className="w-full flex items-baseline">
        <div className="mr-[30rem]">
          <div className="text-sm text-neutral-500">2025 - Present</div>
          <div className="text-6xl tracking-tighter font-semibold">Decode</div>
          <p className="text-md font-normal text-neutral-800 ">
            Currently working in a team of 3 on Decode, a scouting app for FTC
            robotics teams to track and analyze match data to improve
            performance and strategy. Will utilize Machine Learning to track and
            analyse robot performance. <br />
            Will be launched late-2025 for Barker&apos;s 11148 FTC Greybacks
            team.
          </p>
          <div className="mt-2">
            <Links githubLink={githubLink} demoLink={demoLink} />
          </div>
          <div className="text-neutral-600 text-sm mt-24">
            (work in progress...)
          </div>
        </div>
      </div>
    </section>
  );
}
