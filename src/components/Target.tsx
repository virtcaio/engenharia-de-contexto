import { Check, X } from 'lucide-react'
import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Target = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  const forYou = [
    'Você usa IA no trabalho (qualquer uma)',
    'Você tem resultados inconsistentes (às vezes bom, às vezes ruim)',
    'Você quer entender POR QUE funciona (não só copiar prompts)',
    'Você quer IA que funciona a 100% (não 20%)',
    'Você quer automação real (não trabalho manual)',
    'Você quer templates prontos (não teoria)',
    'Você prefere 2-3 horas direto ao ponto (não 40h de enrolação)',
  ]

  const notForYou = [
    'Você nunca usou IA (comece com IA grátis primeiro)',
    'Você quer "prompt mágico" que resolve tudo (não existe)',
    'Você não quer investir 2-3 horas aprendendo (quer atalho)',
    'Você está feliz com resultados inconsistentes (não vejo problema)',
    'Você acha que IA grátis é suficiente (pode ser, depende do uso)',
  ]

  return (
    <section id="para-quem" className="py-8 bg-seasalt relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* É para você */}
          <div
            className="mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <h2 className="section-title mb-8">
              Este curso <span className="text-tangerine">é para você</span> se:
            </h2>
            <div className="p-8 rounded-xl bg-green-50 border-2 border-green-200">
              <ul className="space-y-4">
                {forYou.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 animate-fade-up opacity-0"
                    style={{ animationDelay: `${300 + idx * 50}ms`, animationFillMode: 'forwards' }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NÃO é para você */}
          <div
            className="mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <h2 className="section-title mb-8">
              Este curso <span className="text-red-600">NÃO é para você</span> se:
            </h2>
            <div className="p-8 rounded-xl bg-gray-50 border-2 border-gray-300">
              <ul className="space-y-4">
                {notForYou.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 animate-fade-up opacity-0"
                    style={{ animationDelay: `${800 + idx * 50}ms`, animationFillMode: 'forwards' }}
                  >
                    <X className="h-6 w-6 text-red-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center animate-fade-up opacity-0"
            style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
          >
            <Button variant="cta" size="lg" asChild>
              <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
                SIM, ESTE CURSO É PRA MIM
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Target
