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
            <Sparkles className="h-4 w-4 inline" /> Oferta de Lançamento: <span className="font-bold">R$ 97</span>{' '}
            <span className="line-through opacity-75">R$ 297</span> - Economia de R$ 200!
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Fechar banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default PromoBanner
