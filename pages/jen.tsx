import Jen from '../content/2019/jen.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="jen" last="looper">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-jen.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-jen.jpg" />    
    </Head>
    <Jen />
  </SpeakerDetail>
}
