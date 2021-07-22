import { ContainerSkill } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'

export default function Skillbox (props) {
  return (
        <ContainerSkill>
            <div>
                <LoaderIcon>
                    {props.children}
                </LoaderIcon>
                <p>{props.name}</p>
            </div>
        </ContainerSkill>

  )
}
