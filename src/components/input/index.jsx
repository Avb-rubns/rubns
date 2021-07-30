import { InputStyled } from './input.styles'

export default function Input (props) {
  return (
        <InputStyled type={props.type} placeholder={props.placeholder} />
  )
}
