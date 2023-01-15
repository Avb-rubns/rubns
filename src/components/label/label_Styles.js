import styled from 'styled-components'

export const P = styled.p`
  font-weight: ${props => (props.weigth ? props.weigth : 400)};
  text-align: ${props => (props.alingText ? props.alingText : 'justify')};
`
export const H1 = styled.h1`
  font-weight: ${props => (props.weigth ? props.weigth : 700)};
`

export const H2 = styled.h2`
  font-weight: ${props => (props.weigth ? props.weigth : 700)};
`
export const H3 = styled.h3`
  font-weight: ${props => (props.weigth ? props.weigth : 700)};
`
