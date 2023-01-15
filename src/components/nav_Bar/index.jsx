import { useContext } from 'react'
import { ThemeContext } from 'context/theme_context'
import { Link } from 'wouter'
import { FiSun } from 'react-icons/fi'
import { NavbarStyled } from './navbar_Styles'
import { RiMoonClearLine } from 'react-icons/ri'
import Btn from 'components/button'
import { useMediaQuery } from 'hooks/use_Media_Query'
import LoaderIcon from 'components/loader_Icon'
import { HiHome } from 'react-icons/hi'

export default function Navbar() {
  const { theme, setMode } = useContext(ThemeContext)

  const changeTheme = () => {
    setMode(theme.title)
  }

  const isDesktop = useMediaQuery('(min-width:786px)')

  return (
    <NavbarStyled>
      <nav>
        <Link href="/home">
          {isDesktop ? <a>Inicio</a> : <LoaderIcon>{<HiHome />}</LoaderIcon>}
        </Link>
        {/* <Link href="/notes">
          <a>Notas</a>
        </Link>
        <Link href="/jobs">
          <a>Proyectos</a>
        </Link> */}
        <Btn method={changeTheme}>
          {theme.title === 'light' ? (
            <LoaderIcon>{<RiMoonClearLine />}</LoaderIcon>
          ) : (
            <LoaderIcon>{<FiSun />}</LoaderIcon>
          )}
        </Btn>
      </nav>
    </NavbarStyled>
  )
}
