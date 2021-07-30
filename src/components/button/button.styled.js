import styled from 'styled-components'

export const Button = styled.button`
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--main-color);
    background-color: ${({ theme }) => theme.colors.body.background} ;
    text-decoration: none;
    border: 1px solid var(--main-color);
    height: 32px;
    font-size: 18px;
    border-radius: 2px;
`
