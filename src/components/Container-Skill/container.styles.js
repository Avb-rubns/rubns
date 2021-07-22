import styled from 'styled-components'

export const ContainerSkill = styled.div`
    width: 80%;
    color: var(--black);
    font-size: 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    justify-items: center;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        & p{
            font-size: 23%;
        }
    }


`
