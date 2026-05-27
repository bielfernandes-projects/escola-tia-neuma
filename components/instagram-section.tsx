import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEED_IMAGES = [
  "/instagram/feed-1.png",
  "/instagram/feed-2.png",
  "/instagram/feed-3.png",
  "/instagram/feed-4.png",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400">
            <Instagram className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nosso Dia a Dia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Acompanhe a rotina, os eventos, as atividades e as novidades da Tia
            Neuma em tempo real. O Instagram é a nossa principal fonte de mídia
            — é por lá que os pais e responsáveis podem ver o dia a dia da
            escola.
          </p>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/escola.tianeuma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 text-white hover:opacity-90">
                <Instagram className="h-5 w-5" />
                Siga nosso Instagram
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FEED_IMAGES.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Feed Instagram ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
