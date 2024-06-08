import Image from "next/image";

export default function SectionUno() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full lg:justify-end">
          <Image
            src="/img/sectionUno.png"
            alt="fondo1"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-xl lg:object-right sm:object-center sm:w-2/12 sm:h-2/5"
          />
        </div>

        <div className="absolute top-16 left-12 p-8 sm:top-8 sm:left-4 sm:p-4">
          <h1
            className="text-6xl sm:text-8xl font-extrabold text-[#C327E9] p-2 inline-block"
            style={{ textShadow: "15px 5px 5px rgba(0,0,0,0.8)" }}>
            DIGITAL <br /> WHIZ
          </h1>
          <p
            className="text-white mt-4 text-4xl font-bold sm:text-lg sm:mt-2 md:text-3xl ml-4"
            style={{ textShadow: "0 5px 5px rgba(128,0,128,0.8)" }}>
            Agencia <br />
            Marketing Integral
          </p>
        </div>
      </div>
    </section>
  );
}
