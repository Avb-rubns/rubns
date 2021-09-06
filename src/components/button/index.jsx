import LoaderIcon from 'components/LoaderIcon'
import { Button } from './button.styled'

export default function Btn (props) {
  const view = (info) => {
    try {
      if (info.link) {
        console.log(info.link)
      } else if (info.code) {
        console.log(info.code)
      }
    } catch (error) {
      console.error()
    }
  }
  return (
        <Button type={props.type} size={props.size} onClick={() => view({ link: props.link, code: props.code })}
          >
            <LoaderIcon color="var(--main-color)" >{props.children}</LoaderIcon>
            <p>{props.text ? props.text : 'Buscar'}</p>
        </Button>
  )
}
