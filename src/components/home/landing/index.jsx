import { Container, Box, Arrow } from './container_Styles'
import LoaderIcon from 'components/loader_Icon'
import { H1, H2 } from 'components/label/label_Styles'
import Logo from 'components/icon'
import { FiArrowDownCircle } from 'react-icons/fi'

export default function ContainerLanding(props) {
  return (
    <Container id="init">
      <Logo />
      <H1 weigth="700">{props.name}</H1>
      <H2 weigth="500">{props.occupation}</H2>
      <div>
        <Box href={props.mail} target="_blank" rel="noopener nofollow">
          <LoaderIcon color="var(--gray-dark)">{props.icon_Mail}</LoaderIcon>
        </Box>
        <Box href={props.git} target="_blank" rel="noopener noreferrer">
          <LoaderIcon color="var(--gray-dark)">{props.icon_Git}</LoaderIcon>
        </Box>
        <Box href={props.link} target="_blank" rel="noopener noreferrer">
          <LoaderIcon color="var(--gray-dark)">
            {props.icon_Linkedin}
          </LoaderIcon>
        </Box>
      </div>
      <Arrow href="#about-me">
        <FiArrowDownCircle />
      </Arrow>
    </Container>
  )
}
