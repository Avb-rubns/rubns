import styled from "styled-components";

export const NavbarStyled = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  border-bottom: 1px solid var(--gray);
  font-size: 16px;
  padding: 0.58rem 0;
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 2;

  nav {
    display: grid;
    gap: 1rem;
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
      color: var(--black-ligh);
      cursor: pointer;
    }
  }

  @media all and (max-width: 768px) {
    & {
      font-size: 0.8rem;
    }
  }
`;