import styled from 'styled-components'

export const Button = styled.button`
  display: grid;
  grid-auto-flow: column;
  place-content: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.button.primary.text};
  background-color: ${props =>
    props.type
      ? ({ theme }) => theme.colors.button.primary.background
      : ({ theme }) => theme.colors.button.secondary.background};
  font-size: ${props => (props.size ? props.size + 'px' : '18px')};
  border: 2px solid
    ${props =>
      props.type
        ? ({ theme }) => theme.colors.button.primary.border
        : ({ theme }) => theme.colors.button.secondary.border};

  text-decoration: none;
  height: 32px;
  border-radius: 2px;
`
