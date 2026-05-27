import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "A partir de qual idade a escola recebe?",
    answer:
      "Recebemos crianças a partir dos 6 anos de idade, para ingresso no 1º ano do Ensino Fundamental I. Não oferecemos berçário ou educação infantil maternal.",
  },
  {
    question: "Vocês têm período integral?",
    answer:
      "Não. Operamos exclusivamente nos turnos da manhã (07h30 às 11h) e tarde (13h30 às 17h). Cada turma possui horário fixo conforme o turno escolhido.",
  },
  {
    question: "Como funcionam as aulas de Judô e Dança?",
    answer:
      "As aulas de Judô e Dança são oferecidas por parceiros especializados e acontecem nas dependências da escola. Os alunos da Tia Neuma possuem desconto especial na mensalidade. Para mais informações, entre em contato pelo nosso WhatsApp.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire suas principais dúvidas sobre a Tia Neuma.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium text-navy">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
