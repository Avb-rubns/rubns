import { Card } from 'components/card/card.styled'
import Btn from 'components/button'
import { RenderTag } from 'components/RenderTag'

export default function CardInfo (props) {
  return (
        <Card>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div>
            <RenderTag tags={props.tags}/>
        </div>
        <Btn text="Leer" />
    </Card>
  )
}
