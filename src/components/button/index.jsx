import LoaderIcon from 'components/LoaderIcon'
import { Button } from './button.styled'
import { P } from 'components/Labels/labels.styles'

export default function Btn (props) {
  return (
        <Button type={props.type} size={props.size} onClick={props.method}
          >
            <LoaderIcon >{props.children}</LoaderIcon>
            <P weigth="500" >{props.text ? props.text : ''}</P>
        </Button>
  )
}
