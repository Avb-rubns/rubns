import { ContainerSkill } from './container_Styles'
import LoaderIcon from 'components/loader_Icon'
import { P } from 'components/label/label_Styles'

export default function Skill(props) {
  return (
    <ContainerSkill>
      <LoaderIcon>{props.icon}</LoaderIcon>
      <P weigth="500">{props.name}</P>
    </ContainerSkill>
  )
}
