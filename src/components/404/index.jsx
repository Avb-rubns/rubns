import React from 'react'
import { Card, Container, Rectangle } from './container.styles'
import { H1 } from 'components/Labels/labels.styles'

export default function NotFound (props) {
  return (
    <Container>
        <div>
            <article>
                <H1>&lt;/&gt;</H1>
                <section>
                    <Rectangle background="--black-light" size="50"/>
                    <Rectangle background="--main-color" size="150" />
                    <Rectangle background="--gray-dark" size="350"/>
                    <Rectangle background="--white" />
                    <Rectangle background="--black-light" size="450"/>
                    <Rectangle background="--white" size="50" />
                    <Rectangle background="--gray"/>
                </section>
            </article>

            <section>
                <Rectangle background="--black-light" size="50"/>

                <Rectangle background="--gray-dark" size="250"/>
                <Rectangle background="--main-color" size="50" />
                <Rectangle background="--white" />
                <Rectangle background="--black-light" size="450"/>
                <Rectangle background="--white" size="50" />
                <Rectangle background="--gray"/>

                <Rectangle background="--gray-dark" />
                <Rectangle background="--gray" size="450"/>
                <Rectangle background="--white" size="50" />
                <Rectangle background="--black-light"/>
            </section>

            <section>
                <Card><H1>¡UPS!</H1></Card>
                <Card><H1>404</H1></Card>
                <Card><H1>😅</H1></Card>
            </section>
        </div>
        <H1 weigth="500">{props.text}</H1>
    </Container>
  )
}
