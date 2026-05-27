import { Clock } from "lucide-react";

export default function HorariosSection() {
  return (
    <section id="horarios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Horários e Rotina
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa organização escolar é pensada para oferecer o melhor ambiente
            de aprendizado.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-pastel-orange/5 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-pastel-orange/10">
              <Clock className="h-8 w-8 text-pastel-orange" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-navy">
              Turno da Manhã
            </h3>
            <p className="mt-2 text-4xl font-bold text-pastel-orange">
              07h30 às 11h
            </p>
            <p className="mt-1 text-lg text-muted-foreground">
              Manhã
            </p>
          </div>

          <div className="rounded-2xl bg-pastel-orange/5 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-pastel-orange/10">
              <Clock className="h-8 w-8 text-pastel-orange" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-navy">
              Turno da Tarde
            </h3>
            <p className="mt-2 text-4xl font-bold text-pastel-orange">
              13h30 às 17h
            </p>
            <p className="mt-1 text-lg text-muted-foreground">
              Tarde
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          *Aviso: Não possuímos período integral. Trabalhamos exclusivamente nos
          turnos da manhã e da tarde.
        </p>
      </div>
    </section>
  );
}
