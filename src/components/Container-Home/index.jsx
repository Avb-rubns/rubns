
import { Section, Article } from './home.styles'

export default function ContainerPage (props) {
  console.log(props.children)
  return (
    <>
        <main>
            {props.children[0]}
        </main>
        <Section id="about-me">
            <h3>{props.about}</h3>
            <div>
                <div>
                    <h3>{props.im}</h3>
                    <p>{props.biograph}</p>
                </div>
                <div>
                    <h3>{props.education}</h3>
                    <p>{props.infoEdu}</p>
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
