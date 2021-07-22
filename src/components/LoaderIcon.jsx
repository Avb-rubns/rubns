import { IconContext } from 'react-icons'

export default function LoaderIcon (props) {
  return (
        <>
        <IconContext.Provider value={{ color: 'var(--black)' }}>
            {props.children}
        </IconContext.Provider>
        </>
  )
}
