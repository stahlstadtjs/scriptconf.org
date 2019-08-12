import Jen from '../content/2019/workshop-jen.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="jen" last="looper">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-harry.jpg" />
      <title>Free Vue Vixens Workshop | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Jen />
  </SpeakerDetail>
}
