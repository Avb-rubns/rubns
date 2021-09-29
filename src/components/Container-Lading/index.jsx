import { Container, Box, Arrow } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'
import { H1, H2 } from 'components/Labels/labels.styles'

export default function ContainerLading (props) {
  return (
        <Container id ="init">
            <H1 weigth="700">{props.name}</H1>
            <H2 weigth="500">{props.occupation}</H2>
            <div>
                <Box href={props.mail} target="_blank" rel="noopener nofollow" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[0] }</LoaderIcon>
                </Box>
                <Box href={props.git} target="_blank" rel="noopener noreferrer" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[1] }</LoaderIcon>
                </Box>
                <Box href={props.link} target="_blank" rel="noopener noreferrer" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[2] }</LoaderIcon>
                </Box>
            </div>
            <Arrow href="#about-me">
              {props.children[3] }
            </Arrow>
        </Container>
  )
}
