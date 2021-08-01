import { Finds, Header } from './container.styles'
import Input from 'components/input'
import Btn from 'components/button'
import { RenderCard } from 'components/RenderCard'

export default function TemplateJN (props) {
  return (
        <>
        <Header>
            <h1>{props.title}</h1>
            <div>
                <Input type={props.type} placeholder={props.placeholder} />
                <Btn text={props.textBtn}>{props.children}</Btn>
            </div>
        </Header>
        <Finds>
          <h3>{props.search}</h3>
          <div>
            <RenderCard result={props.result.res} />
          </div>
        </Finds>
        </>
  )
}
