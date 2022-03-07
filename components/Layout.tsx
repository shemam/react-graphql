import { FC } from 'react'
import { Header } from './'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
