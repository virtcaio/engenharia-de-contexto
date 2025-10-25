import { Target, Bot, Link as LinkIcon, Briefcase } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const Features = () => {
  const modules = [
    {
      id: '1',
      icon: <Target className="h-6 w-6 text-tangerine" />,
      title: 'MÓDULO 1: COMO IA FUNCIONA DE VERDADE',
      lessons: '11 aulas práticas',
      objective: 'Entender IA profundamente (não só usar).',
      items: [
        'Por que alguns prompts funcionam (e outros não)',
        'Diferença entre <strong>pedir</strong> e <strong>ensinar</strong> IA',
        'Como IA processa o que você diz',
        'Memória de projetos, Artefatos avançados',
      ],
    },
    {
      id: '2',
      icon: <Bot className="h-6 w-6 text-tangerine" />,
      title: 'MÓDULO 2: IA SEMPRE ATUALIZADA (Automação)',
      lessons: '1 aula prática',
      objective: 'Nunca mais fazer upload manual. IA sempre atualizada.',
      items: [
        '<strong>IA que aprende sozinha</strong>',
        'Você trabalha → IA se atualiza automaticamente',
        'Configure 1x, use pra sempre',
      ],
      differential: 'IA automática. Você trabalha, ela aprende.',
    },
    {
      id: '3',
      icon: <LinkIcon className="h-6 w-6 text-tangerine" />,
      title: 'MÓDULO 3: IA CONECTADA (Suas Ferramentas)',
      lessons: '10 aulas de integrações',
      objective: 'IA enxerga TODO seu contexto de trabalho. Zero trabalho manual.',
      items: [
        'IA que <strong>enxerga</strong> sua agenda, emails e arquivos',
        'Zero trabalho manual (tudo automático)',
        'Contexto completo sempre',
        '<strong>10 conexões práticas:</strong>',
        '• Sua agenda (Google Calendar)',
        '• Seus emails (Gmail)',
        '• Seus arquivos (Google Drive)',
        '• Seu código (Github)',
        '• Suas notas (Notion, Apple Notes)',
        '• Seus dados (Stripe, Filesystem)',
        '• Páginas web (Firecrawl)',
      ],
      differential: 'IA conectada é o que separa quem usa IA a 20% de quem usa a 100%.',
    },
    {
      id: '4',
      icon: <Briefcase className="h-6 w-6 text-tangerine" />,
      title: 'MÓDULO 4: 7 TEMPLATES PRONTOS',
      lessons: '7 aulas aplicadas',
      objective: 'Sair do curso com casos prontos pra aplicar hoje.',
      items: [
        '<strong>Newsletter:</strong> voz única',
        '<strong>PDFs:</strong> transformar em insights',
        '<strong>Carrosséis:</strong> visual para Instagram',
        '<strong>Estilo autor:</strong> escrever como Hemingway',
        '<strong>Voz personalizada:</strong> ensine IA SUA voz',
        '<strong>Mentor IA:</strong> crie mentor pro seu negócio',
        '<strong>Especialista:</strong> IA em qualquer área',
      ],
      differential: 'Templates prontos. Você copia e adapta.',
    },
  ]

  return (
    <section id="modulos" className="py-8 bg-seasalt relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">Estrutura do Curso</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          O que você aprende (<span className="text-tangerine">4 módulos práticos</span>)
        </h2>

        {/* Accordion */}
        <div
          className="max-w-4xl mx-auto mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="feature-card border-none"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 rounded-full bg-tangerine/10 flex items-center justify-center flex-shrink-0">
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{module.title}</h3>
                      <p className="text-sm text-tangerine font-medium">{module.lessons}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-16 pr-4 space-y-4">
                    <p className="text-muted-foreground">
                      <strong>Objetivo:</strong> {module.objective}
                    </p>
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <ul className="space-y-2">
                        {module.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-tangerine flex-shrink-0">→</span>
                            <span
                              className="text-muted-foreground"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    {module.differential && (
                      <div className="p-4 bg-gradient-to-r from-tangerine/10 to-viridian/10 rounded-lg border-l-4 border-tangerine">
                        <p className="text-sm font-semibold text-night">
                          <span className="text-tangerine">DIFERENCIAL:</span> {module.differential}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Total */}
        <div
          className="max-w-2xl mx-auto mt-12 p-6 rounded-xl bg-gradient-to-r from-tangerine to-viridian text-white text-center animate-fade-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <p className="text-2xl font-bold mb-2">
            Total: 29 aulas
          </p>
          <p className="text-lg">
            2-3 horas • Aplicação imediata • Zero enrolação
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
