import { ContainerSkill } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'

export default function Skillbox (props) {
  return (
        <ContainerSkill>
            <LoaderIcon>
                {props.children}
            </LoaderIcon>
            <p>{props.name}</p>
        </ContainerSkill>

  )
}
