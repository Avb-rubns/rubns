import { Tagstyled } from './tag.styled'

export default function Tag (props) {
  console.log(props.tag)
  return (
        <Tagstyled>
            {props.tag}
        </Tagstyled>
  )
}
