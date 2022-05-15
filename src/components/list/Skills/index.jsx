import { Article } from 'components/list/Skills/styled_skills'
import { H2 } from 'components/label/label_Styles'
import Skill from 'components/home/skill'
export default function ListSkills(props) {
  return (
    <Article id={props.id}>
      <H2>{props.title}</H2>
      <div>
        {props.data &&
          props.data.map((content, i) => (
            <Skill key={i} name={content.name} icon={content.icon} />
          ))}
      </div>
    </Article>
  )
}
