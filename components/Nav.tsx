import Link from 'next/link';
import { FC } from 'react';
import { ScriptConfLogo } from '../components/HeaderLogo'

import '../styles/Nav.css'

export const Nav:FC<{}> = () => <nav>
  <div className="nav-wrapper">
    <Link href="/"><a className="block"><ScriptConfLogo title="ScriptConf logo" style={{ width: '200px', height: '34px' }} /></a></Link>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
  </div>
</nav>
