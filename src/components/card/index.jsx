import { Card } from 'components/card/card_Styled'
import Btn from 'components/button'
import { RenderTag } from 'components/render_Tag'
import { H3, P } from 'components/label/label_Styles'

export default function CardInfo(props) {
  return (
    <Card>
      <H3>{props.title}</H3>
      <P>{props.description}</P>
      <div>
        <RenderTag tags={props.tags} />
      </div>
      <div>
        {props.link && <Btn size="14" text="Ver proyecto" />}
        {props.code && (
          <Btn size="14" method="paren.open(props.code)" text="Ver código" />
        )}
      </div>
    </Card>
  )
}
