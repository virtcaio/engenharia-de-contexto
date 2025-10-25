import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#problema', label: 'O Problema' },
    { href: '#solucao', label: 'Solução' },
    { href: '#modulos', label: 'Módulos' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#investimento', label: 'Investimento' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-seasalt/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-night">
              Engenharia de <span className="text-tangerine">Contexto</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-night hover:text-tangerine transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="sm" asChild>
              <a href="#investimento">Começar Agora</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-night hover:text-tangerine transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-muted">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-night hover:text-tangerine transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a href="#investimento" onClick={() => setIsMenuOpen(false)}>
                Começar Agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
