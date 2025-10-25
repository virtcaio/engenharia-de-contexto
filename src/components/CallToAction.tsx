import { ArrowRight, Shield } from 'lucide-react'
import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const CallToAction = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  return (
    <section className="py-8 bg-tangerine text-white relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-viridian/20 blur-3xl"></div>
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-viridian/20 blur-3xl"></div>

      <div className="section-container relative z-10">
        {/* Título */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Duas opções na sua frente:
        </h2>

        {/* Grid: Opção 1 vs Opção 2 */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          {/* OPÇÃO 1: Continuar como está */}
          <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20">
            <h3 className="text-2xl font-bold mb-6">OPÇÃO 1: Continuar como está</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Colecionando prompts',
                'Torcendo para funcionarem',
                'Resultados inconsistentes',
                'Dependente de prompts prontos',
                'Usando IA a 20% do potencial',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/10 rounded-lg border-l-4 border-white/50">
              <p className="font-semibold">
                <strong>Resultado:</strong> Frustração. Desperdício de tempo. Dependência.
              </p>
            </div>
          </div>

          {/* OPÇÃO 2: Dominar o sistema */}
          <div className="p-8 rounded-xl bg-night border-2 border-white">
            <h3 className="text-2xl font-bold mb-6">OPÇÃO 2: Dominar o sistema completo</h3>
            <ul className="space-y-3 mb-6">
              {[
                'IA que lembra TUDO',
                'Contexto estruturado (sempre funciona)',
                'IA conectada (agenda, emails, arquivos)',
                'IA automática (cuida do contexto)',
                '7 templates prontos (aplicação imediata)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-white/10 rounded-lg border-l-4 border-tangerine">
              <p className="font-semibold">
                <strong>Resultado:</strong> Autonomia. Consistência. Maestria.
              </p>
            </div>
          </div>
        </div>

        {/* Seta gigante (visual) */}
        <div
          className="flex justify-center mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <div className="text-6xl animate-bounce">
            ↓
          </div>
        </div>

        {/* CTA Button Gigante */}
        <div
          className="text-center mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <Button
            variant="default"
            size="lg"
            className="bg-night text-white hover:bg-night/90 text-xl px-12 py-8 h-auto"
            asChild
          >
            <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3">
                QUERO OPÇÃO 2: AUTONOMIA COMPLETA
                <ArrowRight className="h-6 w-6" />
              </span>
            </a>
          </Button>
        </div>

        {/* Informações abaixo do botão */}
        <div
          className="text-center mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <p className="text-lg mb-2">
            Acesso imediato. 4 módulos. 2-3 horas. Zero enrolação.
          </p>
          <p className="text-2xl font-bold">
            R$ 97 (oferta de lançamento)
          </p>
        </div>

        {/* Garantia */}
        <div
          className="max-w-2xl mx-auto text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
        >
          <h4 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5" />
            Garantia de 7 dias
          </h4>
          <p>
            Assista todo curso. Aplique os templates. Se não funcionar, devolvo 100% do valor.
          </p>
        </div>

        {/* P.S. */}
        <div
          className="max-w-3xl mx-auto text-center animate-fade-up opacity-0"
          style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
        >
          <p className="text-lg italic">
            <strong>P.S.:</strong> Você já gastou quantas horas copiando e colando contexto manualmente?
            Quanto tempo você perdeu com prompts que não funcionaram? Este curso economiza 2-3 horas/semana
            em trabalho manual. Em um mês, já se pagou.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
