
import { Section, Article } from './home.styles'
import List from 'components/list'
import Image from 'components/Image'

export default function ContainerPage (props) {
  return (
    <>
        <main id="init">
            {props.children[0]}
        </main>
        <Section id="about-me">
            <h2>{props.about}</h2>
            <div>
                <Image url="https://pbs.twimg.com/profile_images/1442919376928194560/tB1Jq8FI_200x200.jpg"/>
                <div>
                    <article>
                        <h3>{props.im}</h3>
                        <p>{props.biograph}</p>
                    </article>
                    <article>
                        <h3>{props.education}</h3>
                        <List info={props.infoEdu} />
                    </article>
                </div>
            </div>
        </Section>
        <Article id="skills">
            <h3>{props.skills}</h3>
            <div>
                {props.children[1]}
            </div>
        </Article>
    </>
  )
}
