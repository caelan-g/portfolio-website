import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { LinkIcon } from "@heroicons/react/16/solid";

export default function Links({
  githubLink,
  demoLink,
}: {
  githubLink: string;
  demoLink: string;
}) {
  return (
    <div className="flex gap-2">
      <Link
        href={githubLink}
        className="text-md text-neutral-500 hover:text-neutral-300 transition-colors"
        target="_blank"
      >
        <IconBrandGithub className="inline h-5 w-5 mr-1 mb-0.5" />
      </Link>
      <Link
        href={demoLink}
        className="text-md text-neutral-500 hover:text-neutral-300 transition-colors"
        target="_blank"
      >
        <LinkIcon className="inline h-5 w-5 mr-1 mb-0.5" />
      </Link>
    </div>
  );
}
