import CardInfo from 'components/card'

export function RenderCard ({ result }) {
  console.log(result.data)
  return (
    <>
      { result.data &&
        result.data.map((res, i) => <CardInfo key={i} {...res} />) }
    </>
  )
}
