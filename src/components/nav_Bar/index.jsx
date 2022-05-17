import { useContext } from 'react'
import { ThemeContext } from 'context/theme_context'
import { Link,Redirect} from 'wouter'
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
        <Redirect href="/home#init">Inicio</Redirect>
        <Link href="/home#about-me">Acerca de mi</Link>
        <Link href="/home#skills">Conocimientos</Link>
        <Link href="/notes">Notas</Link>
        <Link href="/jobs">Proyectos</Link>
        <Btn method={changeTheme}>
          <FiToggleLeft />
        </Btn>
      </nav>
    </NavbarStyled>
  )
}
