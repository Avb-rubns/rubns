import Tag from 'components/tag'

export function RenderTag({ tags }) {
  return <>{tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}</>
}
