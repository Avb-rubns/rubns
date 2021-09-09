import { useEffect, useState } from 'react'
import light from 'styles/schemes/light'
import dark from 'styles/schemes/dark'
import { setCookie, parseCookies } from 'nookies'

const THEMES = {
  dark,
  light
}

export const useTheme = () => {
  const [theme, setTheme] = useState(light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handlePrefersColorScheme)
    if (parseCookies()?.theme) {
      const { theme } = parseCookies()
      setTheme(THEMES[theme])
      setThemeLoaded(true)
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(THEMES.dark)
        setThemeLoaded(true)
      } else {
        setTheme(THEMES.light)
        setThemeLoaded(true)
      }
    }
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handlePrefersColorScheme)
    }
  }, [])

  const handlePrefersColorScheme = ({ matches }) => {
    if (matches) {
      setTheme(THEMES.dark)
    } else {
      setTheme(THEMES.light)
    }
  }

  const switchTheme = (current) => {
    console.log('holi')
    const switched = current === 'light' ? 'dark' : 'light'
    if (current === light) {
      setCookie(null, 'theme', switched, { path: '/' })
      setTheme(THEMES.dark)
      setThemeLoaded(true)
    } else {
      setTheme(THEMES.light)
      setThemeLoaded(true)
    }
  }

  return { theme, switchTheme, themeLoaded, setThemeLoaded }
}
