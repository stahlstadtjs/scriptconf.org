import Head from "next/head";
import React from 'react'
import Speaker from '../content/2019/samuel.mdx';
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="samuel" last="snopko">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-samuel.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-samuel.jpg" />    
      <title>Samuel Snopko | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Speaker />
  </SpeakerDetail>
}
