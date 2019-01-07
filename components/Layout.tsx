import { FC } from 'react'

import '../styles/Layout.css'

export const Layout:FC<{}> = ({ children }) => {
  return <>
    <main>
      { children }
    </main>
  </>
}
