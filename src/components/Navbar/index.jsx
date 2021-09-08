import React from 'react'
import { Link } from 'wouter'
import { FiToggleLeft } from 'react-icons/fi'
import { NavbarStyled } from './navbar.styles'
import Btn from 'components/button'

export default function Navbar () {
  return (
    <NavbarStyled>
      <nav>
        <Link href="/home">Inicio</Link>
        <a href="/home#about-me">Acerca de mi</a>
        <a href="/home#skills">Conocimientos</a>
        <Link href="/notes">Notas</Link>
        <Link href="/jobs">Proyectos</Link>
        <Btn>
          <FiToggleLeft />
        </Btn>
      </nav>
    </NavbarStyled>
  )
}
