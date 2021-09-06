import CardInfo from 'components/card'

export function RenderCard ({ result }) {
  return (
    <>
      { result.data &&
        result.data.map((res, i) => <CardInfo key={i} {...res} />) }
    </>
  )
}
