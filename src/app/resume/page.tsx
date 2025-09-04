import Image from "next/image";
import ExperienceSection from "@/components/ui/experience-section";
import { experienceType, experiences, activities } from "@/data/experiences";
import Link from "next/link";

export default function Resume() {
  return (
    <main className="lg:px-48 px-4 pt-20">
      <div className="bg-white grid grid-cols-5 lg:gap-0 text-black mb-12">
        <div className="col-span-1 bg-gray-800 lg:pb-32 flex flex-col gap-4 px-4 py-16">
          <Image
            src="/images/caelangray.png"
            alt="Caelan Gray"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="col-start-1 lg:col-start-2 col-span-5 lg:col-span-4 pb-32 lg:pr-16 lg:pl-10 px-2 py-4 lg:py-16">
          <div className="text-5xl tracking-tighter">Caelan Gray</div>
          <div className="text-2xl font-light">Student at Barker College</div>
          <div className="space-y-12 py-4">
            <section id="experience">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-semibold">Experience</h1>
                <Link href="#activities">
                  <button className="text-xs opacity-50 underline">
                    Skip to Activities
                  </button>
                </Link>
              </div>
              {experiences.map((item: experienceType, index) => (
                <ExperienceSection key={index} item={item} />
              ))}
            </section>
            <section id="activities">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-semibold">
                  Co-Curricular Activites
                </h1>
                <Link href="#references">
                  <button className="text-xs opacity-50 underline">
                    Skip to References
                  </button>
                </Link>
              </div>
              {activities.map((item: experienceType, index) => (
                <ExperienceSection key={index} item={item} />
              ))}
            </section>
            <section id="references">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-semibold">References</h1>
                <Link href="/resume">
                  <button className="text-xs opacity-50 underline">
                    Back to top
                  </button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
