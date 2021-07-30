import LoaderIcon from 'components/LoaderIcon'
import { Button } from './button.styled'

export default function Btn (props) {
  return (
        <Button>
            <LoaderIcon color="var(--main-color)" >{props.children}</LoaderIcon>
            <p>{props.text}</p>
        </Button>
  )
}
