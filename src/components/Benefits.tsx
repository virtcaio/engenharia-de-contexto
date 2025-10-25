import { Link as LinkIcon, Bot, Briefcase, Check, X } from 'lucide-react'
import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Benefits = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  const differentials = [
    {
      icon: <LinkIcon className="h-8 w-8 text-tangerine" />,
      title: 'IA Conectada (Suas Ferramentas)',
      subtitle: 'O que 99% dos cursos de IA não te ensina.',
      description: 'IA conectada com suas ferramentas.',
      intro: 'Ao invés de copiar e colar arquivos toda hora:',
      benefits: [
        'IA enxerga sua agenda diretamente',
        'IA enxerga seus emails',
        'IA enxerga seus arquivos',
        'Mudou algo? IA já sabe.',
      ],
      tools: [
        'Agenda (Google Calendar)',
        'Emails (Gmail)',
        'Arquivos (Google Drive)',
        'Código (Github)',
        'Notas (Notion, Apple Notes)',
        'Dados (Stripe, Filesystem)',
      ],
      result: 'IA enxerga TODO seu contexto de trabalho.',
      highlight: 'Não é "futuro". É agora. E quase ninguém sabe.',
    },
    {
      icon: <Bot className="h-8 w-8 text-tangerine" />,
      title: 'IA Automática (Sempre Atualizada)',
      subtitle: 'Configure uma vez. Use pra sempre.',
      description: 'IA que aprende sozinha:',
      benefits: [
        'Você atualiza arquivo no Google Drive',
        'Automação detecta mudança',
        'IA atualiza automaticamente',
      ],
      workflow: [
        'Você trabalha.',
        'Automação cuida do contexto.',
        'IA sempre atualizada.',
      ],
      result: 'Economia de 2-3 horas/semana em trabalho manual.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-tangerine" />,
      title: '7 Templates Prontos (Não Teoria)',
      subtitle: 'Newsletter, PDFs, Carrosséis, Mentor IA...',
      description: 'Cada template é:',
      benefits: [
        'Pronto para usar',
        'Exemplo real aplicado',
        'Você copia e adapta pro seu contexto',
      ],
      notIs: [
        '"Agora pense em como aplicar..."',
        '"Use sua criatividade..."',
      ],
      is: [
        '"Aqui está o template"',
        '"Aqui está o exemplo"',
        '"Copie e adapte"',
      ],
      result: 'Sai do curso com 7 sistemas prontos funcionando.',
    },
  ]

  return (
    <section id="diferenciais" className="py-8 bg-white relative">
      <div className="section-container">
        {/* DIFERENCIAIS */}
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">Diferenciais</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          <span className="text-tangerine">3 diferenciais</span> que nenhum outro curso tem
        </h2>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {differentials.map((diff, idx) => (
            <div
              key={idx}
              className="feature-card animate-fade-up opacity-0"
              style={{ animationDelay: `${500 + idx * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4 p-3 bg-tangerine/10 inline-block rounded-xl">
                {diff.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{diff.title}</h3>
              <p className="text-sm font-semibold text-tangerine mb-4">{diff.subtitle}</p>
              <p className="text-muted-foreground mb-4">{diff.description}</p>

              {diff.intro && (
                <p className="text-muted-foreground mb-3 text-sm">{diff.intro}</p>
              )}

              {diff.benefits && (
                <ul className="space-y-2 mb-4">
                  {diff.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-tangerine flex-shrink-0">•</span>
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {diff.tools && (
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">E funciona com suas 10 principais ferramentas:</p>
                  <ul className="space-y-1">
                    {diff.tools.map((tool, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-tangerine flex-shrink-0">→</span>
                        <span className="text-muted-foreground text-sm">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {diff.workflow && (
                <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Sem você fazer nada:</p>
                  {diff.workflow.map((step, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{step}</p>
                  ))}
                </div>
              )}

              {diff.notIs && (
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Não é:</p>
                  <ul className="space-y-1 mb-3">
                    {diff.notIs.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold mb-2">É:</p>
                  <ul className="space-y-1">
                    {diff.is && diff.is.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-3 bg-gradient-to-r from-tangerine/10 to-viridian/10 rounded-lg border-l-4 border-tangerine">
                <p className="text-sm font-semibold text-night">
                  <span className="text-tangerine">Resultado:</span> {diff.result}
                </p>
              </div>

              {diff.highlight && (
                <p className="text-sm text-muted-foreground mt-3 italic">
                  {diff.highlight}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* TRANSFORMAÇÃO (Antes/Depois) */}
        <div className="mt-24">
          {/* Tag */}
          <div
            className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="tag text-center">Transformação</div>
          </div>

          {/* Título */}
          <h2
            className="section-title text-center animate-fade-up opacity-0 mt-6"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            Antes vs Depois do <span className="text-tangerine">Engenharia de Contexto</span>
          </h2>

          {/* Grid Antes/Depois */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto animate-fade-up opacity-0"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            {/* ANTES */}
            <div className="p-8 rounded-xl bg-red-50 border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-6 text-red-900 flex items-center gap-2">
                <X className="h-6 w-6" />
                ANTES (Dependência)
              </h3>
              <ul className="space-y-4">
                {[
                  'Cola prompt → Torce → Frustra → Repete',
                  'Resultados inconsistentes (às vezes bom, às vezes lixo)',
                  'Não sabe por quê funciona quando funciona',
                  'Perde horas copiando e colando arquivos',
                  'IA "esquece" o que você disse ontem',
                  'Eternamente procurando "prompt melhor"',
                  'Usando IA a 20% do potencial',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DEPOIS */}
            <div className="p-8 rounded-xl bg-green-50 border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center gap-2">
                <Check className="h-6 w-6" />
                DEPOIS (Autonomia)
              </h3>
              <ul className="space-y-4">
                {[
                  'Entende o POR QUÊ prompts funcionam (ou não)',
                  'Resultados consistentes (sempre excelentes)',
                  'Usa IA que lembra TUDO (conversas de dias)',
                  'IA conectada com suas ferramentas (automático)',
                  'Automação cuida do contexto (configure 1x)',
                  'Adapta qualquer prompt pro SEU caso',
                  '7 templates prontos (newsletter, PDFs, mentor...)',
                  'Usando IA a 100% do potencial',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center mt-12 animate-fade-up opacity-0"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <Button variant="cta" size="lg" asChild>
              <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
                QUERO A TRANSFORMAÇÃO
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
