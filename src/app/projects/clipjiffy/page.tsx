import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="p-5 grid grid-cols-6 grid-rows-5">
      <div className="col-start-2 col-span-4">
        <div className="flex justify-between">
          <div className="text-5xl font-bold">{`Caelan's Project 1`}</div>
          <Link
            href="/"
            className="text-neutral-500 hover:text-neutral-400 p-4 rounded-md text-lg transition-all"
          >
            <ArrowLeftIcon /> Back
          </Link>
        </div>
        <div className="text-2xl font-bold">Clipjiffy</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          voluptate doloribus vel deleniti dignissimos esse molestiae, nesciunt
          quas? Voluptatum, rem. Omnis facilis, quidem culpa est iusto nemo,
          nisi facere in exercitationem quo, vel officiis qui totam? Corporis
          atque cum vitae asperiores placeat pariatur saepe, eius voluptatem vel
          dicta officia commodi tempora quasi voluptas, autem consequatur enim
          laboriosam omnis veniam, quidem fuga mollitia explicabo tenetur minus.
          In explicabo ad voluptatem recusandae quidem, eius veritatis minus,
          itaque eveniet excepturi delectus inventore cum esse! Velit iusto a
          nulla rem ipsum error, modi itaque veritatis omnis voluptates
          quibusdam exercitationem, similique at est suscipit totam!
        </p>
      </div>
    </main>
  );
}
