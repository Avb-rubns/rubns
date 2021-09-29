import React from 'react'
import { Link } from 'wouter'
import { FiToggleLeft } from 'react-icons/fi'
import { NavbarStyled } from './navbar.styles'
import Btn from 'components/button'
import { useTheme } from 'context/Themecontext'

export default function Navbar () {
  const { theme, setMode } = useTheme()

  const changeTheme = () => {
    setMode(theme.title)
    console.log('click')
  }

  return (
    <NavbarStyled>
      <nav>
        <Link href="/home">Inicio</Link>
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
