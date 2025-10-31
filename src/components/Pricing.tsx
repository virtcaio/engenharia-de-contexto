import { Shield, Check, Clock, CreditCard, Sparkles, DollarSign } from 'lucide-react'
import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Pricing = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  const includes = [
    'Acesso imediato ao curso completo',
    '4 módulos práticos (29 aulas)',
    'Conteúdo direto ao ponto, sem enrolação',
    'IA Conectada: 10 ferramentas integradas',
    'IA Automática: sempre atualizada',
    '7 templates prontos pra usar',
    'Atualizações gratuitas do conteúdo',
  ]

  return (
    <section id="investimento" className="py-6 bg-seasalt relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">Investimento</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Quanto custa <span className="text-tangerine">dominar IA</span>?
        </h2>

        {/* Grid: Breakdown + Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Breakdown de Valor */}
          <div
            className="lg:col-span-2 space-y-6 animate-fade-up opacity-0"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">O que você recebe:</h3>
              <ul className="space-y-3">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-tangerine flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="feature-card bg-gradient-to-br from-tangerine/5 to-viridian/5">
              <h3 className="text-xl font-bold mb-4">Por que este preço?</h3>
              <p className="text-muted-foreground mb-4">
                Outros cursos de IA cobram R$ 997+ por 40 horas de enrolação e "comunidade exclusiva".
              </p>
              <p className="text-muted-foreground mb-4">
                Aqui você paga <strong>menos de R$ 100</strong> por:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-tangerine">•</span>
                  <span className="text-muted-foreground">2-3h direto ao ponto (não 40h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tangerine">•</span>
                  <span className="text-muted-foreground">IA conectada (que 99% não sabe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tangerine">•</span>
                  <span className="text-muted-foreground">IA automática (não teoria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tangerine">•</span>
                  <span className="text-muted-foreground">7 templates prontos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card de Preço */}
          <div
            className="lg:col-span-1 animate-fade-up opacity-0"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <div className="feature-card border-2 border-tangerine sticky top-24">
              {/* Badge Oferta */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-tangerine to-viridian text-white px-4 py-2 rounded-full text-sm font-bold">
                  <Sparkles className="h-4 w-4" />
                  Oferta de Lançamento
                </div>
              </div>

              {/* Preços */}
              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-lg line-through text-muted-foreground mb-2">
                  R$ 297,00
                </span>
                <span className="text-5xl font-bold text-tangerine mb-2">
                  R$ 97
                </span>
                <span className="text-lg text-muted-foreground">
                  à vista
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  ou até 12x de R$ 10,33
                </span>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200 w-full text-center">
                  <p className="text-sm font-semibold text-green-900 flex items-center justify-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Economia de R$ 200
                  </p>
                </div>
              </div>

              {/* CTA Principal */}
              <Button variant="cta" size="lg" className="w-full mb-4" asChild>
                <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
                  QUERO COMEÇAR AGORA
                </a>
              </Button>

              {/* Ícone de Segurança */}
              <div className="flex items-center justify-center mb-6 text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4 mr-2" />
                Pagamento seguro
              </div>

              {/* Box de Garantia */}
              <div className="p-4 bg-gradient-to-br from-tangerine/10 to-viridian/10 rounded-lg border-2 border-tangerine/20 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-tangerine" />
                  <h4 className="font-bold">Garantia de 7 dias</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Assista todo curso. Aplique os casos práticos.
                </p>
                <p className="text-sm font-semibold text-night">
                  Se não funcionar, devolvo <span className="text-tangerine">100% do valor</span>.
                </p>
              </div>

              {/* 3 ícones de confiança */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                  <Shield className="h-5 w-5 text-tangerine mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">7 dias garantia</p>
                </div>
                <div className="p-2">
                  <Check className="h-5 w-5 text-tangerine mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Acesso imediato</p>
                </div>
                <div className="p-2">
                  <Clock className="h-5 w-5 text-tangerine mx-auto mb-1" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground">Rápido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
