import React from 'react'
import { Card, Container, Rectangle } from './container.styles'

export default function NotFound (props) {
  return (
    <Container>
        <div>
            <article>
                <h1>&lt;/&gt;</h1>
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
                <Card><h1>¡UPS!</h1></Card>
                <Card><h1>404</h1></Card>
                <Card><h1>😅</h1></Card>
            </section>
        </div>
        <h1>{props.text}</h1>
    </Container>
  )
}
