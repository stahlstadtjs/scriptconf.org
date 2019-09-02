import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import William from '../content/2019/william.mdx';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="william" last="imoh">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-william.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-william.jpg" />    
      <title>William Imoh | Script'19 - JavaScript in Linz</title>  
    </Head>
    <William />
  </SpeakerDetail>
}
