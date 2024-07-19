import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="p-5 grid grid-cols-6 grid-rows-5">
      <div className="col-start-2 col-span-4">
        <div className="flex justify-between">
          <div className="text-5xl font-bold">Caelan's Resume</div>
          <Link
            href="/"
            className="text-neutral-500 hover:text-neutral-400 p-4 rounded-md text-lg transition-all"
          >
            <ArrowLeftIcon /> Back
          </Link>
        </div>
        <div className="text-2xl font-bold">Resume details</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          autem quos quisquam! Nam, cum. Possimus, inventore sint? Similique,
          optio ea molestiae, exercitationem dolorem possimus veniam, fugiat
          tempora nesciunt dignissimos quos officia pariatur maxime esse
          quisquam adipisci. Quae ex qui, officia minus natus sint tempore
          ipsam, consequuntur aliquid eveniet iste, in quaerat! Vitae, totam?
          Eveniet blanditiis repellendus labore fuga, unde quae voluptas
          corporis in quo similique quia nesciunt dignissimos sunt eaque harum
          facere architecto nihil natus, exercitationem corrupti et. Quo,
          reiciendis cum! Placeat cupiditate mollitia exercitationem. Ab,
          excepturi quaerat veniam dolores non velit fuga maxime, sapiente
          quibusdam aut necessitatibus repellendus autem dolorem quod earum quia
          esse officia aspernatur impedit animi quae eaque at! Cupiditate alias
          velit voluptas libero blanditiis eveniet minus facilis quidem, fugiat
          vel, eligendi tenetur dolor nulla veniam excepturi. Voluptates,
          dolores et provident impedit, id totam sit neque fugiat maiores
          suscipit saepe! Earum, perspiciatis eaque? Impedit quis maiores
          deserunt, assumenda incidunt debitis ab magnam iste pariatur
          cupiditate aliquid recusandae dolor ad sequi quas ipsum cum possimus.
          Odit illum officiis modi suscipit laborum pariatur animi ratione porro
          dolor perspiciatis cumque, debitis, at itaque iusto, sit ipsam veniam
          voluptates saepe quidem rerum eaque similique consectetur. Illo optio
          nisi sequi quaerat in quos dolorum, voluptatibus libero facilis
          repellat recusandae modi ipsum nostrum numquam aliquam dolorem eius,
          rerum tempore magnam possimus earum fuga, quo beatae. Ad, molestiae
          veniam vel est, magni totam voluptatum cupiditate sint, unde assumenda
          tempore! Necessitatibus eius ea, similique mollitia quo tempora quia
          enim. Possimus unde natus magni aperiam eveniet sint minima dolores
          earum iure provident ea nobis, consequuntur reiciendis illo rem ut
          debitis, consectetur doloribus assumenda, dicta odio maiores
          perferendis? Magnam nam laudantium facere quas maiores itaque, alias
          nesciunt hic, animi amet ab debitis? Voluptates molestias nemo
          possimus ducimus placeat rem, architecto pariatur tenetur repudiandae
          perferendis temporibus aspernatur. Dolor obcaecati error asperiores
          fuga laboriosam deleniti aperiam mollitia explicabo porro corrupti
          omnis inventore, itaque cum, perspiciatis beatae labore ducimus ullam
          reiciendis recusandae cupiditate accusamus sunt. Aperiam.
        </p>
      </div>
    </main>
  );
}
