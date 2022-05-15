import { Finds, Header } from './container_Styles'
import { Input } from 'components/input/input_Styles'
import NotFound from 'components/404'
import Btn from 'components/button'
import { RenderCard } from 'components/render_Card'
import { useState } from 'react'
import { H1, H3 } from 'components/label/label_Styles'

export default function TemplateJN(props) {
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)
  const [find, setFind] = useState('')
  const [visible, setVible] = useState(false)
  const [info, setInfo] = useState(false)
  const search = () => {
    if (find !== '') {
      setVible(true)
      setError(false)
      setInfo(false)
      setResult(result)
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
        <H1>{props.title}</H1>
        <div>
          <Input
            type="text"
            onChange={handleChange}
            value={find}
            placeholder={props.placeholder}
          />
          <Btn type="primary" size="16" method={search} text={props.textBtn}>
            {props.children}
          </Btn>
        </div>
      </Header>
      <Finds>
        {error && <NotFound text="No ingresaste una busqueda 😅😄" />}
        {visible && (
          <>
            {info && <H3>Resultados de la Busqueda:{find}</H3>}
            <div>
              {info ? (
                <RenderCard result={result} />
              ) : (
                <>
                  {' '}
                  <NotFound text={props.msj} />
                </>
              )}
            </div>
          </>
        )}
      </Finds>
    </>
  )
}
