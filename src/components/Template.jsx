import Navbar from './nav_Bar'

export default function Template({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
