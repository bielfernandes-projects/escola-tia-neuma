"use client";

import { useEffect, useState } from "react";
import { Instagram, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#escola", label: "A Escola" },
  { href: "#ensino", label: "Ensino" },
  { href: "#parcerias", label: "Parcerias" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_LINK =
  "https://wa.me/5585992925662?text=Olá! Gostaria de informações sobre a Tia Neuma.";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Tia Neuma" className="h-14 w-14 object-contain" />
          <span className="font-heading text-2xl font-bold text-navy">
            Tia Neuma
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-lg font-medium text-navy"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-pastel-orange transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-pastel-orange text-white hover:bg-pastel-orange/80">
              <Phone className="h-4 w-4" />
              Falar Conosco
            </Button>
          </a>
          <a
            href="https://www.instagram.com/escola.tianeuma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/60 transition-colors hover:text-pastel-orange"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-navy" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] pt-12">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy/70 transition-colors hover:text-pastel-orange"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border space-y-3">
                <a
                  href="https://www.instagram.com/escola.tianeuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-pastel-orange"
                >
                  <Instagram className="h-4 w-4" />
                  Siga no Instagram
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-pastel-orange text-white hover:bg-pastel-orange/80">
                    <Phone className="h-4 w-4" />
                    Falar Conosco
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
