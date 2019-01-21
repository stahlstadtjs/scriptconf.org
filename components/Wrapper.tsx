import { FC } from "react"

import '../styles/Wrapper.css'

export const Wrapper:FC<{}> = ({ children }) => 
  <section className="wrapper-content">{children}</section>
