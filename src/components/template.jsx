import Navbar from 'components/nav_Bar/index'

export default function Template({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
