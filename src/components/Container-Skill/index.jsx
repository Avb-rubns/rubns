import { ContainerSkill } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'
import { P } from 'components/Labels/labels.styles'

export default function Skillbox (props) {
  return (
        <ContainerSkill>
            <LoaderIcon>
                {props.children}
            </LoaderIcon>
            <P weigth="500" >{props.name}</P>
        </ContainerSkill>

  )
}
