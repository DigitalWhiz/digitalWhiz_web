import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-4">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 rounded"
        href="https://www.instagram.com/agencia_digitalwhiz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-16 h-16 rounded-full border-2 left-8 border-white overflow-hidden flex items-center justify-center">
        <Image
          src="/img/DIGITAL123.png"
          alt="Digital Whiz"
          className="rounded-full"
          width={80}
          height={80} // Asegúrate de establecer la misma altura que el ancho para que la imagen sea un círculo perfecto
          priority
        />
        </div>
      </a>
      
    </div>
  );
};

export default Logo;
