import Head from "next/head";
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Vitaly from '../content/2019/vitaly.mdx'

export default function() {
  return <SpeakerDetail first="vitaly" last="friedman">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-vitaly.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-vitaly.jpg" />    
    </Head>
    <Vitaly />
  </SpeakerDetail>
}
