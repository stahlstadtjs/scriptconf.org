import Head from "next/head";
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Vanessa from '../content/2019/vanessa.mdx';

export default function() {
  return <SpeakerDetail first="vanessa" last="böhner">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-vanessa.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-vanessa.jpg" />    
      <title>Vanessa Böhner | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Vanessa />
  </SpeakerDetail>
}
