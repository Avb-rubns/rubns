import { Section } from './biograph_Styles'
import List from 'components/list/Biograhp/index'
import Image from 'components/Image'
import { H2, H3, P } from 'components/label/label_Styles'

export default function ContainerBio(props) {
  return (
    <>
      <Section id="about-me">
        <H2>{props.about}</H2>
        <div>
          <Image url="https://pbs.twimg.com/profile_images/1479278364007579649/aoR8Ug-y_400x400.jpg" />
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
    </>
  )
}
