import { experienceType } from "@/data/experiences";

export default function ExperienceSection({ item }: { item: experienceType }) {
  return (
    <div className="flex flex-col pb-4 border-t pt-4">
      <div className="text-lg text-neutral-600 font-light">{item.date}</div>
      <div className="text-xl font-semibold">{item.title}</div>
      <ul className="mt-2 space-y-1">
        {item.content.map((point, index) => (
          <li key={index} className="list-disc list-inside ml-4 flex">
            <span className="flex-shrink-0">•</span>
            <span className="ml-2">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
