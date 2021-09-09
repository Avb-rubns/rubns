import LoaderIcon from 'components/LoaderIcon'
import { Button } from './button.styled'

export default function Btn (props) {
  return (
        <Button type={props.type} size={props.size} onClick={props.method}
          >
            <LoaderIcon >{props.children}</LoaderIcon>
            <p>{props.text ? props.text : ''}</p>
        </Button>
  )
}
