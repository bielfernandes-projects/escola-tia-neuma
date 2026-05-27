import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PARCERIAS = [
  {
    titulo: "Judô",
    descricao:
      "Aulas de Judô ministradas por parceiros especializados, dentro das dependências da escola. O esporte desenvolve disciplina, respeito, concentração e condicionamento físico.",
      imagem:
      "/fotos/judo.png",
  },
  {
    titulo: "Dança",
    descricao:
      "Aulas de Dança com profissionais parceiros, realizadas na própria escola. A dança estimula a coordenação motora, a expressão corporal, a criatividade e a socialização.",
      imagem:
      "/fotos/danca.png",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/5585992925662?text=Olá! Quero saber mais sobre as aulas de Judô e Dança.";

export default function ParceriasSection() {
  return (
    <section id="parcerias" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Atividades Extracurriculares
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos parcerias especiais para enriquecer a formação dos
            nossos alunos.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-pastel-orange/20 bg-pastel-orange/5 p-4 text-center sm:p-6">
          <p className="text-sm font-medium text-navy">
            <strong>Importante:</strong> As aulas de Judô e Dança são oferecidas
            por parceiros e acontecem nas dependências da Tia Neuma.
            Os alunos da escola possuem{" "}
            <strong>desconto especial na mensalidade</strong>.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PARCERIAS.map((item) => (
            <Card
              key={item.titulo}
              className="overflow-hidden border-none shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl text-navy">
                  {item.titulo}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-pastel-orange text-pastel-orange hover:bg-pastel-orange hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Saber mais
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
