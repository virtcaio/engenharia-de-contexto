import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const FAQ = () => {
  const faqs = [
    // CATEGORIA 1: REQUISITOS TÉCNICOS
    {
      question: 'Preciso ter conhecimento técnico?',
      answer:
        'Não. Se você já usa IA (qualquer uma), consegue acompanhar. O curso é prático e direto ao ponto. Não precisa saber programar.',
    },
    {
      question: 'Funciona só com Claude ou posso usar ChatGPT?',
      answer:
        'Os princípios funcionam com qualquer IA. Mas Claude é superior para contexto longo (200.000 tokens vs 128.000 do ChatGPT) e tem recursos exclusivos como MCP e Projetos. O curso é gravado com Claude, mas você pode adaptar para outras IAs.',
    },
    {
      question: 'Preciso pagar por ferramentas além do curso?',
      answer:
        'Sim. Você precisa do Claude Pro (US$ 20/mês) ou Max (US$ 100/mês). O plano gratuito NÃO tem Projetos (recurso central do curso). As integrações MCP são gratuitas, exceto Firecrawl (opcional, US$ 104/mês).',
    },
    {
      question: 'Qual plano do Claude preciso? Free funciona?',
      answer:
        'Claude Pro (US$ 20/mês) é o mínimo recomendado. O plano Free NÃO tem Projetos, que é essencial para Engenharia de Contexto. Claude Max (US$ 100/mês) tem mais capacidade de uso, mas funcionalidades são as mesmas.',
    },
    {
      question: 'Preciso saber programar para usar MCP?',
      answer:
        'Não. MCP são integrações visuais que você conecta com 1 clique. Não precisa escrever código. Você vai conectar Google Drive, Gmail, Calendar, Notion, Stripe, GitHub e outras ferramentas sem programar nada.',
    },

    // CATEGORIA 2: CONTEÚDO E ESTRUTURA
    {
      question: 'Quantas aulas são? Quanto tempo leva para concluir?',
      answer:
        '29 aulas distribuídas em 4 módulos. Duração total: 2-3 horas de conteúdo direto ao ponto. Sem enrolação, sem 40 horas de vídeo. Você pode assistir tudo de uma vez ou no seu ritmo.',
    },
    {
      question: 'O que é "IA Conectada" e por que é diferente?',
      answer:
        'É quando a IA se conecta diretamente às suas ferramentas de trabalho (Google Drive, Gmail, GitHub, Notion, Stripe, etc) sem você precisar copiar e colar. A IA acessa TODO seu contexto automaticamente. Quase ninguém sabe fazer isso. Você vai aprender a conectar 10 ferramentas.',
    },
    {
      question: 'O que é MCP e por que quase ninguém ensina isso?',
      answer:
        'MCP (Model Context Protocol) é o protocolo que conecta Claude com suas ferramentas. Foi lançado em novembro de 2024 pela Anthropic. É tão novo que praticamente nenhum curso ensina de forma estruturada. Este curso tem módulo inteiro dedicado a MCP com 10 aulas práticas.',
    },
    {
      question: 'Qual a diferença entre Engenharia de Contexto e Engenharia de Prompt?',
      answer:
        'Engenharia de Prompt = otimizar instrução única. Engenharia de Contexto = construir sistema completo com memória permanente, base de conhecimento, automação e integrações. É a evolução de como usar IA profissionalmente.',
    },
    {
      question: 'Os 7 templates são personalizáveis para meu caso?',
      answer:
        'Sim. São frameworks replicáveis, não soluções prontas. Você aprende a METODOLOGIA para criar Newsletter, analisar PDFs, fazer Carrosséis, clonar estilo de autor, criar Especialista IA, personalizar voz e ter Mentor IA. Depois adapta para seu contexto específico.',
    },

    // CATEGORIA 3: RESULTADOS E APLICAÇÃO
    {
      question: 'Quando vou ver resultados reais?',
      answer:
        'Primeiros resultados: 1-2 semanas (Claude configurado, primeiras integrações funcionando). Economia de tempo mensurável: 30 dias (10-15h/semana economizadas). Domínio completo: 90 dias (todos os 7 casos práticos implementados).',
    },
    {
      question: 'Funciona para qualquer área de atuação?',
      answer:
        'Sim. Os frameworks são agnósticos de área. Funciona para criadores de conteúdo, desenvolvedores, empreendedores, executivos, copywriters, consultores, analistas. O que muda é COMO você aplica ao seu contexto específico.',
    },
    {
      question: 'Quanto tempo vou economizar depois de aplicar o curso?',
      answer:
        'Varia por caso prático: Newsletter 85-90% de tempo (1-2h → 5-10min), Análise de PDFs 90% (dias relendo → 20min), Carrosséis 75-85% (1-2h → 15-25min). Média geral: 10-15 horas/semana economizadas após implementação completa.',
    },
    {
      question: 'Preciso usar TODOS os módulos ou posso escolher?',
      answer:
        'Você escolhe. Módulo 1 (Fundamentos) é obrigatório. Módulo 2 (Automação) é opcional mas recomendado se você lida com muitos arquivos. Módulo 3 (MCP) escolha as integrações que fazem sentido para você. Módulo 4 (Casos Práticos) implemente só os que precisa.',
    },

    // CATEGORIA 4: INVESTIMENTO E GARANTIA
    {
      question: 'Tem certificado?',
      answer:
        'Não. Este não é um curso para enfeitar currículo. É para você dominar IA e aplicar no seu trabalho real. Você sai com sistemas funcionando, não com PDF de certificado.',
    },
    {
      question: 'Tem garantia? Como funciona?',
      answer:
        'Sim. 7 dias de garantia incondicional. Assista o curso completo, aplique os templates, teste as integrações. Se não funcionar, devolvo 100% do valor. Sem perguntas, sem burocracia.',
    },
    {
      question: 'Tem atualizações? Pago de novo se o Claude mudar?',
      answer:
        'Atualizações são gratuitas. Quando o Claude adicionar novos recursos, MCP lançar novas integrações ou surgirem casos práticos relevantes, você recebe as atualizações sem custo adicional. Acesso vitalício.',
    },

    // CATEGORIA 5: SUPORTE E ACESSO
    {
      question: 'Como funciona o suporte? Tem comunidade?',
      answer:
        'Suporte via email para dúvidas técnicas sobre o conteúdo do curso. NÃO tem comunidade. Tem formulário de feedback e newsletter semanal com insights e atualizações. O foco é ensinar metodologia, não resolver problemas específicos para você.',
    },
    {
      question: 'O acesso é vitalício ou expira?',
      answer:
        'Acesso vitalício. Assista quantas vezes quiser, no seu ritmo. Atualizações gratuitas incluídas. Você paga uma vez e tem acesso para sempre.',
    },
    {
      question: 'Se eu travar em alguma integração, o que faço?',
      answer:
        'Use o email de suporte para dúvidas técnicas. Envie prints, descreva o problema específico. O suporte é para ENSINAR você a resolver, não para resolver para você. Filosofia: ensinar a pescar, não pescar para você.',
    },
  ]

  return (
    <section id="faq" className="py-6 bg-white relative">
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
