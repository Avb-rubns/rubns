import { Slist, Item } from './styled.list'

export default function List ({ info }) {
  return (
        <Slist>
            {
              info.studies &&
              info.studies.map((text, i) =>
              <Item key={i} >
                 {text[0] && <p>{text[0]}</p>}
                 {text[1] && <p>{text[1]}</p>}
                 {text[2] && <p>{text[2]}</p>}
              </Item>)
           }
        </Slist>
  )
}
