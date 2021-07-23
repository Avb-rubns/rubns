import { IconContext } from 'react-icons'

export default function LoaderIcon (props) {
  return (
        <>
        <IconContext.Provider value={{ color: props.color ? props.color : 'var(--dark)' }}>
            {props.children}
        </IconContext.Provider>
        </>
  )
}
