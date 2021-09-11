import React from 'react'
import Template from '../components/Template'
import TemplateJN from 'components/Template-JN'
import { FiSearch } from 'react-icons/fi'

export default function Jobs () {
  return (
      <Template>
        <TemplateJN title="Proyectos"
         type="text"
         placeholder="Ingrese su busqueda"
         textBtn="Buscar"
         code="Ver Código"
         text="Ver proyecto" >
          <FiSearch />
        </TemplateJN>
      </Template>
  )
}
