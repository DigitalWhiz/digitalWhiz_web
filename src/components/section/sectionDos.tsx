'use client';

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const nuestrosServiciosImage = [...Array(8)].map((_, index) => `/img/NSS${index + 1}.png`);

const SectionDos: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      disable: "phone",
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      AOS.refresh();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nuestrosServiciosImage.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-56 relative" style={{ minHeight: '500px' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 text-center" data-aos="fade-right" style={{ marginTop: '50px', marginBottom: '50px' }}>
          Nuestros Servicios
        </h2>
        <div className="flex justify-center relative flex-wrap gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {nuestrosServiciosImage.map((image, index) => (
            <Link key={index} href={`Nuestros_Servicios/${index + 1}`} passHref>
              <Card
                isFooterBlurred
                radius="lg"
                className={`card ${index === currentImageIndex ? 'visible' : ''}`}
                style={{ width: 'calc(25% - 2rem)', minWidth: '350px', height: '400px', margin: '1rem' }}
              >
                <Image
                  alt={`Nuestros_Servicios ${index + 1}`}
                  src={image}
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
                <CardFooter
                  className="flex flex-col justify-center items-center bg-white/50 border-white/20 border-1 py-2 px-4 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <p className="text-base text-red-600 font-extrabold mb-2">Próximamente</p>
                  <Button
                    className="text-base text-white bg-black/60"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Entérate más
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionDos;
