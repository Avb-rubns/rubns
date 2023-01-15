import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 5em;
  position: relative;
  div {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    gap: 1rem;
    padding-top: 0.5rem;
    font-size: 1.7rem;
  }

  @media all and (max-width: 768px) {
    height: fit-content;
  }
`
