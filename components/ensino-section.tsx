import { BookOpen, Dumbbell, GraduationCap } from "lucide-react";

const CURRICULO = [
  "Língua Portuguesa",
  "Matemática",
  "Ciências",
  "História",
  "Geografia",
  "Artes",
  "Inglês",
  "Educação Física",
];

export default function EnsinoSection() {
  return (
    <section id="ensino" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Nosso Ensino
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ensino Fundamental I do 1º ao 5º ano, com grade curricular completa
            e estruturada para formar cidadãos preparados para o futuro.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/fotos/sala-aula.png"
              alt="Alunos em sala de aula"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-semibold text-navy">
              Grade Curricular Estruturada
            </h3>
            <p className="mt-4 text-muted-foreground">
              Nossa grade pedagógica é pensada para oferecer uma base sólida de
              conhecimento, desenvolvendo o raciocínio lógico, a expressão
              criativa e o pensamento crítico desde os primeiros anos.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {CURRICULO.map((materia) => (
                <div
                  key={materia}
                  className="flex items-center gap-2 rounded-lg bg-pastel-orange/10 px-3 py-2 text-sm font-medium text-navy"
                >
                  <BookOpen className="h-4 w-4 text-pastel-orange" />
                  {materia}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pastel-orange/10">
                <GraduationCap className="h-6 w-6 text-pastel-orange" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy">
                Aulas de Inglês
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              O Inglês é parte integrante da grade curricular, com aulas
              semanais estruturadas que desenvolvem a compreensão oral, leitura,
              escrita e conversação. Nossa abordagem pedagógica prepara os
              alunos para a comunicação global desde cedo.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <img
              src="/fotos/ingles.png"
              alt="Aula de Inglês"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/fotos/educacao-fisica.png"
              alt="Educação Física"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pastel-orange/10">
                <Dumbbell className="h-6 w-6 text-pastel-orange" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy">
                Educação Física
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              As aulas de Educação Física são focadas no desenvolvimento motor,
              na saúde e no bem-estar dos alunos. Através de atividades
              planejadas, estimulamos a coordenação, o trabalho em equipe e a
              adoção de hábitos saudáveis desde a infância.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
