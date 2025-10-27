import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Header = () => {
  const { getInvestmentLink } = useUTMs()

  return (
    <section className="relative bg-seasalt overflow-hidden">
      <div className="section-container pt-24 pb-16">
        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-4 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Por que seus prompts falham <span className="text-tangerine">80% das vezes</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-center text-muted-foreground mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          (E como fazer a IA entregar exatamente o que você precisa, toda vez)
        </p>

        {/* Subheadline */}
        <div
          className="max-w-4xl mx-auto text-center mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl text-muted-foreground mb-4">
            Você sabe que a IA pode fazer muito mais.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            Mas seus prompts funcionam... <span className="font-semibold">às vezes</span>.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            A diferença não está no prompt. Está no <span className="text-tangerine font-semibold">CONTEXTO</span>.
          </p>
          <p className="text-xl font-semibold text-night">
            Aprenda o método de engenharia que transforma a IA<br />
            de <span className="text-muted-foreground">"talvez ajude"</span> para <span className="text-tangerine">"sempre entrega"</span>
          </p>
        </div>

        {/* Social Proof Badge */}
        <div
          className="flex justify-center mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <div className="bg-secondary/50 rounded-full px-6 py-3 text-sm font-medium text-night">
            2-3 horas direto ao ponto • 4 módulos práticos • 7 templates prontos • Zero enrolação
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
            <a href={getInvestmentLink()}>
              <span className="hidden sm:inline">QUERO APRENDER ENGENHARIA DE CONTEXTO</span>
              <span className="sm:hidden">COMEÇAR AGORA</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <a href="#modulos">Ver Módulos do Curso</a>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-tangerine/5 blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-viridian/5 blur-3xl"></div>
      </div>
    </section>
  )
}

export default Header
