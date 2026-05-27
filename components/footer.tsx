import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Tia Neuma" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-heading text-xl font-semibold text-white">
                  Tia Neuma
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Desde 1978 educando crianças e formando jovens na Cidade 2000. Ensino
              Fundamental de excelência com tradição, qualidade e carinho.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://www.google.com/maps/place/Instituto+Infantil+Tia+Neuma/@-3.7493666,-38.4727109,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7463c0ae0d647:0xbe8e2d6e1e44d98d!8m2!3d-3.749372!4d-38.470136!16s%2Fg%2F1tdl6bh6?hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-pastel-orange"
              >
                <MapPin className="h-5 w-5 text-pastel-orange" />
                Alameda Ana Elisa, 133, Quadra 02, Cidade 2000, Fortaleza, CE
              </a>
              <a
                href="mailto:institutotianeuma@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-pastel-orange"
              >
                <Mail className="h-5 w-5 text-pastel-orange" />
                institutotianeuma@gmail.com
              </a>
              <a
                href="https://wa.me/5585992925662"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-pastel-orange"
              >
                <Phone className="h-5 w-5 text-pastel-orange" />
                (85) 99292-5662
              </a>
              <a
                href="https://www.instagram.com/escola.tianeuma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-pastel-orange"
              >
                <Instagram className="h-5 w-5 text-pastel-orange" />
                @escola.tianeuma
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.22!2d-38.470136!3d-3.749372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7463c0ae0d647%3A0xbe8e2d6e1e44d98d!2sTia%20Neuma!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Tia Neuma"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Tia Neuma. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
