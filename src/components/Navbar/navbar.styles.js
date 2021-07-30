import styled from 'styled-components'

export const NavbarStyled = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav.border};
  font-size: 16px;
  padding: 1rem 0.75rem;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.body.background};
  color: ${({ theme }) => theme.colors.body.text};
  z-index: 2;

  nav {
    display: grid;
    gap: 1.5rem;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    justify-items: center;

    & > button {
      background-color: transparent;
      border: none;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      font-size: 22px;
      color: var(--black-light);
      cursor: pointer;
    }
  }

  @media all and (max-width: 768px) {
    & {
      font-size: 0.8rem;
    }
  }
`
