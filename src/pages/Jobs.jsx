import React from "react";
import Template from "../components/Template";
import { FiSearch } from "react-icons/fi";

export default function Jobs() {
  return (
    <>
      <Template>
        <main className="main-header">
          <h1>Proyectos</h1>
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
          <h3>l</h3>
        </section>
      </Template>
    </>
  );
}
