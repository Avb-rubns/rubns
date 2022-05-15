import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  h3 {
    font-size: 16px;
  }
  & > p {
    font-size: 12px;
  }
  padding: 0.5rem 0.8rem;
  border-radius: 2px;
  gap: 0.5rem;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card.background};
  & > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.5rem;
  }
`
