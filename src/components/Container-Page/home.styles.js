import styled from 'styled-components'

export const Section = styled.section`

    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap:1rem;
    padding:0 5rem;
    article{
        margin-top :3rem ;
        width: 100%;
    }

    & > div{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        div{
            display: flex;
            flex-direction: column;
            justify-items: center;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            padding: 0 3rem;
        }
    }
    @media all and (max-width: 768px) {
        padding: .2rem;
        gap:.5rem;
        & > div {
            flex-direction: column;
            div{
                padding: .5rem 1rem;
            }
        }
        h1 {
            font-size: 34px;
        }
}
`
export const Article = styled.article` 

    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    /*grid of skills */
    div{
    width: 80%;
    font-size: 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 768px) {
        font-size: 58px;
        }
    }
`
