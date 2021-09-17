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
        h2{
            padding: 0;
            margin: 0;
        }
    }
`

export const Finds = styled.section`
padding: 1rem 2rem;
& > h3{
    padding: 1rem 1rem;
}
& > div{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
    justify-items: center;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    
}

@media all and (max-width: 768px) {
        & > h3 {
            font-size: 18px;
            text-align: center;
        }
    }
`
export const msj = styled.h2`
padding:0
`
