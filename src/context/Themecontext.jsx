import { useEffect, useState } from 'react'
import light from 'styles/schemes/light'
import dark from 'styles/schemes/dark'

const THEMES = {
  dark,
  light
}

export const useTheme = () => {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handlePrefersColorScheme)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(THEMES.dark)
    } else {
      setTheme(THEMES.light)
    }
  }, [])

  const handlePrefersColorScheme = ({ matches }) => {
    if (matches) {
      setTheme(THEMES.dark)
    } else {
      setTheme(THEMES.light)
    }
  }

  return { theme }
}
