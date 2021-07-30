import React from 'react'
import Template from '../components/Template'
import { FiSearch } from 'react-icons/fi'
import '../styles/note.css'
export default function Notes () {
  return (
    <>
      <Template>
        <main className="main-header">
          <h1>Notas</h1>
          <div className="serch-box">
            <input
              type="text"
              className="input-search"
              placeholder="Ingrese la busqueda"
            />
            <button className="btn-search">
              <FiSearch />
              <p>Buscar</p>
            </button>
          </div>
        </main>
        <section>
          <h3>Resultados de la búsqueda</h3>
          <div></div>
        </section>
      </Template>
    </>
  )
}
