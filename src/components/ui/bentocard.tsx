import Link from "next/link";
interface BentoCardProps {
  title: string;
  rowSpan?: number;
  colSpan?: number;
  href: string;
  src: string;
}

export default function BentoCard({
  title,
  rowSpan,
  colSpan,
  href,
  src,
}: BentoCardProps) {
  return (
    <Link
      className="flex flex-col gap-4 rounded-lg bg-neutral-800 border border-neutral-700 p-8 min-h-48 hover:scale-105 transition-all"
      style={{
        gridRow: `span ${rowSpan || 1}`,
        gridColumn: `span ${colSpan || 1}`,
      }}
      href={href}
    >
      <div className="text-xl font-bold">{title}</div>
    </Link>
  );
}
