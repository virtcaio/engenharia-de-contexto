import { useEffect } from 'react'
import PromoBanner from '@/components/PromoBanner'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Problem from '@/components/Problem'
import Insight from '@/components/Insight'
import Solution from '@/components/Solution'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Target from '@/components/Target'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

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
      {/* 1. Banner Promocional (sticky top) */}
      <PromoBanner />

      {/* 2. Navegação */}
      <NavBar />

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

      {/* 10. Preço - Investimento */}
      <Pricing />

      {/* 11. FAQ - Objeções */}
      <FAQ />

      {/* 12. CTA Final - Última chance */}
      <CallToAction />

      {/* 13. Footer */}
      <Footer />
    </div>
  )
}

export default Index
