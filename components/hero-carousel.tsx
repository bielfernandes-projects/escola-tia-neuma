"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    title: "Ensino Fundamental I de Excelência",
    subtitle: "Recebendo crianças a partir de 6 anos.",
    image:
      "/banners/hero-1.png",
  },
  {
    title: "Tradição desde 1978",
    subtitle:
      "Mais de 4 décadas formando o futuro na Cidade 2000.",
    image:
      "/banners/hero-2.jpg",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/5585992925662?text=Olá! Gostaria de saber mais sobre matrícula na Tia Neuma.";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const next = () => goTo((current + 1) % SLIDES.length);
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="escola" className="relative h-[80vh] min-h-[500px] max-h-[700px] mt-16 overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            i === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="relative flex h-full items-center">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg text-white/80 sm:text-xl">
                {slide.subtitle}
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-8 bg-pastel-orange px-8 py-6 text-base font-semibold text-white shadow-lg hover:bg-pastel-orange/80 sm:text-lg">
                  Realizar Matrícula
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current
                ? "w-8 bg-pastel-orange"
                : "w-2 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
