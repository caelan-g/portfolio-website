import Image from "next/image";
export default function Keyboard() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 w-96 rotate-12 h-56">
        <div className="w-56 hover:translate-y-1 hover:translate-x-1 transition-all scale-[.8]">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
        <div className="w-56 hover:translate-y-1 hover:translate-x-1 transition-all scale-95">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
        <div className="w-56 hover:translate-y-1 hover:translate-x-1 transition-all">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
        <div className="w-56 relative right-12 hover:translate-y-1 hover:translate-x-1 transition-all scale-90">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
        <div className="w-56 relative right-10 hover:translate-y-1 hover:translate-x-1 transition-all">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
        <div className="w-56 relative right-4 hover:translate-y-1 hover:translate-x-1 transition-all scale-110">
          <Image
            src="/images/keyboard/keyboardkey.png"
            alt="Keyboard"
            className="absolute -rotate-12"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
