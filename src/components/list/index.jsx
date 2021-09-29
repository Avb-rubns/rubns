import { Slist, Item } from './styled.list'
import { P } from 'components/Labels/labels.styles'

export default function List ({ info }) {
  return (
        <Slist>
            {
              info.studies &&
              info.studies.map((text, i) =>
              <Item key={i} >
                 {text[0] && <P>{text[0]}</P>}
                 {text[1] && <P>{text[1]}</P>}
                 {text[2] && <P>{text[2]}</P>}
              </Item>)
           }
        </Slist>
  )
}
