import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5 grid grid-cols-6 grid-rows-5">
      <div className="col-start-2 col-span-4 row-start-1">
        <div className="text-5xl font-bold">Caelan's Blog Portfolio</div>
        <div className="text-2xl font-bold">Life's lit</div>
      </div>
      <div className="col-start-2 col-span-4 row-start-3 flex justify-between gap-5">
        <Link
          href="/resume"
          className="bg-green-400 rounded-lg p-4 w-full hover:bg-green-200 text-xl"
        >
          Resume
        </Link>
        <Link
          href="/resume"
          className="bg-green-400 rounded-lg p-4 w-full hover:bg-green-200 text-xl"
        >
          Blog
        </Link>
      </div>
    </main>
  );
}
