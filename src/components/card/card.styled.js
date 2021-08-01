import styled from 'styled-components'

export const Card = styled.div`
display: flex;
h3{
    font-size: 16px;
}
p{
    font-size: 12px;
}
padding: .5rem  .8rem;
border-radius: 2px;
background-color: red;
gap: .5rem;
flex-direction: column;
background: ${({ theme }) => theme.colors.card.background};
div{
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    gap: .5rem;
}
`
