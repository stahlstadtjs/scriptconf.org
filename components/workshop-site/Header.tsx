import '../../styles/Header.css';

import { Button } from './Button';
import { FC } from 'react';
import { Logo } from './Logo';
import React from 'react'

export const Header:FC<{}> = ({ children }) => {
  return <div className="masthead gradient photo">
    <div className="wrapper">
      { children }
    </div>
  </div>
}

export const HeaderWithLogo:FC<{}> = ({ children }) => {
  const content = children || <div className="button-line">
    <Button url='#innsbruck'>29.3. Innsbruck</Button>
    <Button url='#vienna'>1.4. Vienna</Button>
    <Button url='#linz'>2.4. Linz</Button>
  </div>
  return <Header>
    <div className="meta">
      <Logo/>
      { content }
    </div>
  </Header>
}
