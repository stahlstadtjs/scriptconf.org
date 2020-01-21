import Anna from '../content/2019/anna.mdx'
import Head from "next/head";
import React from 'react'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="anna" last="henningsen">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-anna.png" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-anna.png" />    
    </Head>
    <Anna />
  </SpeakerDetail>
}
