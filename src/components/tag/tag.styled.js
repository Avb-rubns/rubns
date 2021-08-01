import styled from 'styled-components'

export const Tagstyled = styled.span`
border-radius: 18px;
border: 1px solid ${({ theme }) => theme.colors.tag.border};
font-size: 10px;
padding: .2rem .3rem;
background-color: ${({ theme }) => theme.colors.tag.background};
`
