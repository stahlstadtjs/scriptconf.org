import Head from "next/head";
import React from 'react'
import Sara from '../content/2019/sara.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="sara" last="vieira">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-sara.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-sara.jpg" />    
    </Head>
    <Sara />
  </SpeakerDetail>
}
