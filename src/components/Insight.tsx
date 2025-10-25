import { Check, X } from 'lucide-react'

const Insight = () => {
  return (
    <section id="insight" className="py-8 bg-seasalt relative">
      <div className="section-container">
        {/* Tag */}
        <div
          className="flex justify-center w-full mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <div className="tag text-center">O Insight</div>
        </div>

        {/* Título */}
        <h2
          className="section-title text-center animate-fade-up opacity-0 mt-6"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Tem IA que <span className="text-red-600">esquece</span>. E tem IA que <span className="text-tangerine">lembra TUDO</span>.
        </h2>

        {/* Subtítulo */}
        <div
          className="max-w-3xl mx-auto text-center mt-8 space-y-4 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl text-muted-foreground">
            <strong>Não é sobre qual nome tem na tela.</strong>
          </p>
          <p className="text-xl text-muted-foreground">
            É sobre como ela foi feita para trabalhar.
          </p>
        </div>

        {/* Comparação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Algumas IAs (que esquecem) */}
          <div
            className="feature-card border-2 border-red-200 bg-red-50 animate-fade-up opacity-0"
            style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">Algumas IAs</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 flex-shrink-0">→</span>
                <p className="text-muted-foreground">
                  Lembram conversas <strong>curtas</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 flex-shrink-0">→</span>
                <p className="text-muted-foreground">
                  Precisam que você <strong>resuma</strong> informações
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 flex-shrink-0">→</span>
                <p className="text-muted-foreground">
                  "Esquecem" o que você disse <strong>ontem</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Outras IAs (que lembram tudo) */}
          <div
            className="feature-card border-2 border-tangerine bg-gradient-to-br from-tangerine/5 to-viridian/5 animate-fade-up opacity-0"
            style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tangerine flex items-center justify-center">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-tangerine">Outras IAs</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-tangerine flex-shrink-0" />
                <p className="text-muted-foreground">
                  Lembram conversas de <strong className="text-tangerine">DIAS</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-tangerine flex-shrink-0" />
                <p className="text-muted-foreground">
                  Você alimenta <strong className="text-tangerine">TUDO</strong> (sem resumir)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-tangerine flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-tangerine">Nunca esquecem</strong> o que você disse
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O que isso significa na prática */}
        <div
          className="max-w-4xl mx-auto mt-16 animate-fade-up opacity-0"
          style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            O que isso significa na prática?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Com IA que esquece */}
            <div className="p-6 rounded-xl bg-red-50 border border-red-200">
              <h4 className="font-bold text-lg mb-4 text-red-900">Com IA que esquece:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Você precisa resumir</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Perde detalhes importantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Toda conversa parece "nova"</span>
                </li>
              </ul>
            </div>

            {/* Com IA que lembra tudo */}
            <div className="p-6 rounded-xl bg-green-50 border border-green-200">
              <h4 className="font-bold text-lg mb-4 text-green-900">Com IA que lembra tudo:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">Você fala livremente</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">Mantém TODOS os detalhes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">IA te conhece de verdade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusão */}
        <div
          className="max-w-3xl mx-auto mt-12 p-8 rounded-xl bg-gradient-to-r from-tangerine to-viridian text-white text-center animate-fade-up opacity-0"
          style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl font-semibold mb-4">
            E quando você combina:
          </p>
          <p className="text-lg mb-4">
            <strong>IA que lembra tudo + Contexto estruturado + IA conectada</strong>?
          </p>
          <p className="text-lg mb-2">
            Aí você sai do:
          </p>
          <p className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <X className="h-6 w-6" />
            "Às vezes funciona"
          </p>
          <p className="text-lg mb-2">
            E entra no:
          </p>
          <p className="text-2xl font-bold flex items-center justify-center gap-2">
            <Check className="h-6 w-6" />
            "Sempre funciona"
          </p>
        </div>
      </div>
    </section>
  )
}

export default Insight
