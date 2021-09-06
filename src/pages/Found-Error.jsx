
import React from 'react'
import NotFound from '../components/404'
import Template from '../components/Template'

export default function Errorf () {
  return (
        <React.Suspense fallback = {<div>Cargando ... </div>}>
            <Template>
                <NotFound text="Contenido no disponible por el momento"/>
            </Template>
        </React.Suspense>
  )
}
