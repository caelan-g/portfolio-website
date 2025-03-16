import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="p-5 px-48 pt-24">
      <div className="flex-col flex gap-4">
        <div className="text-5xl font-bold">{`Edura`}</div>
        <p>
          Built in 2025, Edura was built with Flask, hosted on pythonanywhere.
          Edura is a comprehensive study tracker web app for students, allowing
          teachers to create classes and monitor students study progress.
        </p>
        <Link
          className="transition-all hover:underline col-start-7 font-bold"
          target="_blank"
          href="https://caelang.pythonanywhere.com/"
        >
          Check it out
        </Link>
      </div>
    </main>
  );
}
