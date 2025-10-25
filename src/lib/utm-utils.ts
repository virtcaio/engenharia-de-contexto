import { useEffect, useState } from 'react'

const CHECKOUT_URL = '#checkout' // Placeholder - substituir pelo link real

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

  const getLastLinkWithUTMs = () => {
    const url = new URL(CHECKOUT_URL, window.location.origin)
    Object.entries(utms).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
    return url.toString()
  }

  return { utms, getLastLinkWithUTMs }
}
