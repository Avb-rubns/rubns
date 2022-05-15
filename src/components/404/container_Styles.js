import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.code.background};
    width: calc(100vw - 25%);
    height: 500px;
    border-radius: 2px;
    padding-top: 90px;
    box-shadow: 1px 1px 5px 2px ${({ theme }) => theme.colors.card.text};

    & > article {
      display: flex;
      flex-direction: row;
      & > h1 {
        font-size: 64px;
        margin: 0 5%;
      }
      @media all and (max-width: 768px) {
        h1 {
          font-size: 3rem;
        }
      }
    }
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  @media all and (max-width: 768px) {
    h1 {
      font-size: 24px;
      text-align: center;
    }
  }
`
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: 60%;
  width: calc(100vw - calc(100vw * 0.85));
  background: ${({ theme }) => theme.colors.code.card.background};
  h1 {
    font-size: 64px;
    color: ${({ theme }) => theme.colors.code.card.text};
  }
  @media all and (max-width: 812px) {
    h1 {
      font-size: 20px;
    }
  }
`

export const Rectangle = styled.div`
  background: ${props =>
    props.background ? 'var(' + props.background + ')' : 'var(--main-color)'};
  height: 10px;
  width: ${props => (props.size ? props.size + 'px' : '200px')};
  margin: 10px 10px;
  padding: 0 10px;
  border-radius: 4px;

  @media all and (max-width: 768px) {
    width: ${props =>
      props.size ? 'calc(' + props.size / 3 + 'px )' : 200 / 3 + 'px'};
  }
`
