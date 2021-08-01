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
          <div className="grid">
            <div className="card">
              <h3>Instalacion de PyQt5 desde CLI</h3>
              <p>En esta nota muestro como instalar y configurar el paquete de pyqt (creación de interfaces)
              </p>
              <div className="box-tags">
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
                <span className="tag" >CLI</span>
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
                <span className="tag" >CLI</span>
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
                <span className="tag" >CLI</span>
              </div>
              <button>Leer Nota</button>
            </div>
            <div className="card">
            <h3>Instalacion de PyQt5 desde CLI</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus,
                a quod. Atque, aliquid consectetur,
                autem quas vero ducimus maiores temporibus ab,
                ratione nostrum nobis quidem?
              </p>
              <div >
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
              </div>
              <button>Leer Nota</button>
            </div>
            <div className="card">
              <h3>Instalacion de PyQt5 desde CLI</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus,
                a quod. Atque, aliquid consectetur,
                autem quas vero ducimus maiores temporibus ab,
                ratione nostrum nobis quidem?
              </p>
              <div>
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
              </div>
              <button>Leer Nota</button>
            </div>
            <div className="card">
              <h3>Instalacion de PyQt5 desde ClL</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus,
                a quod. Atque, aliquid consectetur,
                autem quas vero ducimus maiores temporibus ab,
                ratione nostrum nobis quidem?
              </p>
              <div>
                <span className="tag">Python</span>
                <span className="tag" >Programacion</span>
                <span className="tag" >CLI</span>
              </div>
              <button>Leer Nota</button>
            </div>
          </div>
        </section>
      </Template>
    </>
  )
}
