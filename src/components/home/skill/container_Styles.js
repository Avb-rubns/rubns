import styled from 'styled-components'

/* skill icon with text */
export const ContainerSkill = styled.div`
  color: ${({ theme }) => theme.colors.svg.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 23%;
  }
`
