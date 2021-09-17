import { Container, Box, Arrow } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'

export default function ContainerLading (props) {
  return (
        <Container id = {props.id}>
            <h1>{props.name}</h1>
            <h2>{props.occupation}</h2>
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
