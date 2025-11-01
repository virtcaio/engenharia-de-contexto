import { X, Sparkles } from 'lucide-react'
import { useState } from 'react'

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-tangerine to-viridian text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="h-4 w-4 inline flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">
              Oferta de Lançamento: <span className="font-bold">R$ 97</span>{' '}
              <span className="line-through opacity-75">R$ 297</span> - <span className="font-bold">58/100 vagas preenchidas</span>
            </span>
            <span className="sm:hidden">
              <span className="font-bold">R$ 97</span>{' '}
              <span className="line-through text-xs opacity-75">R$ 297</span>
              {' '}<span className="font-bold">58/100 vagas</span>
            </span>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 sm:ml-4 hover:bg-white/20 rounded-full p-1 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
          aria-label="Fechar banner promocional"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default PromoBanner
