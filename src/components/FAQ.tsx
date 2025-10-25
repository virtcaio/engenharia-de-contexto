import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const FAQ = () => {
  const faqs = [
    {
      question: 'Preciso ter conhecimento técnico?',
      answer:
        'Não. Se você já usa IA (qualquer uma), consegue acompanhar. O curso é prático e direto ao ponto.',
    },
    {
      question: 'Funciona com qualquer IA?',
      answer:
        'Os princípios funcionam com qualquer IA. Mas existe uma IA específica que lembra conversas de DIAS (enquanto outras esquecem em horas). Ensino você a identificar e usar a melhor ferramenta para Engenharia de Contexto.',
    },
    {
      question: 'Quanto tempo leva?',
      answer:
        '2-3 horas de aulas. Aplicação imediata. Você pode assistir tudo de uma vez ou no seu ritmo.',
    },
    {
      question: 'Tem suporte?',
      answer:
        'Sim, via comunidade exclusiva do curso. Você pode tirar dúvidas e trocar experiências com outros alunos.',
    },
    {
      question: 'O que é "IA Conectada"?',
      answer:
        'É quando a IA enxerga diretamente suas ferramentas de trabalho (Google Drive, Gmail, Github, etc) sem você precisar copiar e colar. Quase ninguém sabe fazer isso. Você vai aprender a conectar 10 ferramentas no curso.',
    },
    {
      question: 'Preciso pagar por outras ferramentas?',
      answer:
        'Não. Você pode começar com versões gratuitas de todas as ferramentas que ensino. Quando quiser expandir, existem planos pagos (a partir de $20/mês), mas não é obrigatório para aplicar o curso.',
    },
    {
      question: 'Tem certificado?',
      answer:
        'Não. Este não é um curso para enfeitar currículo. É para você dominar IA e aplicar no seu trabalho real.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Sim. 7 dias de garantia incondicional. Assista o curso, aplique os templates. Se não funcionar, devolvo 100% do valor.',
    },
  ]

  return (
    <section id="faq" className="py-8 bg-white relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">Perguntas Frequentes</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Dúvidas <span className="text-tangerine">respondidas</span>
        </h2>

        {/* FAQ Accordion */}
        <div
          className="max-w-3xl mx-auto mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="feature-card border-none"
              >
                <AccordionTrigger className="hover:no-underline text-left">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
