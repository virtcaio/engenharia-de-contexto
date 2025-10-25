import { useEffect, lazy, Suspense } from 'react'
import PromoBanner from '@/components/PromoBanner'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Problem from '@/components/Problem'
import Insight from '@/components/Insight'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Target from '@/components/Target'

// Lazy loading para componentes below-fold (melhoria de performance)
const Pricing = lazy(() => import('@/components/Pricing'))
const FAQ = lazy(() => import('@/components/FAQ'))
const CallToAction = lazy(() => import('@/components/CallToAction'))
const Footer = lazy(() => import('@/components/Footer'))

const Index = () => {
  useEffect(() => {
    // Intersection Observer para animações no scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observar elementos com a classe animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-seasalt">
      {/* Skip link para acessibilidade - permite pular para conteúdo principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-tangerine focus:text-white focus:top-0 focus:left-0"
      >
        Pular para conteúdo principal
      </a>

      {/* 1. Banner Promocional (sticky top) */}
      <PromoBanner />

      {/* 2. Navegação */}
      <header role="banner">
        <NavBar />
      </header>

      {/* Conteúdo principal */}
      <main id="main-content" role="main">
        {/* 3. Hero/Header - Proposta de Valor Principal */}
        <Header />

        {/* 4. Problema - Dor do cliente */}
        <Problem />

        {/* 5. Insight Técnico - Claude vs ChatGPT */}
        <Insight />

        {/* 6. Solução - Apresentação do Método */}
        <Solution />

        {/* 7. Features/Módulos - Conteúdo do Programa (4 módulos) */}
        <Features />

        {/* 8. Benefícios - Diferenciais + Transformação */}
        <Benefits />

        {/* 9. Para Quem É/Não É - Filtro de público */}
        <Target />

        {/* Lazy loading para componentes below-fold */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center" aria-label="Carregando conteúdo"><div className="animate-pulse text-tangerine">Carregando...</div></div>}>
          {/* 10. Preço - Investimento */}
          <Pricing />

          {/* 11. FAQ - Objeções */}
          <FAQ />

          {/* 12. CTA Final - Última chance */}
          <CallToAction />
        </Suspense>
      </main>

      {/* 13. Footer */}
      <Suspense fallback={<div className="h-32" />}>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </Suspense>
    </div>
  )
}

export default Index
