import LoaderIcon from 'components/loader_Icon'
import { Button } from 'components/button/button_Styled'
import { P } from 'components/label/label_Styles'

export default function Btn(props) {
  return (
    <Button type={props.type} size={props.size} onClick={props.method}>
      <LoaderIcon>{props.children}</LoaderIcon>
      <P weigth="500">{props.text ? props.text : ''}</P>
    </Button>
  )
}
