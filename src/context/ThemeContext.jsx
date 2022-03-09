import { createContext } from 'react'
import { useTheme } from 'hooks/useTheme'

export const ThemeContext = createContext({})

export function ThemeContextProvider ({ children }) {
  const { theme, setMode } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
