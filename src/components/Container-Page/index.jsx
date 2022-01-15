
import { Section, Article } from './home.styles'
import List from 'components/list'
import Image from 'components/Image'
import { H2, H3, P } from 'components/Labels/labels.styles'

export default function ContainerPage (props) {
  return (
    <>
        <main>
            {props.children[0]}
        </main>
        <Section id="about-me">
            <H2>{props.about}</H2>
            <div>
                <Image url="https://pbs.twimg.com/profile_images/1479278364007579649/aoR8Ug-y_400x400.jpg"/>
                <div>
                    <article>
                        <H3 weigth="700">{props.im}</H3>
                        <P weigth="500">{props.biograph}</P>
                    </article>
                    <article>
                        <H3 weigth="700">{props.education}</H3>
                        <List info={props.infoEdu} />
                    </article>
                </div>
            </div>
        </Section>
        <Article id="skills">
            <H3 weigth="700">{props.skills}</H3>
            <div>
                {props.children[1]}
            </div>
        </Article>
    </>
  )
}
