import { useEffect, useState } from 'react'

// URL do checkout na LastLink
const CHECKOUT_URL = 'https://lastlink.com/p/C46840776/checkout-payment'
const CHECKOUT_CP = 'LANCAMENTOCONTEXTO'

export const useUTMs = () => {
  const [utms, setUtms] = useState<Record<string, string>>({})

  useEffect(() => {
    // Captura UTMs da URL
    const params = new URLSearchParams(window.location.search)
    const utmParams: Record<string, string> = {}

    params.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmParams[key] = value
      }
    })

    if (Object.keys(utmParams).length > 0) {
      setUtms(utmParams)
      // Salva no localStorage
      localStorage.setItem('utmParams', JSON.stringify(utmParams))
    } else {
      // Tenta recuperar do localStorage
      const saved = localStorage.getItem('utmParams')
      if (saved) {
        setUtms(JSON.parse(saved))
      }
    }
  }, [])

  // Para links antes da seção investimento - vai para #investimento
  const getInvestmentLink = () => {
    return 'https://contexto.caioia.com/#investimento'
  }

  // Para links na seção investimento e depois - vai para checkout com UTMs
  const getCheckoutLinkWithUTMs = () => {
    const url = new URL(CHECKOUT_URL)

    // Adiciona parâmetro cp obrigatório
    url.searchParams.set('cp', CHECKOUT_CP)

    // Adiciona UTMs capturados
    Object.entries(utms).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })

    return url.toString()
  }

  // Mantém compatibilidade com código antigo (agora aponta para checkout)
  const getLastLinkWithUTMs = getCheckoutLinkWithUTMs

  return {
    utms,
    getLastLinkWithUTMs,
    getInvestmentLink,
    getCheckoutLinkWithUTMs
  }
}
