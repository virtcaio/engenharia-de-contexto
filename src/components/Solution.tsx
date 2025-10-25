import { Clock, Zap, Target, X } from 'lucide-react'
import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Solution = () => {
  const { getInvestmentLink } = useUTMs()

  return (
    <section id="solucao" className="py-8 bg-white relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">A Solução</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          <span className="text-tangerine">Engenharia de Contexto:</span>
          <br />
          O sistema completo para IA funcionar SEMPRE
        </h2>

        {/* História */}
        <div
          className="max-w-3xl mx-auto mt-12 text-lg text-muted-foreground space-y-4 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <p>
            Por meses eu vi esse padrão se repetir.
          </p>
          <p>
            Pessoas pegavam meus prompts.
          </p>
          <p>
            Usavam na IA deles.
          </p>
          <p>
            Tinham resultados bons <strong>às vezes</strong>.
          </p>
          <p>
            E voltavam pedindo: "Tem mais prompts?"
          </p>
          <p className="text-xl font-semibold text-night">
            E eu pensava: <span className="text-tangerine">"Não é mais prompts que você precisa."</span>
          </p>
        </div>

        {/* O que você precisa */}
        <div
          className="max-w-3xl mx-auto mt-12 p-8 rounded-xl bg-gradient-to-br from-tangerine/10 to-viridian/10 animate-fade-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <p className="text-lg font-semibold text-night mb-4">
            Você precisa entender:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-tangerine flex-shrink-0">•</span>
              <span className="text-muted-foreground">Por que alguns prompts funcionam e outros não</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tangerine flex-shrink-0">•</span>
              <span className="text-muted-foreground">O que faz a diferença entre resultado genérico e excepcional</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tangerine flex-shrink-0">•</span>
              <span className="text-muted-foreground">Como VOCÊ pode pegar <strong>qualquer prompt</strong> e fazer funcionar sempre</span>
            </li>
          </ul>
        </div>

        {/* Apresentação do produto */}
        <div
          className="max-w-4xl mx-auto mt-16 animate-fade-up opacity-0"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl text-center text-muted-foreground mb-8">
            Foi aí que criei o <strong className="text-tangerine">Engenharia de Contexto</strong>.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-tangerine/5 to-viridian/5 border-2 border-tangerine/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Engenharia de Contexto
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                Não é mais um repositório de "prompts matadores".
              </p>
              <p className="text-xl font-semibold text-night">
                É o <span className="text-tangerine">sistema completo</span> para você fazer IA funcionar <span className="text-tangerine">para o SEU caso específico</span>.
              </p>
            </div>

            {/* Badges de características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Clock className="h-8 w-8 text-tangerine mx-auto mb-2" aria-hidden="true" />
                <p className="font-bold">Rápido</p>
                <p className="text-sm text-muted-foreground">Direto ao ponto</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Target className="h-8 w-8 text-tangerine mx-auto mb-2" />
                <p className="font-bold">4 módulos</p>
                <p className="text-sm text-muted-foreground">Práticos</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Zap className="h-8 w-8 text-tangerine mx-auto mb-2" />
                <p className="font-bold">Zero enrolação</p>
                <p className="text-sm text-muted-foreground">Só o essencial</p>
              </div>
            </div>

            {/* O que NÃO é */}
            <div className="p-6 bg-white rounded-xl mb-8">
              <p className="font-bold mb-4 text-center">O que este curso NÃO é:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Maratona de 40 horas</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Comunidade que você nunca vai usar</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">"Módulo bônus secreto" de enrolação</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <a href={getInvestmentLink()}>
                  QUERO DOMINAR O SISTEMA COMPLETO
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ou <a href="#modulos" className="text-tangerine hover:underline">veja a estrutura completa abaixo ↓</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
