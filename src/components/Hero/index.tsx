"use client";
import { CircleChevronLeftIcon, CircleChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../Button";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      image: "/images/ai-generated-8679746_1920.jpg",
      title: "Experiência em Advocacia",
      subtitle: "Mais de 20 anos defendendo seus direitos",
    },
    {
      image:
        "/images/Imagem-do-WhatsApp-de-2024-12-04-as-20.27.28_789def76.jpg",
      title: "Soluções Jurídicas Personalizadas",
      subtitle: "Atendimento especializado para cada caso",
    },
    {
      image:
        "/images/Imagem-do-WhatsApp-de-2024-12-05-as-21.31.53_128bdb9c.jpg",
      title: "Compromisso com a Justiça",
      subtitle: "Ética e transparência em cada processo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="inicio">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center flex-col">
            <div className=" text-center text-white px-4 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pt-17">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
                {slide.subtitle}
              </p>
              <Link href={"/contatos"} className="flex justify-center">
                <Button>Entre em contato</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <button
        className="text-black absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
        onClick={prevSlide}
      >
        <CircleChevronLeftIcon width={24} height={24} />
      </button>

      <button
        className="text-black absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
        onClick={nextSlide}
      >
        <CircleChevronRightIcon />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 z-30 flex gap-2 bottom-8">
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-amber-300" : "bg-white/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
