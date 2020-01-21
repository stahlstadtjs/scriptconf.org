import '../../styles/Wrapper.css'

import React, { FC } from "react"

export const Wrapper:FC<{}> = ({ children }) => 
  <section className="wrapper-content">{children}</section>
