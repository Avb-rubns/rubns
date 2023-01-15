import { useEffect, useState } from 'react'

const getMatch = query => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }
  return false
}

export const useMediaQuery = query => {
  const [match, setMatch] = useState(getMatch(query))

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const listener = () => setMatch(mediaQuery.matches)
    mediaQuery.addEventListener('change', listener)

    return () => mediaQuery.removeEventListener('change', listener)
  }, [query])
  return match
}
