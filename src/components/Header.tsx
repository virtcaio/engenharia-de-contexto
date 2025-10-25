import { Button } from './ui/button'
import { useUTMs } from '@/lib/utm-utils'

const Header = () => {
  const { getLastLinkWithUTMs } = useUTMs()

  return (
    <section className="relative bg-seasalt overflow-hidden">
      <div className="section-container pt-24 pb-16">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">
            IA que funciona SEMPRE
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Meus prompts funcionaram <span className="text-tangerine">às vezes</span>.
          <br />
          Vou te mostrar como funcionar <span className="text-tangerine">SEMPRE</span>.
        </h1>

        {/* Subheadline */}
        <div
          className="max-w-4xl mx-auto text-center mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl text-muted-foreground mb-4">
            Você pegou meus prompts. Alguns funcionaram incrivelmente bem. Outros, nem tanto.
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            Quer saber por quê?
          </p>
          <p className="text-xl text-muted-foreground mb-4">
            A diferença não está no prompt.
          </p>
          <p className="text-xl font-semibold text-night">
            Está em <span className="text-tangerine">ensinar a IA a te entender</span>.
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
          <Button variant="cta" size="lg" asChild>
            <a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
              QUERO APRENDER ENGENHARIA DE CONTEXTO
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
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
