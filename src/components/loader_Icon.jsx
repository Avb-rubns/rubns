import { IconContext } from 'react-icons'

export default function LoaderIcon(props) {
  return (
    <>
      <IconContext.Provider
        value={{
          color: props.color
            ? props.color
            : ({ theme }) => theme.colors.svg.color
        }}
      >
        {props.children}
      </IconContext.Provider>
    </>
  )
}
