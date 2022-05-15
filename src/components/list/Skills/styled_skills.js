import styled from 'styled-components'

export const Article = styled.article`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 5rem;
  & > div {
    width: 80%;
    font-size: 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
`
