import React from 'react'
import { Article, Container, Header } from 'components/Note/template.styled'

export default function ReadNote (props) {
  return (
  <Container>
      <Header>
        <h1>{props.title}</h1>
      </Header>
      <Article>

      </Article>
  </Container>
  )
}
