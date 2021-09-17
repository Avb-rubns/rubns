import styled from 'styled-components'

export const Slist = styled.ul`
color: ${({ theme }) => theme.colors.input.text};
padding: 0;
display: grid;
grid-auto-flow: column;
gap: 1rem;
@media all and (max-width: 768px) {
    grid-auto-flow: row;
}
`

export const Item = styled.li`
color: ${({ theme }) => theme.colors.input.text};
padding: 0;
display: grid;
grid-auto-flow: row;
`
