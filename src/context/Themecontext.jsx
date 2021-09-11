import { useEffect, useState } from 'react'
import light from 'styles/schemes/light'
import dark from 'styles/schemes/dark'
import { setToLS, getFromLS } from 'utils/storage'

const THEMES = {
  dark,
  light
}

export const useTheme = () => {
  const [theme, setTheme] = useState(light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    const localTheme = getFromLS('theme')
    if (localTheme) {
      localTheme ? setTheme(THEMES[localTheme]) : setTheme(theme)
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light)
    }
    setThemeLoaded(true)
  }, [])

  const setMode = mode => {
    const switched = mode === 'light' ? 'dark' : 'light'
    setToLS('theme', switched)
    setTheme(THEMES[switched])
  }

  return { theme, setMode, themeLoaded, setThemeLoaded }
}
