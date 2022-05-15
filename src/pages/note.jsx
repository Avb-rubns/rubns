import Template from 'components/template'
import { FiSearch } from 'react-icons/fi'
import TemplateJN from 'components/template_Job_Note'
export default function Notes() {
  return (
    <Template>
      <TemplateJN
        title="Notas"
        type="text"
        placeholder="Ingrese su busqueda"
        textBtn="Buscar"
        method=""
        msj="No tenemos conexion con la información intente en otro momento😥 "
        text="Leer nota"
      >
        <FiSearch />
      </TemplateJN>
    </Template>
  )
}
