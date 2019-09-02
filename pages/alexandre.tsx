import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Alexandre from '../content/2019/alexandre.mdx';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="alexandre" last="chopin">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-alexandre.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-alexandre.jpg" />    
      <title>Alexandre Chopin | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Alexandre />
  </SpeakerDetail>
}
