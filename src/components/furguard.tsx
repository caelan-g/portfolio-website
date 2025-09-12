import Image from "next/image";

export default function FurGuard() {
  return (
    <section className="w-screen h-screen flex flex-col px-8 lg:px-48 py-36 bg-white text-black">
      <div className="w-full flex items-baseline">
        <div className="lg:mr-[30rem]">
          <div className="text-sm text-neutral-500">2023 - 2024</div>
          <div className="text-4xl lg:text-6xl tracking-tighter font-semibold furguardlogo mb-1">
            furguard
          </div>
          <p className="text-md font-normal text-neutral-800 ">
            Built furguard, a machine-learning powered mechatronic system,
            trained on my dogs&apos; faces to recognize and grant access via an
            electromagnet locking/unlocking system.
          </p>
          <div className="text-neutral-600 text-sm mt-24">
            (finding good images...)
          </div>
        </div>
      </div>
    </section>
  );
}
