import Links from "@/components/ui/links";
import Image from "next/image";

export default function Islands() {
  const githubLink = "https://github.com/caelan-g/island-study";
  const demoLink = "https://islands.study";
  return (
    <section className="w-screen flex flex-col px-8 lg:px-48 py-36 bg-gray-50 text-black">
      <div className="w-full flex items-start">
        <div className="mr-[30rem]">
          <div className="text-sm text-neutral-500">2025</div>
          <div className="text-6xl font-semibold tracking-tighter animate-fade-in">
            Islands.
          </div>
          <p className="text-md font-normal text-neutral-800 ">
            Built and launched islands.study, a gamified study tracking app with
            generative island evolutions unique to each user.{" "}
          </p>
          <div className="mt-2">
            <Links githubLink={githubLink} demoLink={demoLink} />
          </div>
        </div>

        <div className="absolute right-12 w-1/2 z-10">
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
      <div className="flex gap-4 mr-[10rem] mt-6">
        <div className="flex gap-4 flex-col">
          <div className="">
            <Image
              src="/images/islands/coursesdesktop.jpg"
              alt="Island"
              width={800}
              height={400}
              className="rounded-md object-cover w-full shadow-md"
            />
          </div>
          <div className="">
            <Image
              src="/images/islands/archipelagodesktop.jpg"
              alt="Island"
              width={800}
              height={400}
              className="rounded-md object-cover w-full shadow-md"
            />
          </div>
        </div>
        <div className="mt-auto">
          <Image
            src="/images/islands/dashboarddesktop.jpg"
            alt="Island"
            width={800}
            height={400}
            className="rounded-md object-cover w-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
