import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-night text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1-2: Sobre */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Engenharia de <span className="text-tangerine">Contexto</span>
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl">
              O sistema completo para dominar Claude + MCP + Automação.
              2-3 horas direto ao ponto. 4 módulos práticos. Zero enrolação.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.youtube.com/@caiointeligenciaartificial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tangerine transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/caiointeligenciaartificial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tangerine transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/caiopiubelo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-tangerine transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos e Contato */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#problema" className="text-white/70 hover:text-tangerine transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-white/70 hover:text-tangerine transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#modulos" className="text-white/70 hover:text-tangerine transition-colors">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/70 hover:text-tangerine transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#investimento" className="text-white/70 hover:text-tangerine transition-colors">
                  Investimento
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-tangerine transition-colors">
                  FAQ
                </a>
              </li>
            </ul>

            <h4 className="font-bold mb-4">Contato</h4>
            <a
              href="mailto:contato@caioia.com"
              className="text-white/70 hover:text-tangerine transition-colors flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              contato@caioia.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>
            © {currentYear} Engenharia de Contexto. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Criado por <a href="https://www.instagram.com/caiointeligenciaartificial" target="_blank" rel="noopener noreferrer" className="text-tangerine hover:underline">Caio IA</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
