import Links from "@/components/ui/links";
import Image from "next/image";

export default function Islands() {
  const githubLink = "https://github.com/caelan-g/island-study";
  const demoLink = "https://islands.study";
  return (
    <section className="w-screen grid grid-cols-5 gap-8 px-8 lg:px-48 py-36 bg-gray-50 text-black min-h-screen">
      <div className="w-full lg:flex-row flex-col flex items-start col-span-5 lg:col-span-3">
        <div className="">
          <div className="text-sm text-neutral-500">2025</div>
          <div className="text-4xl lg:text-6xl font-semibold tracking-tighter animate-fade-in">
            Islands.
          </div>
          <p className="text-md font-normal text-neutral-800 ">
            Built and launched islands.study, a gamified study tracking app with
            generative island evolutions unique to each user. Students track
            studying, create courses, and recieve weekly study reports.
          </p>
          <div className="mt-2">
            <Links githubLink={githubLink} demoLink={demoLink} />
          </div>
        </div>
        <div className="lg:absolute left-36 w-full lg:w-1/2 z-10">
          <Image
            src="/images/islands/islandexmp.png"
            alt="Island"
            width={1024}
            height={512}
            className="pixelated floating pointer-events-none select-none w-full"
            unoptimized
            draggable={false}
          />
        </div>
      </div>
      <div className="flex lg:flex-col flex-col col-span-full lg:col-span-2 gap-4 mt-6 w-full">
        <div className="flex gap-4 flex-col">
          <Image
            src="/images/islands/dashboarddesktop.jpg"
            alt="Island"
            width={1920}
            height={1080}
            className="rounded-md object-cover w-full shadow-md"
          />
          <Image
            src="/images/islands/archipelagodesktop.jpg"
            alt="Island"
            width={1920}
            height={1080}
            className="rounded-md object-cover w-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
