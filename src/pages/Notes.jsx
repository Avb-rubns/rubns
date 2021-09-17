import React from 'react'
import Template from '../components/Template'
import { FiSearch } from 'react-icons/fi'
import TemplateJN from 'components/Template-JN'
export default function Notes () {
  return (
      <Template>
        <TemplateJN title="Notas"
         type="text"
         placeholder="Ingrese su busqueda"
         textBtn="Buscar"
         method = ""
         msj="No pudimos encontrar alguna nota 😥 "
         text="Leer nota" >
          <FiSearch />
        </TemplateJN>
      </Template>
  )
}
