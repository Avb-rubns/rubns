import { Slist, Item } from './styled_list'
import { P } from 'components/label/label_Styles'

export default function List({ info }) {
  return (
    <Slist>
      {info.studies &&
        info.studies.map((text, i) => (
          <Item key={i}>
            {text[0] && <P weigth="600">{text[0]}</P>}
            {text[1] && <P>{text[1]}</P>}
            {text[2] && <P>{text[2]}</P>}
          </Item>
        ))}
    </Slist>
  )
}
