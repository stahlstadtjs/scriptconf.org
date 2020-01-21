import '../../styles/Layout.css'

import { FC } from 'react'
import React from 'react'

export const Layout:FC<{}> = ({ children }) => {
  return <>
    <main>
      { children }
    </main>
  </>
}
