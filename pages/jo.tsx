import Content from '../content/2019/jo.mdx';
import Head from "next/head";
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="jo" last="franchetti">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-jo.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-jo.jpg" />
      <title>Jo franchetti | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Content />
  </SpeakerDetail>
}
