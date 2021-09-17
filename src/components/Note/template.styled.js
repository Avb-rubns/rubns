import styled from 'styled-components'

export const Container = styled.main`
display: flex;
flex-direction: column;
gap: 3rem;
padding: 4rem 6rem;
@media all and (max-width: 768px) {
    padding: 4rem 2rem;
    align-items: center
}
`
export const Head = styled.header`
@media all and (max-width: 768px) {
    h1{
        font-size: 22px;
        text-align: center;
    }
}


`
export const Article = styled.article`
display: flex;
flex-direction: column;
align-items: center;
background: ${({ theme }) => theme.colors.code.background};
p{
    font-family: 'NotoSans SC Light';
    padding: 1rem 1.5rem;
    text-align: justify;
}
@media all and (max-width: 768px) {
    h2{
        font-size: 20px;
    }
    p{
        font-size: 13px;
        
    }
}
`
