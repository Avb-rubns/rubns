import styled from 'styled-components'

export const Container = styled.section`
    padding: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: -3rem;
    justify-content: center;

    div{
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        gap: 1rem;
        padding-top: 0.5rem;
        font-size: 1.7rem;
    }
    @media all and (max-width: 768px) {
  h1 {
    font-size: 34px;
    text-align: center;
  }
  h2 {
    font-size: 24px;
  }
}

`
export const Box = styled.a`
  display: grid;
  background: ${({ theme }) => theme.colors.socialbox.background};
  border-radius: 0.5rem;
  place-items: center;
  height: 36px;
  width: 36px;
  color: ${({ theme }) => theme.colors.socialbox.text};

`

export const Arrow = styled.a`
    bottom: 2rem;
    position: absolute;
    font-size: 2rem;
`
