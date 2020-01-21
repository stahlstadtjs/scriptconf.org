import Content from '../content/about.mdx';
import React from 'react'
import { Textpage } from '../components/2019-bold/Textpage';

export default () => {
  return <Textpage title="About">
    <Content />
  </Textpage>
}
