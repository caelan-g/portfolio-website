import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="p-5 px-48 pt-24">
      <div className="flex-col flex gap-4">
        <div className="text-5xl font-bold">{`FurGuard`}</div>
        <Link href="" className="hover:underline">
          Video
        </Link>
        <div className="text-2xl font-bold">Proposal</div>
        <p>
          The FurGuard Dog Door aims to address blatant household safety
          concerns associated with the ownership and operation of a dog door. As
          stated in the Herald Sun, “more than 30 properties… have been broken
          into either by thief squeezing through one of these devices [dog
          doors] or reaching inside with a wire or other implement to unlock a
          nearby door”. Furthermore, Senior-Sergeant Daly of the CIU (Crime
          Investigation Unit) in Melbourne states “People need to be aware, they
          need to lock the doggie door if they can, or perhaps block access if
          they are out for a long period of time”. My proposed device, the
          FurGuard Dog Door, aims to eliminate household safety concerns
          associated with ownership and operation of a dog door, easing
          homeowner’s state of mind as well as safety of family and belongings,
          while also not comprising dog’s ease-of-access and freedom to exit and
          enter the home. The FurGuard Dog Door achieves this through the
          automated unlocking and locking of a pre-existing dog door with two
          electromagnets. By utilizing a HC-SR501 motion sensor the device
          detects movement while utilizing the OV2640 camera to capture an image
          of anything present at the doorstep. With the photo, the device sends
          an API POST request to an externally hosted neural network, built with
          Google’s Vertex AI, which has been trained to identify whether either
          of my dogs are present at the doorstep. If dogs are present, the
          system turns off the electromagnets holding the door shut via a relay
          and allows the door to open. Conversely, if the neural network deduces
          anything other than my dogs are present it remains locked denying any
          unwelcome guest. While the system protects those inside the house, it
          also utilizes an HC-SR04 ultrasonic sensor to detect whether any dog
          is travelling through the door before re-locking, as well as a second
          HC-SR501 motion sensor to detect whether a dog wishes to exit from
          inside the house. In summary, the FurGuard Dog Door nullifies previous
          safety concerns over dog door ownership, while also leaving dogs’
          ease-of-access and safety uncompromised with respective dog-detection
          technology and the subsequent automated locking of the dog door.
        </p>
        <div className="text-2xl font-bold">Evaluation Criteria</div>
        <p>
          1) 90% Successful Dog Detection Rate o 90% of dogs present at the
          doorstep will be imaged and correctly identified by the neural
          network, thus returning a ‘dog’ or ‘none’ value <br />
          2) 95% Safety Rate o The door will remain unlocked/de-powered as dogs
          pass through with 95% consistency <br />
          3) 100% Door Lock/Unlock Rate o After receiving the ‘dog’ value from
          the neural network, the door will execute the correct unlock sequence
          o After receiving the ‘none’ value from the neural network, the door
          will execute the correct locking sequence <br />
          4) 100% Motion Detection Rate o The system will execute code 100% of
          the time in response to both indoor and outdoor motion <br />
          5) Durability o The system will remain completely operational after 8
          hours of use outdoors.
        </p>
        <div className="text-2xl font-bold">Sketches</div>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/images/furguard1.png "
            width={500}
            height={200}
            className="w-full"
            alt="Concept sketch"
          />
          <Image
            src="/images/furguard2.png "
            width={500}
            height={200}
            className="w-full"
            alt="Concept sketch"
          />
          <Image
            src="/images/furguard3.png "
            width={500}
            height={200}
            className="w-full"
            alt="Concept sketch"
          />
          <Image
            src="/images/furguard4.png "
            width={500}
            height={200}
            className="w-full"
            alt="Concept sketch"
          />
        </div>
        <div className="text-2xl font-bold">Wiring Diagram</div>
        <Image
          src="/images/furguardwiring.png "
          width={500}
          height={200}
          className="w-full"
          alt="Wiring diagram"
        />
      </div>
    </main>
  );
}
