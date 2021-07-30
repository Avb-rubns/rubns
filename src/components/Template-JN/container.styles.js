import styled from 'styled-components'

export const Header = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: grid;
        grid-auto-flow: column;
        gap: 0.8rem;

    }
    @media all and (max-width: 768px) {
        div{
            padding: 1rem;
        }
        h1 {
            font-size: 32px;
        }
    }
`

export const Finds = styled.section`
div{
    
}

@media all and (max-width: 768px) {
        h3 {
            font-size: 20px;
        }
    }
`
