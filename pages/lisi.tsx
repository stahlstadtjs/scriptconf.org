import Head from "next/head";
import Lisi from '../content/2019/lisi.mdx';
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="lisi" last="linhart">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-lisi.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-lisi.jpg" />    
      <title>Lisi Linhart | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Lisi />
  </SpeakerDetail>
}
