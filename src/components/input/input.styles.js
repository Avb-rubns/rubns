import styled from 'styled-components'

export const InputStyled = styled.input`
    background-color: var(--gray-ligh);
    border-radius: 2px;
    width: 50vh;
    height: 32px;
    border: 1px solid var(--gray);
    color: ${({ theme }) => theme.colors.body.text};
    @media all and (max-width: 768px) {
    width: 95%;
}
`
