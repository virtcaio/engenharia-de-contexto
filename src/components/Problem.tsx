import { Calendar, Repeat, Lightbulb } from 'lucide-react'

const Problem = () => {
  return (
    <section id="problema" className="py-6 bg-white relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">O Problema</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Por que alguns prompts <span className="text-tangerine">funcionam</span> e outros não?
        </h2>

        {/* História: Segunda vs Quinta */}
        <div className="max-w-4xl mx-auto space-y-8 mt-12">
          {/* Segunda-feira */}
          <div
            className="p-6 rounded-xl bg-green-50 border-2 border-green-200 animate-fade-up opacity-0"
            style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-900">Segunda-feira, 10h.</h3>
            </div>
            <p className="text-muted-foreground mb-2">
              Você abre o Claude (ou ChatGPT, tanto faz).
            </p>
            <p className="text-muted-foreground mb-2">
              Cola aquele prompt que eu te passei (ou que pegou da internet).
            </p>
            <p className="text-green-900 font-semibold text-lg mt-4">
              Resultado: <span className="text-green-600">incrível</span>. Email matador. Análise perfeita. Conteúdo excepcional.
            </p>
            <p className="text-muted-foreground mt-2 italic">
              "Caramba, IA realmente funciona!"
            </p>
          </div>

          {/* Quinta-feira */}
          <div
            className="p-6 rounded-xl bg-red-50 border-2 border-red-200 animate-fade-up opacity-0"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-red-900">Quinta-feira, 15h.</h3>
            </div>
            <p className="text-muted-foreground mb-2">
              Mesmo prompt.
            </p>
            <p className="text-muted-foreground mb-2">
              Projeto diferente, mas similar.
            </p>
            <p className="text-red-900 font-semibold text-lg mt-4">
              Resultado: <span className="text-red-600">genérico</span>. Sem graça. Parece que a IA nem tentou.
            </p>
            <p className="text-muted-foreground mt-2">
              Você tenta de novo. Muda algumas palavras. Adiciona "seja criativo".
            </p>
            <p className="text-muted-foreground mt-2">
              Mesma coisa.
            </p>
            <p className="text-muted-foreground mt-2 italic">
              No fim, você deleta frustrado e faz manual.
            </p>
          </div>
        </div>

        {/* O que mudou? */}
        <div
          className="max-w-3xl mx-auto mt-12 text-center animate-fade-up opacity-0"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <h3 className="text-2xl font-bold mb-4 text-night">
            O que mudou?
          </h3>
          <p className="text-xl text-muted-foreground mb-3">
            Não foi o prompt.
          </p>
          <p className="text-xl font-semibold text-night mb-6">
            Foi o <span className="text-tangerine">contexto</span> que você (sem saber) deu - ou deixou de dar.
          </p>
        </div>

        {/* Grid de 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div
            className="feature-card animate-fade-up opacity-0"
            style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
          >
            <div className="mb-4 p-2 bg-muted inline-block rounded-lg">
              <Repeat className="h-8 w-8 text-tangerine" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quando Funcionou</h3>
            <p className="text-muted-foreground">
              Você alimentou a IA com informações certas. Contexto completo.
            </p>
          </div>

          <div
            className="feature-card animate-fade-up opacity-0"
            style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
          >
            <div className="mb-4 p-2 bg-muted inline-block rounded-lg">
              <Lightbulb className="h-8 w-8 text-tangerine" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quando Não Funcionou</h3>
            <p className="text-muted-foreground">
              Faltou contexto. E ninguém te ensinou COMO dar contexto conscientemente.
            </p>
          </div>

          <div
            className="feature-card animate-fade-up opacity-0"
            style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
          >
            <div className="mb-4 p-2 bg-muted inline-block rounded-lg">
              <Calendar className="h-8 w-8 text-tangerine" />
            </div>
            <h3 className="text-xl font-bold mb-2">O Verdadeiro Problema</h3>
            <p className="text-muted-foreground">
              Te deram a ferramenta (o prompt). Mas não te ensinaram a USAR a ferramenta no ambiente certo.
            </p>
          </div>
        </div>

        {/* Analogia da receita */}
        <div
          className="max-w-3xl mx-auto mt-16 p-8 rounded-xl bg-gradient-to-br from-tangerine/10 to-viridian/10 animate-fade-up opacity-0"
          style={{ animationDelay: '1700ms', animationFillMode: 'forwards' }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            É tipo te dar uma receita de bolo sem explicar que você precisa:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-tangerine mr-2">•</span>
              <span className="text-muted-foreground">Dos ingredientes certos (<strong>contexto estruturado</strong>)</span>
            </li>
            <li className="flex items-start">
              <span className="text-tangerine mr-2">•</span>
              <span className="text-muted-foreground">Do forno adequado (<strong>ferramenta certa</strong>)</span>
            </li>
          </ul>
          <p className="text-lg font-semibold text-night mt-6">
            Receita sem ingredientes E sem forno certo não funciona.
          </p>
          <p className="text-lg font-semibold text-night mt-2">
            E prompt sem contexto estruturado + ferramenta adequada é exatamente isso.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem
