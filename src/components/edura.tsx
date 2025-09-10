import Image from "next/image";
import Link from "next/link";
import Links from "@/components/ui/links";

export default function Edura() {
  const githubLink = "https://github.com/caelan-g/edura";
  const demoLink = "https://caelang.pythonanywhere.com/";
  return (
    <section className="w-screen flex flex-col px-8 lg:px-48  py-36 bg-gray-100 text-black">
      <div className="w-full flex items-baseline">
        <div className="mr-[30rem]">
          <div className="text-sm text-neutral-500">2024 - 2025</div>
          <div className="text-6xl logo">Edura</div>
          <p className="text-md font-normal text-neutral-800 ">
            Built Edura, a student-teacher studying interface app with study
            progress tracking, class management and task assignment features,
            and was nominated to present at PyCon Australia 2025.{" "}
          </p>
          <div className="mt-2">
            <Links githubLink={githubLink} demoLink={demoLink} />
          </div>
        </div>
        <div className="w-1/2 absolute right-24 flex flex-row mt-36">
          <div className="z-20 mx-auto text-center hidden lg:block relative">
            <Image
              src="/images/edura/teachertasksmobile.jpg"
              alt="Edura mobile teacher tasks"
              width={1000}
              height={1000}
              className="rounded-[1.5rem] border-gray-50 border-8 shadow-xl inset-shadow w-64 min-w-[15rem] h-[30rem] object-cover object-top relative z-20"
            />
          </div>
          <div className="relative z-10 grow right-[4rem] bottom-12">
            <Image
              src="/images/edura/dashboarddesktop.jpg"
              alt="Edura desktop dashboard"
              width={1000}
              height={1000}
              className="rounded-[.5rem] border-gray-200 border-4 shadow-xl inset-shadow min-w-[40rem] h-[30rem] object-cover object-top-left"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col w-2/5 mt-6">
        <div className="">
          <Image
            src="/images/edura/viewclass.jpg"
            alt="Island"
            width={800}
            height={400}
            className="object-cover w-full border-gray-200 border-4 shadow-xl rounded-[.5rem]"
          />
        </div>
        <div className="">
          <Image
            src="/images/edura/classesdesktop.jpg"
            alt="Island"
            width={800}
            height={400}
            className="object-cover w-full object-top border-gray-200 border-4 shadow-xl rounded-[.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
