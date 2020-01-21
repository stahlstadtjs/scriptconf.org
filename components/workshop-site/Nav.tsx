import '../../styles/Nav.css'

import React, { FC } from 'react';

import Link from 'next/link';
import { ScriptConfLogo } from './HeaderLogo'

export const Nav:FC<{}> = () => <nav className="nav">
  <div className="nav-wrapper">
    <Link href="/"><a className="block"><ScriptConfLogo title="ScriptConf logo" style={{ width: '200px', height: '34px' }} /></a></Link>
    <Link href="/"><a className="hide-sm">Home</a></Link>
    <Link href="/about"><a className="hide-sm">About</a></Link>
    <Link href="https://javascript-podcast.com"><a className="hide-sm">Podcast</a></Link>
  </div>
</nav>
