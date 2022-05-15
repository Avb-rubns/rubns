import styled from 'styled-components'

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 5rem;
  @media all and (max-width: 768px) {
    height: 110vh;
  }
`
