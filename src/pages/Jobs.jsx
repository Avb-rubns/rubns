import React from 'react'
import Template from '../components/Template'
import TemplateJN from 'components/Template-JN'
import { FiSearch } from 'react-icons/fi'

export default function Jobs () {
  const res = {
    data: [
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI']
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI']
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI']
      },
      {
        title: 'Instalacion de PyQt5 desde CLI',
        description: 'En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)',
        tags: ['Python', 'PYQT5', 'Programación', 'CLI']
      }
    ]
  }
  return (
    <>
      <Template>
        <TemplateJN title="Proyectos"
         type="text"
         placeholder="Ingrese su busqueda"
         textBtn="Buscar"
         search="Resultado de Python"
         result={{ res }} >
          <FiSearch />
        </TemplateJN>
      </Template>
    </>
  )
}
