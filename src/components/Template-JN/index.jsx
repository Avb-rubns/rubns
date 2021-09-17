import { Finds, Header } from './container.styles'
import { Input } from 'components/input/input.styles'
import NotFound from 'components/404'
import Btn from 'components/button'
import { RenderCard } from 'components/RenderCard'
import { useState } from 'react'

export default function TemplateJN (props) {
  const [result] = useState({})
  const [error, setError] = useState(false)
  const [find, setFind] = useState('')
  const [visible, setVible] = useState(false)
  const [info, setInfo] = useState(false)
  const search = () => {
    if (find !== '') {
      setVible(true)
      setError(false)
      setInfo(false)
    } else {
      setError(true)
      setVible(false)
      setInfo(false)
    }
  }
  const handleChange = evt => {
    setFind(evt.target.value)
  }
  return (
        <>
        <Header>
            <h1>{props.title}</h1>
            <div>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={find}
                  placeholder={props.placeholder}
                />
                <Btn
                  type="primary"
                  size="16"
                  method={search}
                  text={props.textBtn}>
                    {props.children}
                </Btn>
            </div>
        </Header>
        <Finds>
          {error && <NotFound text="No ingresaste una busqueda 😅😄" />}
          {visible &&
          <>
            <div>
              {info && <h3>Resultados de la Busqueda:{find}</h3>}
              {info ? <RenderCard result={result}/> : <> <NotFound text={props.msj} /></>}
            </div>
          </>}
        </Finds>
        </>
  )
}
