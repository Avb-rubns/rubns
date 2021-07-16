import React from "react";
import "../styles/template.css";
import { FiToggleLeft } from "react-icons/fi";
export default function Template() {
  return (
    <>
      <header className="header">
        <nav className="nav-menu">
          <a href="/home">Inicio</a>
          <a href="/home#about-me">Acerca de mi</a>
          <a href="/home#skills">Conocimientos</a>
          <a href="/notes">Notas</a>
          <a href="/jobs">Proyectos</a>
          <button className="skin">
            <FiToggleLeft />
          </button>
        </nav>
      </header>
    </>
  );
}
