import Image from "next/image";
import ConstantTextDigitalWhiz from "@/components/ui/typography/text-digitalWhiz";

export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/img/WEB_digital3.png"
              alt="fondo1"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="absolute top-16 left-12 p-8">
            <ConstantTextDigitalWhiz />
            <p
              className="text-white mt-4 text-2xl font-bold"
              style={{ textShadow: "0 5px 5px rgba(128,0,128,0.8)" }}>
              Agency <br />
              Comprehensive Marketing
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
