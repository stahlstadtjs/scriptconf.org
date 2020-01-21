import Content from '../content/2019/dylan.mdx';
import Head from "next/head";
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="dylan" last="schiemann">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-dylan.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-dylan.jpg" />
      <title>Dylan Schiemann | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Content />
  </SpeakerDetail>
}
