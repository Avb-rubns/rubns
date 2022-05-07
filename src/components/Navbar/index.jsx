import React, { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'
import { Link } from 'wouter'
import { FiToggleLeft } from 'react-icons/fi'
import { NavbarStyled } from './navbar.styles'
import Btn from 'components/button'

export default function Navbar () {
  const { theme, setMode } = useContext(ThemeContext)

  const changeTheme = () => {
    setMode(theme.title)
  }

  return (
    <NavbarStyled>
      <nav>
        <a href="/home#init">Inicio</a>
        <a href="/home#about-me">Acerca de mi</a>
        <a href="/home#skills">Conocimientos</a>
        <Link href="/notes">Notas</Link>
        <Link href="/jobs">Proyectos</Link>
        <Btn method={changeTheme}>
          <FiToggleLeft />
        </Btn>
      </nav>
    </NavbarStyled>
  )
}
