import { useContext } from 'react'
import { ThemeContext } from 'context/theme_context'
import { Link, Route } from 'wouter'
import { FiToggleLeft } from 'react-icons/fi'
import { NavbarStyled } from './navbar_Styles'
import Btn from 'components/button'

export default function Navbar() {
  const { theme, setMode } = useContext(ThemeContext)

  const changeTheme = () => {
    setMode(theme.title)
  }

  return (
    <NavbarStyled>
      <nav>
        <a href="/home#init">Inicio</a>
        <a href="/home#about-me">Acerca de mi</a>
        <Route href="/home#skills">Conocimientos</Route>
        <Link href="/notes">
          <a>Notas</a>
        </Link>
        <Link href="/jobs">
          <a>Proyectos</a>
        </Link>
        <Btn method={changeTheme}>
          <FiToggleLeft />
        </Btn>
      </nav>
    </NavbarStyled>
  )
}
