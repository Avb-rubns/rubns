import styled from 'styled-components'

export const InputStyled = styled.input`
    background-color: var(--gray-ligh);
    border-radius: 2px;
    padding: .5rem .5rem;
    width: 50vh;
    height: 32px;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.input.background};
    border: none;
    color: ${({ theme }) => theme.colors.input.text};
    @media all and (max-width: 768px) {
        font-size: 14px;
        width: 95%;
    }
`
